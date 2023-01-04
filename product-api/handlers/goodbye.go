package handlers

import (
	"log"
	"net/http"
)

type goodbye struct {
	l *log.Logger
}

func (g *goodbye) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	g.l.Println("Goodbye Hello World")
	w.Write([]byte("Goodbye Hello World"))
}

func NewGoodbye(l *log.Logger) *goodbye {
	return &goodbye{l}
}
