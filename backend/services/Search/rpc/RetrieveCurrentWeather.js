const config = require("../../../config");
const axios = require("axios").default;
let BASE_URL = `${config.current_weather_base_url}${config.weather_api_key}`;

module.exports = (call, callback) => {
  let { request } = call;
  let {
    lat_lon: { lat, lon },
    mode,
    unit,
    lang,
  } = request;
  // validate lat & lon to [-90,90] and [-180,180]
  axios
    .get(
      BASE_URL +
        `&lat=${lat.toFixed(2)}&lon=${lon.toFixed(
          2
        )}&mode=${mode.toLowerCase()}&units=${unit.toLowerCase()}&lang=${lang.toLowerCase()}`,
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
      console.log(err);
      return callback(err, null);
    });
};
