package model

import (
	"time"

	"github.com/google/uuid"
)

type Order struct {
	Id          uuid.UUID  `json:"id"`
	CustomerId  uuid.UUID  `json:"customer_id"`
	Items       []Item     `json:"items"`
	CreatedAt   *time.Time `json:"created_at"`
	UpdatedAt   *time.Time `json:"updated_at"`
	ShippedAt   *time.Time `json:"shipped_at"`
	CompletedAt *time.Time `json:"completed_at"`
}

type Item struct {
	Id       uuid.UUID `json:"id"`
	Quantity uint      `json:"quantity"`
	Price    uint      `json:"price"`
}
