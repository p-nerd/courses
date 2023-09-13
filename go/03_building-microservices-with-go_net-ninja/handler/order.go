package handler

import (
	"fmt"
	"net/http"
)

type Order struct {
}

func (o *Order) Create(w http.ResponseWriter, r *http.Request) {
	fmt.Println("create")
}

func (o *Order) List(w http.ResponseWriter, r *http.Request) {
	fmt.Println("list")
}

func (o *Order) Get(w http.ResponseWriter, r *http.Request) {
	fmt.Println("get")
}

func (o *Order) Update(w http.ResponseWriter, r *http.Request) {
	fmt.Println("update")
}

func (o *Order) Delete(w http.ResponseWriter, r *http.Request) {
	fmt.Println("update")
}
