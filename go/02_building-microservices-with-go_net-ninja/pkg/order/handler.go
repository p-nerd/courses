package order

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"

	"github.com/p-nerd/courses/go/03_building-microservices-with-go_net-ninja/pkg/func"
)

type Repo interface {
	List(ctx context.Context, page ListAllPage) (ListResult, error)
	Find(ctx context.Context, id uuid.UUID) (Order, error)
	Insert(ctx context.Context, order Order) error
	Remove(ctx context.Context, id uuid.UUID) error
	Update(ctx context.Context, order Order) error
}

type Handler struct {
	Repo Repo
}

func (h *Handler) Create(w http.ResponseWriter, r *http.Request) {
	var body struct {
		CustomerId uuid.UUID `json:"customer_id"`
		Items      []Item    `json:"items"`
	}

	if err := _func.DecodeBody(r.Body, &body); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	now := time.Now().UTC()
	id := uuid.New()

	newOrder := Order{
		Id:         id,
		CustomerId: body.CustomerId,
		Items:      body.Items,
		CreatedAt:  &now,
		UpdatedAt:  &now,
	}

	err := h.Repo.Insert(r.Context(), newOrder)
	if err != nil {
		fmt.Println("failed to insert: ", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	res, err := _func.EncodeBody(newOrder)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	_, err = w.Write(res)
	if err != nil {
		fmt.Println("failed to write to response: ", err)
		return
	}
}

func (h *Handler) List(w http.ResponseWriter, r *http.Request) {
	x := r.URL.Query().Get("cursor")
	cursor, err := parseOrderCursor(x)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	size := uint64(10)

	res, err := h.Repo.List(r.Context(), ListAllPage{Size: size, Offset: cursor})

	var response struct {
		Items  []Order `json:"items"`
		Cursor uint64  `json:"cursor"`
	}

	response.Items = res.Orders
	response.Cursor = res.Cursor

	data, err := _func.EncodeBody(response)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	_, err = w.Write(data)
	if err != nil {
		fmt.Println("failed to write to response: ", err)
		return
	}
}

func (h *Handler) Get(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")

	orderID, err := uuid.FromBytes([]byte(idParam))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := h.Repo.Find(r.Context(), orderID)
	if errors.Is(err, ErrNotFound) {
		w.WriteHeader(http.StatusNotFound)
		return
	} else if err != nil {
		fmt.Println("failed to find by id:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(res); err != nil {
		fmt.Println("failed to marshal:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func (h *Handler) Update(w http.ResponseWriter, r *http.Request) {
	var body struct {
		Status string `json:"status"`
	}

	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	idParam := chi.URLParam(r, "id")

	orderID, err := uuid.FromBytes([]byte(idParam))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	theOrder, err := h.Repo.Find(r.Context(), orderID)
	if errors.Is(err, ErrNotFound) {
		w.WriteHeader(http.StatusNotFound)
		return
	} else if err != nil {
		fmt.Println("failed to find by id:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	const completedStatus = "completed"
	const shippedStatus = "shipped"
	now := time.Now().UTC()

	switch body.Status {
	case shippedStatus:
		if theOrder.ShippedAt != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		theOrder.ShippedAt = &now
	case completedStatus:
		if theOrder.CompletedAt != nil || theOrder.ShippedAt == nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		theOrder.CompletedAt = &now
	default:
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = h.Repo.Update(r.Context(), theOrder)
	if err != nil {
		fmt.Println("failed to insert:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(theOrder); err != nil {
		fmt.Println("failed to marshal:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func (h *Handler) Delete(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")

	orderID, err := uuid.FromBytes([]byte(idParam))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = h.Repo.Remove(r.Context(), orderID)
	if errors.Is(err, ErrNotFound) {
		w.WriteHeader(http.StatusNotFound)
		return
	} else if err != nil {
		fmt.Println("failed to find by id:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
