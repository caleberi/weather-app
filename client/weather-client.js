const path =  require('path');
const PROTO_PATH = path.resolve(__dirname,'../protocs/weather-service.proto');
const grpc = require('@grpc/grpc-js');
const protoLoader =  require('@grpc/proto-loader');
const { PROTO_LOADER_OPTIONS } = require('../constants');
const _ = require("lodash");

const packageDefinition =  protoLoader.loadSync(
    PROTO_PATH,
    PROTO_LOADER_OPTIONS
);

const descriptor = grpc.loadPackageDefinition(packageDefinition);

const weather_proto =  descriptor.WeatherPackage;


const client  =  new weather_proto.WeatherService(
    "127.0.0.1:3000",grpc.credentials.createInsecure()
);

function createWeatherMessage(data){
    let {weather,wind,coord,visibility} = data;

    return `The weather for today shows that the would a ${weather[0].main} with 
    ${weather[0].description} ${weather[0].icon} .However , the wind indicates to be at ${JSON.stringify(wind)} 
    on coordinate  with longitude ${coord.lon} and latitude ${coord.lat}.
    The visiblity is at ${visibility} \n`
}


client.RetrieveAllWeather({},(err,res)=>{
    if(err){
        return err;
    }
    var msg='No message';
    if(!_.isNull(res)){
        msg=createWeatherMessage(res);
    }
    console.log(msg);
});


client.RetrieveWeatherByQuery({
    country:"us",
    state_code:"Ark,Ariz",
    unit:"metric",
    lang:"eng",
    set_unit:true,
    set_mode:false
},(err,res)=>{
    if(err){
        return err;
    }
    var msg='No message';
    if(!_.isNull(res)){
        msg=createWeatherMessage(res);
    }
    console.log(msg);
})


client.SaveWeatherToFile({
    country:"us",
    state_code:"Ark,Ariz",
    unit:"metric",
    lang:"eng",
    set_unit:true,
    set_mode:false
},(err,res)=>{
    if(err){
        return err;
    }
    var msg='No message';
    if(!_.isNull(res)){
        msg=createWeatherMessage(res);
    }
    console.log(msg);
})
