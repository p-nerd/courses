package main

import (
	"fmt"
	"strconv"
)

var a float32 = 20.5

var (
	actorName    string = "xyz"
	companion    string = "zyz"
	doctorNumber int    = 3
	season       int    = 3
)

var (
	counter int = 0
)

var theURL = "http://google.com"

func main() {
	var i int
	i = 32

	var j int = 20

	var k = 30

	x := 40

	y := 40.3

	fmt.Printf("%v %T\n", a, a)
	fmt.Printf("%v %T\n", i, i)
	fmt.Printf("%v %T\n", j, j)
	fmt.Printf("%v %T\n", k, k)
	fmt.Printf("%v %T\n", x, x)
	fmt.Printf("%v %T\n", y, y)
	fmt.Printf("%v %T\n", theURL, theURL)

	// type conversion
	var b int = 25
	fmt.Printf("%v %T\n", b, b)
	var c float32 = float32(b)
	fmt.Printf("%v %T\n", c, c)

	var d float32 = 25.5
	fmt.Printf("%v %T\n", d, d)
	var e int = int(d)
	fmt.Printf("%v %T\n", e, e)

	f := 98
	sf := string(f)
	fmt.Printf("%v %T\n", f, f)
	fmt.Printf("%v %T\n", sf, sf)
	sf2 := strconv.Itoa(f)
	fmt.Printf("%v %T\n", sf2, sf2)
}
