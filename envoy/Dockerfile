# syntax=docker/dockerfile:1
FROM envoyproxy/envoy-dev:latest 
COPY envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 8080 9901 10000
RUN  chmod go+r /etc/envoy/envoy.yaml