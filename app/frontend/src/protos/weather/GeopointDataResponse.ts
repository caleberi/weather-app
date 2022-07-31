// Original file: protocs/weather_search_service.proto

export interface _weather_GeopointDataResponse_GeopointData {
  name?: string;
  localNames?: { [key: string]: string };
  lat?: number | string;
  lon?: number | string;
  country?: string;
}

export interface _weather_GeopointDataResponse_GeopointData__Output {
  name?: string;
  localNames?: { [key: string]: string };
  lat?: number;
  lon?: number;
  country?: string;
}

export interface GeopointDataResponse {
  code?: number;
  message?: string;
  data?: _weather_GeopointDataResponse_GeopointData[];
  error?: string;
  _error?: "error";
}

export interface GeopointDataResponse__Output {
  code?: number;
  message?: string;
  data?: _weather_GeopointDataResponse_GeopointData__Output[];
  error?: string;
}
