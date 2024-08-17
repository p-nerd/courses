package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"
	"rssagg/internal/db"

	"github.com/joho/godotenv"
)

func getEnv(key string) string {
	value := os.Getenv(key)
	if value == "" {
		log.Fatalf("%s is not found in the environment", key)
	}
	log.Printf("%s: %s", key, value)
	return value
}

func getDB() *db.Queries {
	dbFile := getEnv("DB_FILE")
	conn, err := sql.Open("sqlite3", dbFile)
	if err != nil {
		log.Fatalln("Can't connect to database: ", err)
	}
	return db.New(conn)
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	port := getEnv("PORT")
	server := &http.Server{
		Handler: routes(getDB()),
		Addr:    ":" + port,
	}

	log.Println("Server starting on port: " + port)
	err = server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
