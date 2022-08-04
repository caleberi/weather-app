// Original file: protocs/weather_search_service.proto

import type {
  SearchQueryData as _weather_SearchQueryData,
  SearchQueryData__Output as _weather_SearchQueryData__Output,
} from "../weather/SearchQueryData";
import type { Long } from "@grpc/proto-loader";

export interface _weather_SearchQueryDataList_CityData {
  id?: number;
  name?: string;
  coord?: { [key: string]: number | string };
  country?: string;
  population?: number | string | Long;
  timezone?: number | string | Long;
  sunrise?: number | string | Long;
  sunset?: number | string | Long;
}

export interface _weather_SearchQueryDataList_CityData__Output {
  id?: number;
  name?: string;
  coord?: { [key: string]: number };
  country?: string;
  population?: Long;
  timezone?: Long;
  sunrise?: Long;
  sunset?: Long;
}

export interface SearchQueryDataList {
  cod?: string;
  message?: string;
  cnt?: string;
  list?: _weather_SearchQueryData[];
  city?: _weather_SearchQueryDataList_CityData | null;
  _cod?: "cod";
  _message?: "message";
  _cnt?: "cnt";
}

export interface SearchQueryDataList__Output {
  cod?: string;
  message?: string;
  cnt?: string;
  list?: _weather_SearchQueryData__Output[];
  city?: _weather_SearchQueryDataList_CityData__Output;
}
