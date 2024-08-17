-- name: CreateUser :one
INSERT INTO
    users (id, name, created_at, updated_at)
VALUES
    (?, ?, ?, ?) RETURNING *;
