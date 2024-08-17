package base

import (
	"os"
	"strconv"
)

type Conf struct {
	ServerPort   uint16
	RedisAddress string
}

func LoadConf() Conf {
	config := Conf{
		ServerPort:   3000,
		RedisAddress: "localhost:6379",
	}

	if redisAddr, exists := os.LookupEnv("REDIS_ADDR"); exists {
		config.RedisAddress = redisAddr
	}

	if serverPort, exists := os.LookupEnv("SERVER_PORT"); exists {
		if port, err := strconv.ParseUint(serverPort, 10, 16); err == nil {
			config.ServerPort = uint16(port)
		}
	}

	return config
}
