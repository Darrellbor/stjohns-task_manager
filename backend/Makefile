all: build lint test

run:
	go run cmd/app/main.go

watch:
	compiledaemon -build="make build" -command="./bin/app/main"

build:
	env GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 go build -o bin/app/main cmd/app/main.go
	cd bin/app && zip upload.zip main

lint:
	golangci-lint run

test:
	go test .
	go test -race .

clean:
	go clean -cache -testcache

tidy:
	go mod tidy

fmt:
	gofmt -s -w .

