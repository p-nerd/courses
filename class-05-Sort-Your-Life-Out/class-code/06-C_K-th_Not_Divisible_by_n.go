package main

import (
	"bufio"
	"fmt"
	"os"
)

func solve(n, k int64) (res int64) {
	low, high := int64(1), int64(1e18)
	for low <= high {
		mid := low + (high-low)/2
		not_divisible := mid - (mid / n)
		if not_divisible == k {
			if mid%n != 0 {
				res = mid
				return
			}
			high = mid - 1
		} else if not_divisible < k {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	res = -1
	return
}

func main() {
	io := newBuffIO()
	defer io.Flush()

	var t, n int64
	var k, i int64

	io.Read(&t)
	for i = 1; i <= t; i++ {
		io.Read(&n, &k)
		res := solve(n, k)
		io.Write("%v\n", res)
	}
}

type buffIO struct {
	r *bufio.Reader
	w *bufio.Writer
}

func newBuffIO() buffIO {
	return buffIO{
		r: bufio.NewReader(os.Stdin),
		w: bufio.NewWriter(os.Stdout),
	}
}

func (io *buffIO) Read(args ...interface{}) {
	_, _ = fmt.Fscan(io.r, args...)
}

func (io *buffIO) Write(format string, args ...interface{}) {
	_, _ = fmt.Fprintf(io.w, format, args...)
}

func (io *buffIO) Flush() {
	_ = io.w.Flush()
}
