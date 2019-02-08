docker run -v $PWD/client:/app -w /app -e SERVER_PORT=4342 node:8.15.0-jessie yarn && yarn build
docker build -f server/Dockerfile.prod server -t lighthouse_server
docker run lighthouse_server