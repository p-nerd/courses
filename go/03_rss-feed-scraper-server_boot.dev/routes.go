package main

import (
	"rssagg/internal/db"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
)

func routes(db *db.Queries) *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	v1r := chi.NewRouter()

	handler := Handler{db}

	v1r.Get("/health", handler.Health)
	v1r.Post("/users", handler.CreateUser)

	r.Mount("/v1", v1r)
	r.NotFound(handler.Health)

	return r
}
