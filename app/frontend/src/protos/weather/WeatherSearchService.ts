// Original file: protocs/weather_search_service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  GeopointDataRequest as _weather_GeopointDataRequest,
  GeopointDataRequest__Output as _weather_GeopointDataRequest__Output,
} from "../weather/GeopointDataRequest";
import type {
  GeopointDataResponse as _weather_GeopointDataResponse,
  GeopointDataResponse__Output as _weather_GeopointDataResponse__Output,
} from "../weather/GeopointDataResponse";
import type {
  RetrieveSearchTrieDataRequest as _weather_RetrieveSearchTrieDataRequest,
  RetrieveSearchTrieDataRequest__Output as _weather_RetrieveSearchTrieDataRequest__Output,
} from "../weather/RetrieveSearchTrieDataRequest";
import type {
  RetrieveSearchTrieDataResponse as _weather_RetrieveSearchTrieDataResponse,
  RetrieveSearchTrieDataResponse__Output as _weather_RetrieveSearchTrieDataResponse__Output,
} from "../weather/RetrieveSearchTrieDataResponse";
import type {
  SearchQueryRequest as _weather_SearchQueryRequest,
  SearchQueryRequest__Output as _weather_SearchQueryRequest__Output,
} from "../weather/SearchQueryRequest";
import type {
  SearchQueryResponse as _weather_SearchQueryResponse,
  SearchQueryResponse__Output as _weather_SearchQueryResponse__Output,
} from "../weather/SearchQueryResponse";
import type {
  StoreSearchTrieDataRequest as _weather_StoreSearchTrieDataRequest,
  StoreSearchTrieDataRequest__Output as _weather_StoreSearchTrieDataRequest__Output,
} from "../weather/StoreSearchTrieDataRequest";
import type {
  StoreSearchTrieDataResponse as _weather_StoreSearchTrieDataResponse,
  StoreSearchTrieDataResponse__Output as _weather_StoreSearchTrieDataResponse__Output,
} from "../weather/StoreSearchTrieDataResponse";

export interface WeatherSearchServiceClient extends grpc.Client {
  RetrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveCurrentWeatherByQuery(
    argument: _weather_SearchQueryRequest,
    callback: grpc.requestCallback<_weather_SearchQueryResponse__Output>
  ): grpc.ClientUnaryCall;

  RetrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveGeopointByName(
    argument: _weather_GeopointDataRequest,
    callback: grpc.requestCallback<_weather_GeopointDataResponse__Output>
  ): grpc.ClientUnaryCall;

  RetrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  RetrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  retrieveLatestTrie(
    argument: _weather_RetrieveSearchTrieDataRequest,
    callback: grpc.requestCallback<_weather_RetrieveSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;

  StoreLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  StoreLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  StoreLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  StoreLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  storeLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  storeLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  storeLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
  storeLatestTrie(
    argument: _weather_StoreSearchTrieDataRequest,
    callback: grpc.requestCallback<_weather_StoreSearchTrieDataResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface WeatherSearchServiceHandlers
  extends grpc.UntypedServiceImplementation {
  RetrieveCurrentWeatherByQuery: grpc.handleUnaryCall<
    _weather_SearchQueryRequest__Output,
    _weather_SearchQueryResponse
  >;

  RetrieveGeopointByName: grpc.handleUnaryCall<
    _weather_GeopointDataRequest__Output,
    _weather_GeopointDataResponse
  >;

  RetrieveLatestTrie: grpc.handleUnaryCall<
    _weather_RetrieveSearchTrieDataRequest__Output,
    _weather_RetrieveSearchTrieDataResponse
  >;

  StoreLatestTrie: grpc.handleUnaryCall<
    _weather_StoreSearchTrieDataRequest__Output,
    _weather_StoreSearchTrieDataResponse
  >;
}

export interface WeatherSearchServiceDefinition extends grpc.ServiceDefinition {
  RetrieveCurrentWeatherByQuery: MethodDefinition<
    _weather_SearchQueryRequest,
    _weather_SearchQueryResponse,
    _weather_SearchQueryRequest__Output,
    _weather_SearchQueryResponse__Output
  >;
  RetrieveGeopointByName: MethodDefinition<
    _weather_GeopointDataRequest,
    _weather_GeopointDataResponse,
    _weather_GeopointDataRequest__Output,
    _weather_GeopointDataResponse__Output
  >;
  RetrieveLatestTrie: MethodDefinition<
    _weather_RetrieveSearchTrieDataRequest,
    _weather_RetrieveSearchTrieDataResponse,
    _weather_RetrieveSearchTrieDataRequest__Output,
    _weather_RetrieveSearchTrieDataResponse__Output
  >;
  StoreLatestTrie: MethodDefinition<
    _weather_StoreSearchTrieDataRequest,
    _weather_StoreSearchTrieDataResponse,
    _weather_StoreSearchTrieDataRequest__Output,
    _weather_StoreSearchTrieDataResponse__Output
  >;
}
