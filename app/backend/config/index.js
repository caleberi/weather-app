require("dotenv").config();

module.exports = {
  weather_api_key: process.env.API_KEY,
  current_weather_base_url: process.env.OPEN_CURRENT_WEATHER_URL,
  geodecode_weather_base_url: process.env.OPEN_GEODECODE_WEATHER_URL,
};
