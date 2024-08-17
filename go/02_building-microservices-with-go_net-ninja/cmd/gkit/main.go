package main

import (
	"context"
	"fmt"
	"github.com/p-nerd/courses/go/03_building-microservices-with-go_net-ninja/base"
	"log"
	"os"
	"os/signal"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	a := base.New(base.LoadConf())

	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	err = a.Start(ctx)

	if err != nil {
		fmt.Println("failed to start app:", err)
	}
}
