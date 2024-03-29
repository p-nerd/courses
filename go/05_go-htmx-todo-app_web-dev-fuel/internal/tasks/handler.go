package tasks

import (
	"database/sql"
	"html/template"
	"log"
	"net/http"

	"github.com/p-nerd/hof"
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

func (h *Handler) GetTasks(w http.ResponseWriter, r *http.Request) {
	tasks, err := h.Table.Fetchs()
	if err != nil {
		log.Printf("error fetching tasks: %v", err)
		return
	}
	completedTasks := hof.Filter(
		tasks,
		func(_ int, task Task, _ []Task) bool { return task.Completed },
	)
	h.Tmpl.ExecuteTemplate(w, "Base", Data{
		Tasks:          tasks,
		TotalCount:     len(tasks),
		CompletedCount: len(completedTasks),
	})
}
