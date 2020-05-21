echo Received docker container: $1

docker run -d -p 4040:4040 --net intelligent-traffic-light_default --name ngrok wernight/ngrok ngrok http $1:80
