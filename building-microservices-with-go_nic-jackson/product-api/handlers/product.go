package handlers

import (
	"log"
	"net/http"
	"regexp"
	"strconv"

	"github.com/shihab4t/microservices-with-go/product-api/data"
)

type Product struct {
	l *log.Logger
}

func NewProduct(l *log.Logger) *Product {
	return &Product{l}
}

func (p *Product) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		p.getProducts(w, r)
	case http.MethodPost:
		p.addProduct(w, r)
	case http.MethodPut:
		rg := regexp.MustCompile(`/([0-9]+)`)
		g := rg.FindAllStringSubmatch(r.URL.Path, -1)
		if len(g) != 1 {
			http.Error(w, "Invalid URI", http.StatusBadRequest)
			return
		}
		if len(g[0]) != 2 {
			http.Error(w, "Invalid URI 2", http.StatusBadRequest)
			return
		}
		idString := g[0][1]
		id, err := strconv.Atoi(idString)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}
		p.l.Println("Got id: ", id)
		p.updateProduct(id, w, r)

	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (p *Product) getProducts(w http.ResponseWriter, r *http.Request) {
	p.l.Println("Handle GET Products")
	lp := data.GetProducts()
	err := lp.ToJSON(w)
	if err != nil {
		http.Error(w, "Unable to marshal json", http.StatusInternalServerError)
	}
}

func (p *Product) addProduct(w http.ResponseWriter, r *http.Request) {
	p.l.Println("Handle POST Product")
	prod := &data.Product{}
	err := prod.FromJSON(r.Body)
	if err != nil {
		http.Error(w, "Unable to unmarshal json", http.StatusBadRequest)
	}
	p.l.Printf("Prod: %#v\n", prod)
	data.AddProduct(prod)
}

func (p *Product) updateProduct(id int, w http.ResponseWriter, r *http.Request) {
	p.l.Println("Handle PUT Product")

	prod := &data.Product{}
	err := prod.FromJSON(r.Body)
	if err != nil {
		http.Error(w, "Unable to unmarshal json", http.StatusBadRequest)
		return
	}
	p.l.Printf("Prod: %#v\n", prod)
	err = data.UpdateProduct(id, prod)
	if err == data.ErrorProductNotFound {
		http.Error(w, "Product not found by id: "+string(rune(id)), http.StatusNotFound)
		return
	}
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
