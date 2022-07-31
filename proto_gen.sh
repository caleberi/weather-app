#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=./app/frontend/src/protos ./protocs/*.proto

# mkdir ./app/frontend/client/proto
protoc -I=. ./protocs/*.proto \
  --js_out=import_style=commonjs:./app/frontend/src/protos \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:./app/frontend/src/protos