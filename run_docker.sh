# build docker image 
docker build -t weather .
# remove docker image 
docker rm weather
# run envoy image latest
docker run --name weather -p 8080:8080 -p 9901:9901 weather