package main

import (
	"rssagg/api/v1/users"
	"rssagg/internal/db"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
)

func v1Routes(db *db.Queries) *chi.Mux {
	r := chi.NewRouter()

	usersHandler := users.Handler{DB: db}

	r.Post("/users", usersHandler.Save)

	return r
}

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

	h := Handler{db}

	r.Mount("/v1", v1Routes(db))

	r.Get("/health", h.Health)
	r.NotFound(h.Health)

	return r
}
