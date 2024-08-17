package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"rssagg/internal/db"
	"rssagg/internal/res"
)

type Handler struct {
	db *db.Queries
}

func (h *Handler) Health(w http.ResponseWriter, r *http.Request) {
	res.Json(w, 200, struct{}{})
}

func (h *Handler) NotFound(w http.ResponseWriter, r *http.Request) {
	res.Err(w, 404, "Route not found")
}

func (h *Handler) CreateUser(w http.ResponseWriter, r *http.Request) {
	payload := &struct {
		Name string `json:"name"`
	}{}
	err := json.NewDecoder(r.Body).Decode(payload)
	if err != nil {
		res.Err(w, 400, fmt.Sprintln("Error parsing json payload:", err))
		return
	}
	h.db.CreateUser(r.Context(), db.CreateUserParams{})
}
