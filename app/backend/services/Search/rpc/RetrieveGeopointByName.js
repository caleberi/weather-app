const config = require("../../../config");
const axios = require("axios").default;
let BASE_URL = `${config.geodecode_weather_base_url}${config.weather_api_key}`;

module.exports = (call, callback) => {
  let { request } = call;
  let {
    q: { city_name, state_code, country_code },
    limit,
  } = request;
  axios
    .get(
      BASE_URL +
        `&q=${city_name},${state_code ? state_code : ""},${
          country_code ? country_code : ""
        }&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(({ data, status }) => {
      if (status != 200) {
        callback(null, {
          code: status,
          message: data.message,
          data: null,
        });
      }
      return callback(null, {
        code: status,
        data,
      });
    })
    .catch((err) => {
      return callback(err, null);
    });
};
