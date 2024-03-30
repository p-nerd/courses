package main

import (
	"log"
	"net/http"
	"todo/internal/tasks"
	"todo/pkg/db"
	"todo/pkg/tmpl"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	err := db.OpenDB()
	if err != nil {
		log.Panic(err)
	}
	defer db.CloseDB()

	err = db.SetupDB()
	if err != nil {
		log.Panic(err)
	}

	err = tmpl.ParseTmpls()
	if err != nil {
		log.Panic(err)
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	h := tasks.NewHandler(db.DB, tmpl.Tmpl)

	r.Get("/", h.GetTasks)
	r.Post("/tasks", h.SaveTask)

	r.Handle("/*", http.StripPrefix("/", http.FileServer(http.Dir("./public"))))
	http.ListenAndServe(":3000", r)
}
