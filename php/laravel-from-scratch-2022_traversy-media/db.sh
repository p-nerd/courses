#!/bin/zsh

docker run --name local-mariadb --rm -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=laragig -p 3306:3306 -v ~/.db-storage/laragig:/var/lib/mysql -d mariadb 