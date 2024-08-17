package order

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	
	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
)

type RedisRepo struct {
	Client *redis.Client
}

type ListResult struct {
	Orders []Order
	Cursor uint64
}

type ListAllPage struct {
	Size   uint64
	Offset uint64
}

func orderKey(id uuid.UUID) string {
	return fmt.Sprintf("order:%v", id)
}

var ErrNotFound = errors.New("order does not exist")

func (r *RedisRepo) List(ctx context.Context, page ListAllPage) (ListResult, error) {
	res := r.Client.SScan(ctx, "orders", page.Offset, "*", int64(page.Size))

	keys, cursor, err := res.Result()
	if err != nil {
		return ListResult{}, fmt.Errorf("failed to get order ids: %w", err)
	}

	if len(keys) == 0 {
		return ListResult{
			Orders: []Order{},
		}, nil
	}

	xs, err := r.Client.MGet(ctx, keys...).Result()
	if err != nil {
		return ListResult{}, fmt.Errorf("failed to get orders: %w", err)
	}

	orders := make([]Order, len(xs))

	for i, x := range xs {
		x := x.(string)
		var order Order

		err := json.Unmarshal([]byte(x), &order)
		if err != nil {
			return ListResult{}, fmt.Errorf("failed to decode order json: %w", err)
		}

		orders[i] = order
	}

	return ListResult{
		Orders: orders,
		Cursor: cursor,
	}, nil
}

func (r *RedisRepo) Find(ctx context.Context, id uuid.UUID) (Order, error) {
	key := orderKey(id)

	value, err := r.Client.Get(ctx, key).Result()
	if errors.Is(err, redis.Nil) {
		return Order{}, ErrNotFound
	} else if err != nil {
		return Order{}, fmt.Errorf("failed to get order: %w", err)
	}

	var o Order
	err = json.Unmarshal([]byte(value), &o)
	if err != nil {
		return Order{}, fmt.Errorf("failed to decode order json: %w", err)
	}

	return o, nil
}

func (r *RedisRepo) Insert(ctx context.Context, order Order) error {
	orderString, err := json.Marshal(order)
	if err != nil {
		return fmt.Errorf("failed to encode order: %w", err)
	}

	key := orderKey(order.Id)

	txn := r.Client.TxPipeline()

	if err := txn.SetNX(ctx, key, string(orderString), 0).Err(); err != nil {
		txn.Discard()
		return fmt.Errorf("failed to set order: %w", err)
	}

	if err := txn.SAdd(ctx, "orders", key).Err(); err != nil {
		return fmt.Errorf("failed to add to orders set: %w", err)
	}

	if _, err := txn.Exec(ctx); err != nil {
		return fmt.Errorf("failed to insert redis exec: %w", err)
	}

	return nil
}

func (r *RedisRepo) Remove(ctx context.Context, id uuid.UUID) error {
	key := orderKey(id)

	txn := r.Client.TxPipeline()

	err := txn.Del(ctx, key).Err()
	if errors.Is(err, redis.Nil) {
		txn.Discard()
		return ErrNotFound
	} else if err != nil {
		txn.Discard()
		return fmt.Errorf("failed to delete order: %w", err)
	}

	if err := txn.SRem(ctx, "orders", key).Err(); err != nil {
		txn.Discard()
		return fmt.Errorf("failed to delete to orders set: %w", err)
	}

	return nil
}

func (r *RedisRepo) Update(ctx context.Context, order Order) error {
	orderString, err := json.Marshal(order)
	if err != nil {
		return fmt.Errorf("failed to encode order: %w", err)
	}

	key := orderKey(order.Id)

	err = r.Client.SetXX(ctx, key, string(orderString), 0).Err()
	if errors.Is(err, redis.Nil) {
		return ErrNotFound
	} else if err != nil {
		return fmt.Errorf("failed to delete order: %w", err)
	}

	return nil
}
