const path =  require('path');
const PROTO_PATH = path.resolve(__dirname,'../protocs/weather-service.proto');
const grpc = require('@grpc/grpc-js');
const protoLoader =  require('@grpc/proto-loader');
const { PROTO_LOADER_OPTIONS,WEATHER_MAP_API } = require('../constants');
const axios = require('axios');
const config = require("../config");
const packageDefinition =  protoLoader.loadSync(
    PROTO_PATH,
    PROTO_LOADER_OPTIONS
);
const OUT_PATH = path.join(__dirname,"../out/");

const descriptor = grpc.loadPackageDefinition(packageDefinition);

const weather_proto =  descriptor.WeatherPackage;

const server = new grpc.Server();

const _ = require("lodash");

server.addService(weather_proto.WeatherService.service,
    {
        "RetrieveAllWeather":RetrieveAllWeather,
        "RetrieveWeatherByQuery":RetrieveWeatherByQuery,
        "SaveWeatherToFile":SaveWeatherToFile,
    }    
); 

    
server.bindAsync(
    "127.0.0.1:3000",
    grpc.ServerCredentials.createInsecure(),
    (err,port)=>{
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log("Listening on port "+port)
        server.start();
    }
);





function RetrieveAllWeather(call,callback){
    axios({
        url:WEATHER_MAP_API+`${config.weather_api_key}`+"&q=,us",
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:{},
        mode:"cors",
    }).then(response=>{
        if(response.status!=200)
            throw new Error(`HTTP error! status: ${response.status}`)
        let {data}= response;
        return callback(null,data);
        
    }).catch(err=>{
        return callback(err,null);
    })
}

function parseRequestToUri(payload){
    let base = WEATHER_MAP_API+`${config.weather_api_key}`;
    let suffix = '';

    if(!_.isNull(payload.country))
        suffix+="&q="+payload.country

    if(!_.isNull(payload.state_code))
        suffix+=","+payload.state_code

    if(!_.isNull(payload.point,true)){

        if(!_.isNull(payload.point.lat))
            suffix+="lat="+payload.point.lat

        if(!_.isNull(payload.point.lon))
            suffix+="lon="+payload.point.lon
    }
       
    if(_.isEqual(payload.set_unit,true))
        suffix+=",units="+payload.unit

    if(_.isEqual(payload.set_lang,true))
        suffix+=",lang"+payload.lang
    
    if(_.isEqual(payload.set_mode,true))
        suffix+=",mode"+payload.mode
    
    return base+suffix;
}

function RetrieveWeatherByQuery(call,callback){
    let url = parseRequestToUri(call.request);
    axios({
        url:url,
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:{},
        mode:"cors",
    }).then(response=>{
        if(response.status!=200)
            throw new Error(`HTTP error! status: ${response.status}`)
        let {data}= response;
        return callback(null,data);
        
    }).catch(err=>{
        return callback(err,null);
    })
}

function writeTofile(filename,data){
    const fs  =require("fs");
    const filePath = OUT_PATH+filename;
    fs.writeFileSync(filePath,JSON.stringify(data),(err)=>{
        if(err)
            throw err;
        console.log("done");
    });
    return true;
}

function SaveWeatherToFile(call,callback){
    let url = parseRequestToUri(call.request)
    axios({
        url:url,
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:{},
        mode:"cors",
    }).then(response=>{
        if(response.status!=200)
            throw new Error(`HTTP error! status: ${response.status}`)
        let {data}= response;
        if(_.isEqual(writeTofile(`${data.name}.json`,data),true))
            return callback(null,data);
        else
            throw new Error(`HTTP error! cannot write to file`)
    }).catch(err=>{
        return callback(err,null);
    })
}