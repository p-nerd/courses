dev:
	go build . && ./rssagg

migrate:
	goose -dir db/schemas sqlite3 ./db/rssagg.sqlite up 

