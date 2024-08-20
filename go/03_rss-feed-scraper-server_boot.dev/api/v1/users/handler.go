package users

import (
	"encoding/json"
	"fmt"
	"net/http"
	"rssagg/internal/db"
	"rssagg/internal/res"
	"time"

	"github.com/google/uuid"
)

type Handler struct {
	DB *db.Queries
}

func (h *Handler) Save(w http.ResponseWriter, r *http.Request) {
	payload := &struct {
		Name string `json:"name"`
	}{}
	err := json.NewDecoder(r.Body).Decode(payload)
	if err != nil {
		res.Err(w, 400, fmt.Sprintf("Error parsing json payload: %s", err))
		return
	}

	currentTime := time.Now().UTC()

	user, err := h.DB.CreateUser(r.Context(), db.CreateUserParams{
		ID:        uuid.New(),
		Name:      payload.Name,
		CreatedAt: currentTime,
		UpdatedAt: currentTime,
	})
	if err != nil {
		res.Err(w, 500, fmt.Sprintf("Couldn't create user: %s", err))
		return
	}

	res.Json(w, 201, new(user))
}
