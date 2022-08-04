import { WeatherSearchServicePromiseClient } from "../protos/protocs/weather_search_service_grpc_web_pb";
import {
  SearchQueryRequest,
  LatLong,
  Unit,
  Mode,
  GeopointDataRequest,
  SearchQueryData,
  SearchQueryDataList,
  SearchQueryResponse,
} from "../protos/protocs/weather_search_service_pb";

export const WeatherSearchClient: WeatherSearchServicePromiseClient =
  new WeatherSearchServicePromiseClient("http://localhost:8080", null, null);

export const Api = {
  async getWeather(name: string) {
    try {
      let [city_name, state_code, country_code] = name.split(",");
      let geodata = await WeatherSearchClient.retrieveGeopointByName(
        new GeopointDataRequest()
          .setLimit(1)
          .setQ(
            new GeopointDataRequest.GeopointQuery()
              .setCountryCode(country_code)
              .setStateCode(state_code)
              .setCityName(city_name)
          ),
        {}
      );

      let city = geodata.getDataList()[0];
      let { lat, lon } = city.toObject();

      let weather: SearchQueryResponse =
        await WeatherSearchClient.retrieveCurrentWeatherByQuery(
          new SearchQueryRequest()
            .setLatLon(new LatLong().setLat(lat).setLon(lon))
            .setUnit(Unit.STANDARD)
            .setLang("en")
            .setMode(Mode.JSON),
          {}
        );
      if (weather.getCode() === 200) {
        let data = weather.getData()!;
        return {
          city: {
            population: data?.getCity()?.getPopulation(),
            country: data?.getCity()?.getCountry(),
            name: data?.getCity()?.getName(),
            sunrise: data?.getCity()?.getSunrise(),
            sunset: data?.getCity()?.getSunset(),
            timezone: data?.getCity()?.getTimezone(),
            cod: data?.getCod(),
          },
          list: getWeatherListItem(data),
        };
      }
    } catch (error) {
      throw error;
    }
  },
};

const getWeatherListItem = (weather: SearchQueryDataList) => {
  let items = weather.getListList();
  let processWeatherInfo = (data: SearchQueryData.Weather[]) => {
    return data.map((d) => d.toObject());
  };
  return items.map((item) => {
    return {
      clouds: {
        all: item.getClouds()?.getAll(),
      },
      dt: item.getDt(),
      dt_txt: item.getDtTxt(),
      pop: item.getPop(),
      visibility: item.getVisibility(),
      weather: processWeatherInfo(item.getWeatherList()),
      main: item.getMain()?.toObject(),
      wind: {
        speed: item.getWind()?.getSpeed(),
      },
    };
  });
};
