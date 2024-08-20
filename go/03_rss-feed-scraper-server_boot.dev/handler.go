package main

import (
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
