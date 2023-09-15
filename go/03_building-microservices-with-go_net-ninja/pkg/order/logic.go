package order

import (
	"strconv"
)

func parseOrderCursor(cursor string) (uint64, error) {
	if cursor == "" {
		return 0, nil
	}
	cursorNum, err := strconv.ParseUint(cursor, 10, 64)
	if err != nil {
		return 0, err
	}
	return cursorNum, nil
}
