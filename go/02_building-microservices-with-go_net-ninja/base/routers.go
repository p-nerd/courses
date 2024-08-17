package base

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"github.com/p-nerd/courses/go/03_building-microservices-with-go_net-ninja/pkg/order"
)

func (a *App) loadRoutes() {
	router := chi.NewRouter()

	router.Use(middleware.Logger)
	router.Use(ResponseContentType)

	router.Route("/orders", a.loadOrderRoutes)

	a.Router = router
}

func (a *App) loadOrderRoutes(router chi.Router) {
	orderHandler := &order.Handler{
		Repo: &order.RedisRepo{
			Client: a.Redis,
		},
	}

	router.Post("/", orderHandler.Create)
	router.Get("/", orderHandler.List)
	router.Get("/{id}", orderHandler.Get)
	router.Patch("/{id}", orderHandler.Update)
	router.Delete("/{id}", orderHandler.Delete)
}
