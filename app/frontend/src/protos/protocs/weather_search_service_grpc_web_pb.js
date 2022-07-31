/**
 * @fileoverview gRPC-Web generated client stub for weather
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.weather = require("./weather_search_service_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.weather.WeatherSearchServiceClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = "binary";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.weather.WeatherSearchServicePromiseClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = "binary";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.weather.SearchQueryRequest,
 *   !proto.weather.SearchQueryResponse>}
 */
const methodDescriptor_WeatherSearchService_RetrieveCurrentWeatherByQuery =
  new grpc.web.MethodDescriptor(
    "/weather.WeatherSearchService/RetrieveCurrentWeatherByQuery",
    grpc.web.MethodType.UNARY,
    proto.weather.SearchQueryRequest,
    proto.weather.SearchQueryResponse,
    /**
     * @param {!proto.weather.SearchQueryRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.weather.SearchQueryResponse.deserializeBinary
  );

/**
 * @param {!proto.weather.SearchQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.weather.SearchQueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.weather.SearchQueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.weather.WeatherSearchServiceClient.prototype.retrieveCurrentWeatherByQuery =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ +
        "/weather.WeatherSearchService/RetrieveCurrentWeatherByQuery",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveCurrentWeatherByQuery,
      callback
    );
  };

/**
 * @param {!proto.weather.SearchQueryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.weather.SearchQueryResponse>}
 *     Promise that resolves to the response
 */
proto.weather.WeatherSearchServicePromiseClient.prototype.retrieveCurrentWeatherByQuery =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ +
        "/weather.WeatherSearchService/RetrieveCurrentWeatherByQuery",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveCurrentWeatherByQuery
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.weather.StoreSearchTrieDataRequest,
 *   !proto.weather.StoreSearchTrieDataResponse>}
 */
const methodDescriptor_WeatherSearchService_StoreLatestTrie =
  new grpc.web.MethodDescriptor(
    "/weather.WeatherSearchService/StoreLatestTrie",
    grpc.web.MethodType.UNARY,
    proto.weather.StoreSearchTrieDataRequest,
    proto.weather.StoreSearchTrieDataResponse,
    /**
     * @param {!proto.weather.StoreSearchTrieDataRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.weather.StoreSearchTrieDataResponse.deserializeBinary
  );

/**
 * @param {!proto.weather.StoreSearchTrieDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.weather.StoreSearchTrieDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.weather.StoreSearchTrieDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.weather.WeatherSearchServiceClient.prototype.storeLatestTrie = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/weather.WeatherSearchService/StoreLatestTrie",
    request,
    metadata || {},
    methodDescriptor_WeatherSearchService_StoreLatestTrie,
    callback
  );
};

/**
 * @param {!proto.weather.StoreSearchTrieDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.weather.StoreSearchTrieDataResponse>}
 *     Promise that resolves to the response
 */
proto.weather.WeatherSearchServicePromiseClient.prototype.storeLatestTrie =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + "/weather.WeatherSearchService/StoreLatestTrie",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_StoreLatestTrie
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.weather.RetrieveSearchTrieDataRequest,
 *   !proto.weather.RetrieveSearchTrieDataResponse>}
 */
const methodDescriptor_WeatherSearchService_RetrieveLatestTrie =
  new grpc.web.MethodDescriptor(
    "/weather.WeatherSearchService/RetrieveLatestTrie",
    grpc.web.MethodType.UNARY,
    proto.weather.RetrieveSearchTrieDataRequest,
    proto.weather.RetrieveSearchTrieDataResponse,
    /**
     * @param {!proto.weather.RetrieveSearchTrieDataRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.weather.RetrieveSearchTrieDataResponse.deserializeBinary
  );

/**
 * @param {!proto.weather.RetrieveSearchTrieDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.weather.RetrieveSearchTrieDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.weather.RetrieveSearchTrieDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.weather.WeatherSearchServiceClient.prototype.retrieveLatestTrie =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + "/weather.WeatherSearchService/RetrieveLatestTrie",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveLatestTrie,
      callback
    );
  };

/**
 * @param {!proto.weather.RetrieveSearchTrieDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.weather.RetrieveSearchTrieDataResponse>}
 *     Promise that resolves to the response
 */
proto.weather.WeatherSearchServicePromiseClient.prototype.retrieveLatestTrie =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + "/weather.WeatherSearchService/RetrieveLatestTrie",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveLatestTrie
    );
  };

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.weather.GeopointDataRequest,
 *   !proto.weather.GeopointDataResponse>}
 */
const methodDescriptor_WeatherSearchService_RetrieveGeopointByName =
  new grpc.web.MethodDescriptor(
    "/weather.WeatherSearchService/RetrieveGeopointByName",
    grpc.web.MethodType.UNARY,
    proto.weather.GeopointDataRequest,
    proto.weather.GeopointDataResponse,
    /**
     * @param {!proto.weather.GeopointDataRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
      return request.serializeBinary();
    },
    proto.weather.GeopointDataResponse.deserializeBinary
  );

/**
 * @param {!proto.weather.GeopointDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.weather.GeopointDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.weather.GeopointDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.weather.WeatherSearchServiceClient.prototype.retrieveGeopointByName =
  function (request, metadata, callback) {
    return this.client_.rpcCall(
      this.hostname_ + "/weather.WeatherSearchService/RetrieveGeopointByName",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveGeopointByName,
      callback
    );
  };

/**
 * @param {!proto.weather.GeopointDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.weather.GeopointDataResponse>}
 *     Promise that resolves to the response
 */
proto.weather.WeatherSearchServicePromiseClient.prototype.retrieveGeopointByName =
  function (request, metadata) {
    return this.client_.unaryCall(
      this.hostname_ + "/weather.WeatherSearchService/RetrieveGeopointByName",
      request,
      metadata || {},
      methodDescriptor_WeatherSearchService_RetrieveGeopointByName
    );
  };

module.exports = proto.weather;
