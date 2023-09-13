package main

import (
	"context"
	"fmt"

	"github.com/p-nerd/courses/go/03_building-microservices-with-go_net-ninja/app"
)

func main() {
	app := app.New()

	err := app.Start(context.TODO())
	if err != nil {
		fmt.Println("failed to start app", err)
	}
}
