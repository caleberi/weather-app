// Original file: protocs/weather_search_service.proto

export interface RetrieveSearchTrieDataResponse {
  code?: number;
  message?: string;
  trieData?: string[];
  error?: string;
  _error?: "error";
}

export interface RetrieveSearchTrieDataResponse__Output {
  code?: number;
  message?: string;
  trieData?: string[];
  error?: string;
}
