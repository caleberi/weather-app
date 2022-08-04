// Original file: protocs/weather_search_service.proto

import type {
  LatLong as _weather_LatLong,
  LatLong__Output as _weather_LatLong__Output,
} from "../weather/LatLong";
import type { Long } from "@grpc/proto-loader";

export interface _weather_SearchQueryData_Cloud {
  all?: string;
}

export interface _weather_SearchQueryData_Cloud__Output {
  all?: string;
}

export interface _weather_SearchQueryData_MainData {
  temp?: number | string;
  tempMin?: number | string;
  tempMax?: number | string;
  humidity?: number | string;
  feelsLike?: number | string;
  pressure?: number | string;
  seaLevel?: number | string;
  grndLevel?: number | string;
  tempKf?: number | string;
}

export interface _weather_SearchQueryData_MainData__Output {
  temp?: number;
  tempMin?: number;
  tempMax?: number;
  humidity?: number;
  feelsLike?: number;
  pressure?: number;
  seaLevel?: number;
  grndLevel?: number;
  tempKf?: number;
}

export interface _weather_SearchQueryData_Weather {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface _weather_SearchQueryData_Weather__Output {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface _weather_SearchQueryData_Wind {
  speed?: number | string;
  deg?: number | string;
  gust?: number | string;
}

export interface _weather_SearchQueryData_Wind__Output {
  speed?: number;
  deg?: number;
  gust?: number;
}

export interface SearchQueryData {
  coord?: _weather_LatLong | null;
  weather?: _weather_SearchQueryData_Weather[];
  base?: string;
  main?: _weather_SearchQueryData_MainData | null;
  visibility?: number | string | Long;
  wind?: _weather_SearchQueryData_Wind | null;
  dt?: number | string | Long;
  clouds?: _weather_SearchQueryData_Cloud | null;
  dtTxt?: string;
  pop?: number;
}

export interface SearchQueryData__Output {
  coord?: _weather_LatLong__Output;
  weather?: _weather_SearchQueryData_Weather__Output[];
  base?: string;
  main?: _weather_SearchQueryData_MainData__Output;
  visibility?: Long;
  wind?: _weather_SearchQueryData_Wind__Output;
  dt?: Long;
  clouds?: _weather_SearchQueryData_Cloud__Output;
  dtTxt?: string;
  pop?: number;
}
