// Original file: protocs/weather_search_service.proto

export interface _weather_GeopointDataRequest_GeopointQuery {
  cityName?: string;
  stateCode?: string;
  countryCode?: string;
  _cityName?: "cityName";
  _stateCode?: "stateCode";
  _countryCode?: "countryCode";
}

export interface _weather_GeopointDataRequest_GeopointQuery__Output {
  cityName?: string;
  stateCode?: string;
  countryCode?: string;
}

export interface GeopointDataRequest {
  limit?: number;
  q?: _weather_GeopointDataRequest_GeopointQuery | null;
  _limit?: "limit";
}

export interface GeopointDataRequest__Output {
  limit?: number;
  q?: _weather_GeopointDataRequest_GeopointQuery__Output;
}
