import * as grpcWeb from "grpc-web";

import * as protocs_weather_search_service_pb from "../protocs/weather_search_service_pb";

export class WeatherSearchServiceClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  retrieveCurrentWeatherByQuery(
    request: protocs_weather_search_service_pb.SearchQueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: protocs_weather_search_service_pb.SearchQueryResponse
    ) => void
  ): grpcWeb.ClientReadableStream<protocs_weather_search_service_pb.SearchQueryResponse>;

  storeLatestTrie(
    request: protocs_weather_search_service_pb.StoreSearchTrieDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: protocs_weather_search_service_pb.StoreSearchTrieDataResponse
    ) => void
  ): grpcWeb.ClientReadableStream<protocs_weather_search_service_pb.StoreSearchTrieDataResponse>;

  retrieveLatestTrie(
    request: protocs_weather_search_service_pb.RetrieveSearchTrieDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: protocs_weather_search_service_pb.RetrieveSearchTrieDataResponse
    ) => void
  ): grpcWeb.ClientReadableStream<protocs_weather_search_service_pb.RetrieveSearchTrieDataResponse>;

  retrieveGeopointByName(
    request: protocs_weather_search_service_pb.GeopointDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (
      err: grpcWeb.RpcError,
      response: protocs_weather_search_service_pb.GeopointDataResponse
    ) => void
  ): grpcWeb.ClientReadableStream<protocs_weather_search_service_pb.GeopointDataResponse>;
}

export class WeatherSearchServicePromiseClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  );

  retrieveCurrentWeatherByQuery(
    request: protocs_weather_search_service_pb.SearchQueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protocs_weather_search_service_pb.SearchQueryResponse>;

  storeLatestTrie(
    request: protocs_weather_search_service_pb.StoreSearchTrieDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protocs_weather_search_service_pb.StoreSearchTrieDataResponse>;

  retrieveLatestTrie(
    request: protocs_weather_search_service_pb.RetrieveSearchTrieDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protocs_weather_search_service_pb.RetrieveSearchTrieDataResponse>;

  retrieveGeopointByName(
    request: protocs_weather_search_service_pb.GeopointDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protocs_weather_search_service_pb.GeopointDataResponse>;
}
