package handlers

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

type hello struct {
	l *log.Logger
}

func (h *hello) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	h.l.Println("Hello World")
	d, err := io.ReadAll(r.Body)
	if err != nil {
		// w.WriteHeader(http.StatusBadRequest)
		// w.Write([]byte("Ooops"))
		http.Error(w, "Ooops", http.StatusBadRequest)
		return
	}
	h.l.Println(string(d))
	fmt.Fprintln(w, string(d))
}

func NewHello(l *log.Logger) *hello {
	return &hello{l}
}
