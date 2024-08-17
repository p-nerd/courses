package base

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/redis/go-redis/v9"
)

type App struct {
	Router http.Handler
	Redis  *redis.Client
	Conf   Conf
}

func New(config Conf) *App {
	app := &App{
		Redis: redis.NewClient(&redis.Options{
			Addr: config.RedisAddress,
		}),
	}
	app.Conf = config

	app.loadRoutes()

	return app
}

func (a *App) Start(ctx context.Context) error {
	server := &http.Server{
		Addr:    fmt.Sprintf(":%v", a.Conf.ServerPort),
		Handler: a.Router,
	}

	err := a.Redis.Ping(ctx).Err()
	if err != nil {
		return fmt.Errorf("failed to connect with redis: %w", err)
	}

	defer func() {
		if err := a.Redis.Close(); err != nil {
			fmt.Println("failed to close redis: ", err)
		}
	}()

	fmt.Println("Staring server... ON port:", a.Conf.ServerPort)

	ch := make(chan error, 1)

	go func() {
		err = server.ListenAndServe()
		if err != nil {
			ch <- fmt.Errorf("failed to start server: %w", err)
		}
		close(ch)
	}()

	select {
	case err := <-ch:
		return err
	case <-ctx.Done():
		timeout, cancel := context.WithTimeout(context.Background(), time.Second*10)
		defer cancel()

		return server.Shutdown(timeout)
	}
}
