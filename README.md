AI Agent to review github PRs

MVP-1

docker build -t ai-pr-reviewer .
docker run -p 3000:3000 --env-file .env ai-pr-reviewer

runs redis in backgroud for queue processing
docker-compose up -d
