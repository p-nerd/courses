package main

import (
	"errors"
	"fmt"
)

func main() {
	numerator, denominator := 10, 5
	result, remainder, err := inDivision(numerator, denominator)

	switch {
	case err != nil:
		fmt.Println(err.Error())
	case remainder == 0:
		fmt.Println(result)
	default:
		fmt.Printf("%v:%v\n", result, remainder)
	}

	switch remainder {
	case 0:
		fmt.Println("The division was exist")
	case 1, 2:
		fmt.Println("The division was close")
	default:
		fmt.Println("The division was not close")
	}
}

func inDivision(numerator, denominator int) (result, remainder int, err error) {
	if denominator == 0 {
		return result, remainder, errors.New("Can't divide by zero")
	}
	result = numerator / denominator
	remainder = numerator % denominator
	return result, remainder, nil
}
