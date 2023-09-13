package app

import (
	"context"
	"fmt"
	"net/http"

	"github.com/redis/go-redis/v9"
)

type App struct {
	router http.Handler
	redis  *redis.Client
}

func New() *App {
	return &App{
		router: loadRoutes(),
		redis:  redis.NewClient(&redis.Options{}),
	}
}

func (a *App) Start(ctx context.Context) error {
	server := &http.Server{
		Addr:    ":3000",
		Handler: a.router,
	}

	err := a.redis.Ping(ctx).Err()
	if err != nil {
		return fmt.Errorf("failed to connect with redis: %w", err)
	}

	fmt.Println("Staring server...")

	err = server.ListenAndServe()
	if err != nil {
		return fmt.Errorf("failed to start server: %w", err)
	}
	return nil
}
