const config = require("../config");

exports.PROTO_LOADER_OPTIONS={
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}

exports.WEATHER_MAP_API="https://api.openweathermap.org/data/2.5/weather?appid=";