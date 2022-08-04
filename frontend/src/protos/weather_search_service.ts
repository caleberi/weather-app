import type * as grpc from "@grpc/grpc-js";
import type {
  EnumTypeDefinition,
  MessageTypeDefinition,
} from "@grpc/proto-loader";

import type {
  WeatherSearchServiceClient as _weather_WeatherSearchServiceClient,
  WeatherSearchServiceDefinition as _weather_WeatherSearchServiceDefinition,
} from "./weather/WeatherSearchService";

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  weather: {
    GeopointDataRequest: MessageTypeDefinition;
    GeopointDataResponse: MessageTypeDefinition;
    LatLong: MessageTypeDefinition;
    Mode: EnumTypeDefinition;
    RetrieveSearchTrieDataRequest: MessageTypeDefinition;
    RetrieveSearchTrieDataResponse: MessageTypeDefinition;
    SearchQueryData: MessageTypeDefinition;
    SearchQueryDataList: MessageTypeDefinition;
    SearchQueryRequest: MessageTypeDefinition;
    SearchQueryResponse: MessageTypeDefinition;
    StoreSearchTrieDataRequest: MessageTypeDefinition;
    StoreSearchTrieDataResponse: MessageTypeDefinition;
    Unit: EnumTypeDefinition;
    Void: MessageTypeDefinition;
    WeatherSearchService: SubtypeConstructor<
      typeof grpc.Client,
      _weather_WeatherSearchServiceClient
    > & { service: _weather_WeatherSearchServiceDefinition };
  };
}
