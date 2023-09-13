package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/p-nerd/courses/go/03_building-microservices-with-go_net-ninja/app"
)

func main() {
	app := app.New()

	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	err := app.Start(ctx)

	if err != nil {
		fmt.Println("failed to start app:", err)
	}
}
