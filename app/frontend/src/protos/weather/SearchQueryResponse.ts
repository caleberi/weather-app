// Original file: protocs/weather_search_service.proto

import type {
  SearchQueryDataList as _weather_SearchQueryDataList,
  SearchQueryDataList__Output as _weather_SearchQueryDataList__Output,
} from "../weather/SearchQueryDataList";

export interface SearchQueryResponse {
  code?: number;
  message?: string;
  data?: _weather_SearchQueryDataList | null;
  _message?: "message";
}

export interface SearchQueryResponse__Output {
  code?: number;
  message?: string;
  data?: _weather_SearchQueryDataList__Output;
}
