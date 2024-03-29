package tasks

type Task struct {
	ID        int
	Title     string
	Completed bool
	Position  int
}

type Data struct {
	Tasks          []Task
	TotalCount     int
	CompletedCount int
}
