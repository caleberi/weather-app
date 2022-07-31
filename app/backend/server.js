const path = require("path");
const PROTO_PATH = path.resolve(
  __dirname,
  "../../protocs/weather_search_service.proto"
);
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { PROTO_LOADER_OPTIONS } = require("../constants");
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  PROTO_LOADER_OPTIONS
);
const RetrieveCurrentWeather = require("./services/Search/rpc/RetrieveCurrentWeather");
const RetrieveGeopointByName = require("./services/Search/rpc/RetrieveGeopointByName");
const RetrieveLatestTrie = require("./services/TrieDb/rpc/RetrieveLatestTrie");
const StoreLatestTrie = require("./services/TrieDb/rpc/StoreLatestTrie");

const weather_proto = grpc.loadPackageDefinition(packageDefinition).weather;

const server = new grpc.Server();

server.addService(weather_proto.WeatherSearchService.service, {
  RetrieveCurrentWeatherByQuery: RetrieveCurrentWeather,
  RetrieveGeopointByName: RetrieveGeopointByName,
  RetrieveLatestTrie: RetrieveLatestTrie,
  StoreLatestTrie: StoreLatestTrie,
});

server.bindAsync(
  "0.0.0.0:9090",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Listening on port :" + port);
    server.start();
  }
);
