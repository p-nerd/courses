package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	err := OpenDB()
	if err != nil {
		log.Panic(err)
	}
	defer CloseDB()

	err = SetupDB()
	if err != nil {
		log.Panic(err)
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.New("").ParseFiles("tmpls/home.tmpl.html")
		if err != nil {
			panic(err)
		}
		tmpl.ExecuteTemplate(w, "Base", nil)
	})

	r.Handle("/*", http.StripPrefix("/", http.FileServer(http.Dir("./public"))))
	http.ListenAndServe(":3000", r)
}
