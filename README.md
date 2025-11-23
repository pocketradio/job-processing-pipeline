
# Job Processing Pipeline

An async job pipeline using Node.js, RabbitMQ, Redis and a Go worker. The API queues jobs and the worker processes them in the background, updating status in Redis.

## Clone

```bash
git clone https://github.com/pocketradio/job-processing-pipeline.git
cd job-processing-pipeline
```

## Run

Start services:
```bash
docker compose up -d
```

Start API:
```bash
cd node-api
npm install
node app.js
```

Start worker:
```bash
cd go-worker
go run .
```

## Endpoints

POST /process  
GET /status/:id  

## Scaling

Run multiple workers for higher throughput:
```bash
cd go-worker
go run .
go run .
go run .
```

## Tech stack

- Node.js (express)
- Go
- Redis
- RabbitMQ

