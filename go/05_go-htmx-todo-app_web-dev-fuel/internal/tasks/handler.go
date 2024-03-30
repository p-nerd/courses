package tasks

import (
	"database/sql"
	"html/template"
	"log"
	"net/http"
)

type Handler struct {
	Table *Table
	Tmpl  *template.Template
}

func NewHandler(db *sql.DB, tmpl *template.Template) *Handler {
	return &Handler{
		Table: &Table{
			DB: db,
		},
		Tmpl: tmpl,
	}
}

func (h *Handler) GetTasks(w http.ResponseWriter, _ *http.Request) {
	tasks, err := h.Table.Fetchs()
	if err != nil {
		log.Printf("error fetching tasks: %v", err)
		return
	}
	completedCount, err := h.Table.CompletedCount()
	if err != nil {
		log.Printf("error fetching tasks: %v", err)
		return
	}
	h.Tmpl.ExecuteTemplate(w, "Base", Data{
		Tasks:          tasks,
		TotalCount:     len(tasks),
		CompletedCount: completedCount,
	})
}

func (h *Handler) SaveTask(w http.ResponseWriter, r *http.Request) {
	title := r.FormValue("title")
	if title == "" {
		h.Tmpl.ExecuteTemplate(w, "Form", nil)
		return
	}
	_, err := h.Table.Create(title)
	if err != nil {
		log.Printf("error creating task: %v", err)
		return
	}
	totalCount, err := h.Table.Count()
	if err != nil {
		log.Printf("error creating task: %v", err)
		return
	}
	completedCount, err := h.Table.CompletedCount()
	if err != nil {
		log.Printf("error creating task: %v", err)
		return
	}

	w.WriteHeader(http.StatusCreated)
	h.Tmpl.ExecuteTemplate(w,
		"Form",
		nil,
	)
	h.Tmpl.ExecuteTemplate(
		w,
		"TotalCount",
		map[string]any{"TotalCount": totalCount, "SwapOOB": true},
	)
	h.Tmpl.ExecuteTemplate(
		w,
		"CompletedCount",
		map[string]any{"CompletedCount": completedCount, "SwapOOB": true},
	)

}
