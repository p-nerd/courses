package _func

import (
	"encoding/json"
	"fmt"
	"io"
)

func DecodeBody(body io.ReadCloser, receiver any) error {
	if err := json.NewDecoder(body).Decode(&receiver); err != nil {
		fmt.Println("failed to decode: ", err)
		return err
	}
	return nil
}

func EncodeBody(data any) ([]byte, error) {
	res, err := json.Marshal(data)
	if err != nil {
		fmt.Println("failed to marshal: ", err)
		return []byte(""), err
	}
	return res, nil
}
