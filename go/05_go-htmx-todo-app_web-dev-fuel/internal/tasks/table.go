package tasks

import (
	"context"
	"database/sql"

	"github.com/p-nerd/hof"
)

type Table struct {
	DB *sql.DB
}

func (t *Table) Fetchs() ([]Task, error) {
	rows, err := t.DB.Query(
		"SELECT id, title, completed, position FROM tasks ORDER BY position;",
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	tasks := []Task{}
	for rows.Next() {
		task := Task{}
		err := rows.Scan(&task.ID, &task.Title, &task.Completed, &task.Position)
		if err != nil {
			return nil, err
		}
		tasks = append(tasks, task)
	}
	return tasks, nil
}

func (t *Table) Fetch(id int) (Task, error) {
	row := t.DB.QueryRow("SELECT id, title, completed, position FROM tasks WHERE id=?;", id)
	task := Task{}
	err := row.Scan(&task.ID, &task.Title, &task.Completed, &task.Position)
	if err != nil {
		return Task{}, err
	}
	return task, nil
}

func (t *Table) Update(task Task) (Task, error) {
	_, err := t.DB.Exec(
		"UPDATE tasks SET title=?, completed=?, position=? WHERE id=?",
		task.Title,
		task.Completed,
		task.Position,
		task.ID,
	)
	if err != nil {
		return Task{}, err
	}
	return t.Fetch(task.ID)
}

func (t *Table) Count() (int, error) {
	count := 0
	err := t.DB.QueryRow("SELECT COUNT(*) FROM tasks").Scan(&count)
	return count, err
}

func (t *Table) Create(title string) (Task, error) {
	position, err := t.Count()
	if err != nil {
		return Task{}, err
	}
	result, err := t.DB.Exec(
		"INSERT INTO tasks (title, position) VALUES (?, ?)",
		title,
		position+1,
	)
	if err != nil {
		return Task{}, err
	}
	lastInsertedID, err := result.LastInsertId()
	if err != nil {
		return Task{}, err
	}
	return t.Fetch(int(lastInsertedID))
}

func (t *Table) Delete(ctx context.Context, id int) error {
	if _, err := t.DB.Exec("DELETE FROM tasks WHERE id=?", id); err != nil {
		return err
	}
	tasks, err := t.Fetchs()
	if err != nil {
		return err
	}
	ids := hof.Map(tasks, func(task Task) int { return task.ID })
	return t.OrderPositions(ctx, ids)
}

func (t *Table) OrderPositions(ctx context.Context, ids []int) error {
	tx, err := t.DB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	for i, id := range ids {
		if _, err := tx.Exec("UPDATE tasks SET position=? WHERE id=?", i, id); err != nil {
			return err
		}
	}
	return tx.Commit()
}
