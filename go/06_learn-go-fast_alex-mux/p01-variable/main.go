package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	s := "Γ Hello"
	fmt.Println("The byte length of string: ", len(s))
	fmt.Println("The real length of string: ", utf8.RuneCountInString(s))

	rune := 'a'
	fmt.Println(rune)

	const hello string = "World"
	const five int = 5

	fmt.Println(hello, five)
}
