# syntax=docker/dockerfile:1
FROM node:14-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install  
COPY /backend ./backend
COPY /constants ./constants
COPY /protocs ./protocs
ENV API_KEY=1dd3ed83f31ca41b38fe29078afb72d4
ENV OPEN_CURRENT_WEATHER_URL="https://api.openweathermap.org/data/2.5/forecast?appid="
ENV OPEN_GEODECODE_WEATHER_URL="http://api.openweathermap.org/geo/1.0/direct?appid="
CMD ["npm","run","start" ]
EXPOSE 9090