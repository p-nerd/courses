package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func OpenDB() error {
	db, err := sql.Open("sqlite3", "./database.sqlite")
	if err != nil {
		return err
	}
	DB = db
	return nil
}

func CloseDB() error {
	return DB.Close()
}

func SetupDB() error {
	_, err := DB.Exec(
		`create table if not exists tasks (
            id integer not null primary key,
            title text,
            completed boolean default false,
            position integer
        );`,
	)
	if err != nil {
		return err
	}
	return nil
}
