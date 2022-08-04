# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /frontend
COPY package*.json webpack.config.js tsconfig.json ./
RUN npm install 
COPY /src ./src
COPY /public ./public
CMD [ "npm","run","start" ]
EXPOSE 3000