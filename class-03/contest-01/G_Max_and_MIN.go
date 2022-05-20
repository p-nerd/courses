package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

func solve() {

}

func main() {
	io := newBuffIO()
	defer io.Flush()

	t := 0
	mn := math.MaxInt
	mx := math.MinInt
	tmp := 0

	io.Read(&t)
	for i := 1; i <= t; i++ {
		io.Read(&tmp)
		mn = int(math.Min(float64(mn), float64(tmp)))
		mx = int(math.Max(float64(mx), float64(tmp)))
	}

	io.Write("%d %d\n", mn, mx)

	// var t int
	// io.Read(&t)
	// for i := 1; i <= t; i++ {
	// 	solve()
	// 	// io.Write("Case #%d:\n", i)
	// }
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
