import * as jspb from "google-protobuf";

export class Void extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Void.AsObject;
  static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
  static serializeBinaryToWriter(
    message: Void,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Void;
  static deserializeBinaryFromReader(
    message: Void,
    reader: jspb.BinaryReader
  ): Void;
}

export namespace Void {
  export type AsObject = {};
}

export class LatLong extends jspb.Message {
  getLat(): number;
  setLat(value: number): LatLong;

  getLon(): number;
  setLon(value: number): LatLong;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLong.AsObject;
  static toObject(includeInstance: boolean, msg: LatLong): LatLong.AsObject;
  static serializeBinaryToWriter(
    message: LatLong,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LatLong;
  static deserializeBinaryFromReader(
    message: LatLong,
    reader: jspb.BinaryReader
  ): LatLong;
}

export namespace LatLong {
  export type AsObject = {
    lat: number;
    lon: number;
  };
}

export class SearchQueryRequest extends jspb.Message {
  getLatLon(): LatLong | undefined;
  setLatLon(value?: LatLong): SearchQueryRequest;
  hasLatLon(): boolean;
  clearLatLon(): SearchQueryRequest;

  getMode(): Mode;
  setMode(value: Mode): SearchQueryRequest;

  getUnit(): Unit;
  setUnit(value: Unit): SearchQueryRequest;

  getLang(): string;
  setLang(value: string): SearchQueryRequest;

  getModeCase(): SearchQueryRequest.ModeCase;

  getUnitCase(): SearchQueryRequest.UnitCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchQueryRequest
  ): SearchQueryRequest.AsObject;
  static serializeBinaryToWriter(
    message: SearchQueryRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryRequest;
  static deserializeBinaryFromReader(
    message: SearchQueryRequest,
    reader: jspb.BinaryReader
  ): SearchQueryRequest;
}

export namespace SearchQueryRequest {
  export type AsObject = {
    latLon?: LatLong.AsObject;
    mode: Mode;
    unit: Unit;
    lang: string;
  };

  export enum ModeCase {
    _MODE_NOT_SET = 0,
    MODE = 2,
  }

  export enum UnitCase {
    _UNIT_NOT_SET = 0,
    UNIT = 3,
  }
}

export class SearchQueryData extends jspb.Message {
  getCoord(): LatLong | undefined;
  setCoord(value?: LatLong): SearchQueryData;
  hasCoord(): boolean;
  clearCoord(): SearchQueryData;

  getWeatherList(): Array<SearchQueryData.Weather>;
  setWeatherList(value: Array<SearchQueryData.Weather>): SearchQueryData;
  clearWeatherList(): SearchQueryData;
  addWeather(
    value?: SearchQueryData.Weather,
    index?: number
  ): SearchQueryData.Weather;

  getBase(): string;
  setBase(value: string): SearchQueryData;

  getMain(): SearchQueryData.MainData | undefined;
  setMain(value?: SearchQueryData.MainData): SearchQueryData;
  hasMain(): boolean;
  clearMain(): SearchQueryData;

  getVisibility(): number;
  setVisibility(value: number): SearchQueryData;

  getWind(): SearchQueryData.Wind | undefined;
  setWind(value?: SearchQueryData.Wind): SearchQueryData;
  hasWind(): boolean;
  clearWind(): SearchQueryData;

  getDt(): number;
  setDt(value: number): SearchQueryData;

  getClouds(): SearchQueryData.Cloud | undefined;
  setClouds(value?: SearchQueryData.Cloud): SearchQueryData;
  hasClouds(): boolean;
  clearClouds(): SearchQueryData;

  getDtTxt(): string;
  setDtTxt(value: string): SearchQueryData;

  getPop(): number;
  setPop(value: number): SearchQueryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryData.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchQueryData
  ): SearchQueryData.AsObject;
  static serializeBinaryToWriter(
    message: SearchQueryData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryData;
  static deserializeBinaryFromReader(
    message: SearchQueryData,
    reader: jspb.BinaryReader
  ): SearchQueryData;
}

export namespace SearchQueryData {
  export type AsObject = {
    coord?: LatLong.AsObject;
    weatherList: Array<SearchQueryData.Weather.AsObject>;
    base: string;
    main?: SearchQueryData.MainData.AsObject;
    visibility: number;
    wind?: SearchQueryData.Wind.AsObject;
    dt: number;
    clouds?: SearchQueryData.Cloud.AsObject;
    dtTxt: string;
    pop: number;
  };

  export class Weather extends jspb.Message {
    getId(): number;
    setId(value: number): Weather;

    getMain(): string;
    setMain(value: string): Weather;

    getDescription(): string;
    setDescription(value: string): Weather;

    getIcon(): string;
    setIcon(value: string): Weather;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Weather.AsObject;
    static toObject(includeInstance: boolean, msg: Weather): Weather.AsObject;
    static serializeBinaryToWriter(
      message: Weather,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Weather;
    static deserializeBinaryFromReader(
      message: Weather,
      reader: jspb.BinaryReader
    ): Weather;
  }

  export namespace Weather {
    export type AsObject = {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
  }

  export class MainData extends jspb.Message {
    getTemp(): number;
    setTemp(value: number): MainData;

    getTempMin(): number;
    setTempMin(value: number): MainData;

    getTempMax(): number;
    setTempMax(value: number): MainData;

    getHumidity(): number;
    setHumidity(value: number): MainData;

    getFeelsLike(): number;
    setFeelsLike(value: number): MainData;

    getPressure(): number;
    setPressure(value: number): MainData;

    getSeaLevel(): number;
    setSeaLevel(value: number): MainData;

    getGrndLevel(): number;
    setGrndLevel(value: number): MainData;

    getTempKf(): number;
    setTempKf(value: number): MainData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MainData.AsObject;
    static toObject(includeInstance: boolean, msg: MainData): MainData.AsObject;
    static serializeBinaryToWriter(
      message: MainData,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): MainData;
    static deserializeBinaryFromReader(
      message: MainData,
      reader: jspb.BinaryReader
    ): MainData;
  }

  export namespace MainData {
    export type AsObject = {
      temp: number;
      tempMin: number;
      tempMax: number;
      humidity: number;
      feelsLike: number;
      pressure: number;
      seaLevel: number;
      grndLevel: number;
      tempKf: number;
    };
  }

  export class Wind extends jspb.Message {
    getSpeed(): number;
    setSpeed(value: number): Wind;

    getDeg(): number;
    setDeg(value: number): Wind;

    getGust(): number;
    setGust(value: number): Wind;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wind.AsObject;
    static toObject(includeInstance: boolean, msg: Wind): Wind.AsObject;
    static serializeBinaryToWriter(
      message: Wind,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Wind;
    static deserializeBinaryFromReader(
      message: Wind,
      reader: jspb.BinaryReader
    ): Wind;
  }

  export namespace Wind {
    export type AsObject = {
      speed: number;
      deg: number;
      gust: number;
    };
  }

  export class Cloud extends jspb.Message {
    getAll(): string;
    setAll(value: string): Cloud;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cloud.AsObject;
    static toObject(includeInstance: boolean, msg: Cloud): Cloud.AsObject;
    static serializeBinaryToWriter(
      message: Cloud,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Cloud;
    static deserializeBinaryFromReader(
      message: Cloud,
      reader: jspb.BinaryReader
    ): Cloud;
  }

  export namespace Cloud {
    export type AsObject = {
      all: string;
    };
  }
}

export class SearchQueryDataList extends jspb.Message {
  getCod(): string;
  setCod(value: string): SearchQueryDataList;

  getMessage(): string;
  setMessage(value: string): SearchQueryDataList;

  getCnt(): string;
  setCnt(value: string): SearchQueryDataList;

  getListList(): Array<SearchQueryData>;
  setListList(value: Array<SearchQueryData>): SearchQueryDataList;
  clearListList(): SearchQueryDataList;
  addList(value?: SearchQueryData, index?: number): SearchQueryData;

  getCity(): SearchQueryDataList.CityData | undefined;
  setCity(value?: SearchQueryDataList.CityData): SearchQueryDataList;
  hasCity(): boolean;
  clearCity(): SearchQueryDataList;

  getCodCase(): SearchQueryDataList.CodCase;

  getMessageCase(): SearchQueryDataList.MessageCase;

  getCntCase(): SearchQueryDataList.CntCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryDataList.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchQueryDataList
  ): SearchQueryDataList.AsObject;
  static serializeBinaryToWriter(
    message: SearchQueryDataList,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryDataList;
  static deserializeBinaryFromReader(
    message: SearchQueryDataList,
    reader: jspb.BinaryReader
  ): SearchQueryDataList;
}

export namespace SearchQueryDataList {
  export type AsObject = {
    cod: string;
    message: string;
    cnt: string;
    listList: Array<SearchQueryData.AsObject>;
    city?: SearchQueryDataList.CityData.AsObject;
  };

  export class CityData extends jspb.Message {
    getId(): number;
    setId(value: number): CityData;

    getName(): string;
    setName(value: string): CityData;

    getCoordMap(): jspb.Map<string, number>;
    clearCoordMap(): CityData;

    getCountry(): string;
    setCountry(value: string): CityData;

    getPopulation(): number;
    setPopulation(value: number): CityData;

    getTimezone(): number;
    setTimezone(value: number): CityData;

    getSunrise(): number;
    setSunrise(value: number): CityData;

    getSunset(): number;
    setSunset(value: number): CityData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CityData.AsObject;
    static toObject(includeInstance: boolean, msg: CityData): CityData.AsObject;
    static serializeBinaryToWriter(
      message: CityData,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CityData;
    static deserializeBinaryFromReader(
      message: CityData,
      reader: jspb.BinaryReader
    ): CityData;
  }

  export namespace CityData {
    export type AsObject = {
      id: number;
      name: string;
      coordMap: Array<[string, number]>;
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  }

  export enum CodCase {
    _COD_NOT_SET = 0,
    COD = 1,
  }

  export enum MessageCase {
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 2,
  }

  export enum CntCase {
    _CNT_NOT_SET = 0,
    CNT = 3,
  }
}

export class SearchQueryResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): SearchQueryResponse;

  getMessage(): string;
  setMessage(value: string): SearchQueryResponse;

  getData(): SearchQueryDataList | undefined;
  setData(value?: SearchQueryDataList): SearchQueryResponse;
  hasData(): boolean;
  clearData(): SearchQueryResponse;

  getMessageCase(): SearchQueryResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchQueryResponse
  ): SearchQueryResponse.AsObject;
  static serializeBinaryToWriter(
    message: SearchQueryResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryResponse;
  static deserializeBinaryFromReader(
    message: SearchQueryResponse,
    reader: jspb.BinaryReader
  ): SearchQueryResponse;
}

export namespace SearchQueryResponse {
  export type AsObject = {
    code: number;
    message: string;
    data?: SearchQueryDataList.AsObject;
  };

  export enum MessageCase {
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 2,
  }
}

export class StoreSearchTrieDataRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): StoreSearchTrieDataRequest;

  getTrieDataList(): Array<string>;
  setTrieDataList(value: Array<string>): StoreSearchTrieDataRequest;
  clearTrieDataList(): StoreSearchTrieDataRequest;
  addTrieData(value: string, index?: number): StoreSearchTrieDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreSearchTrieDataRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StoreSearchTrieDataRequest
  ): StoreSearchTrieDataRequest.AsObject;
  static serializeBinaryToWriter(
    message: StoreSearchTrieDataRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StoreSearchTrieDataRequest;
  static deserializeBinaryFromReader(
    message: StoreSearchTrieDataRequest,
    reader: jspb.BinaryReader
  ): StoreSearchTrieDataRequest;
}

export namespace StoreSearchTrieDataRequest {
  export type AsObject = {
    userId: string;
    trieDataList: Array<string>;
  };
}

export class StoreSearchTrieDataResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): StoreSearchTrieDataResponse;

  getMessage(): string;
  setMessage(value: string): StoreSearchTrieDataResponse;

  getError(): string;
  setError(value: string): StoreSearchTrieDataResponse;

  getErrorCase(): StoreSearchTrieDataResponse.ErrorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreSearchTrieDataResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StoreSearchTrieDataResponse
  ): StoreSearchTrieDataResponse.AsObject;
  static serializeBinaryToWriter(
    message: StoreSearchTrieDataResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StoreSearchTrieDataResponse;
  static deserializeBinaryFromReader(
    message: StoreSearchTrieDataResponse,
    reader: jspb.BinaryReader
  ): StoreSearchTrieDataResponse;
}

export namespace StoreSearchTrieDataResponse {
  export type AsObject = {
    code: number;
    message: string;
    error: string;
  };

  export enum ErrorCase {
    _ERROR_NOT_SET = 0,
    ERROR = 3,
  }
}

export class RetrieveSearchTrieDataRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): RetrieveSearchTrieDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSearchTrieDataRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RetrieveSearchTrieDataRequest
  ): RetrieveSearchTrieDataRequest.AsObject;
  static serializeBinaryToWriter(
    message: RetrieveSearchTrieDataRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSearchTrieDataRequest;
  static deserializeBinaryFromReader(
    message: RetrieveSearchTrieDataRequest,
    reader: jspb.BinaryReader
  ): RetrieveSearchTrieDataRequest;
}

export namespace RetrieveSearchTrieDataRequest {
  export type AsObject = {
    userId: string;
  };
}

export class RetrieveSearchTrieDataResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): RetrieveSearchTrieDataResponse;

  getMessage(): string;
  setMessage(value: string): RetrieveSearchTrieDataResponse;

  getTrieDataList(): Array<string>;
  setTrieDataList(value: Array<string>): RetrieveSearchTrieDataResponse;
  clearTrieDataList(): RetrieveSearchTrieDataResponse;
  addTrieData(value: string, index?: number): RetrieveSearchTrieDataResponse;

  getError(): string;
  setError(value: string): RetrieveSearchTrieDataResponse;

  getErrorCase(): RetrieveSearchTrieDataResponse.ErrorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSearchTrieDataResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RetrieveSearchTrieDataResponse
  ): RetrieveSearchTrieDataResponse.AsObject;
  static serializeBinaryToWriter(
    message: RetrieveSearchTrieDataResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSearchTrieDataResponse;
  static deserializeBinaryFromReader(
    message: RetrieveSearchTrieDataResponse,
    reader: jspb.BinaryReader
  ): RetrieveSearchTrieDataResponse;
}

export namespace RetrieveSearchTrieDataResponse {
  export type AsObject = {
    code: number;
    message: string;
    trieDataList: Array<string>;
    error: string;
  };

  export enum ErrorCase {
    _ERROR_NOT_SET = 0,
    ERROR = 4,
  }
}

export class GeopointDataResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): GeopointDataResponse;

  getMessage(): string;
  setMessage(value: string): GeopointDataResponse;

  getDataList(): Array<GeopointDataResponse.GeopointData>;
  setDataList(
    value: Array<GeopointDataResponse.GeopointData>
  ): GeopointDataResponse;
  clearDataList(): GeopointDataResponse;
  addData(
    value?: GeopointDataResponse.GeopointData,
    index?: number
  ): GeopointDataResponse.GeopointData;

  getError(): string;
  setError(value: string): GeopointDataResponse;

  getErrorCase(): GeopointDataResponse.ErrorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeopointDataResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GeopointDataResponse
  ): GeopointDataResponse.AsObject;
  static serializeBinaryToWriter(
    message: GeopointDataResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GeopointDataResponse;
  static deserializeBinaryFromReader(
    message: GeopointDataResponse,
    reader: jspb.BinaryReader
  ): GeopointDataResponse;
}

export namespace GeopointDataResponse {
  export type AsObject = {
    code: number;
    message: string;
    dataList: Array<GeopointDataResponse.GeopointData.AsObject>;
    error: string;
  };

  export class GeopointData extends jspb.Message {
    getName(): string;
    setName(value: string): GeopointData;

    getLocalNamesMap(): jspb.Map<string, string>;
    clearLocalNamesMap(): GeopointData;

    getLat(): number;
    setLat(value: number): GeopointData;

    getLon(): number;
    setLon(value: number): GeopointData;

    getCountry(): string;
    setCountry(value: string): GeopointData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeopointData.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: GeopointData
    ): GeopointData.AsObject;
    static serializeBinaryToWriter(
      message: GeopointData,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): GeopointData;
    static deserializeBinaryFromReader(
      message: GeopointData,
      reader: jspb.BinaryReader
    ): GeopointData;
  }

  export namespace GeopointData {
    export type AsObject = {
      name: string;
      localNamesMap: Array<[string, string]>;
      lat: number;
      lon: number;
      country: string;
    };
  }

  export enum ErrorCase {
    _ERROR_NOT_SET = 0,
    ERROR = 4,
  }
}

export class GeopointDataRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): GeopointDataRequest;

  getQ(): GeopointDataRequest.GeopointQuery | undefined;
  setQ(value?: GeopointDataRequest.GeopointQuery): GeopointDataRequest;
  hasQ(): boolean;
  clearQ(): GeopointDataRequest;

  getLimitCase(): GeopointDataRequest.LimitCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeopointDataRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GeopointDataRequest
  ): GeopointDataRequest.AsObject;
  static serializeBinaryToWriter(
    message: GeopointDataRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GeopointDataRequest;
  static deserializeBinaryFromReader(
    message: GeopointDataRequest,
    reader: jspb.BinaryReader
  ): GeopointDataRequest;
}

export namespace GeopointDataRequest {
  export type AsObject = {
    limit: number;
    q?: GeopointDataRequest.GeopointQuery.AsObject;
  };

  export class GeopointQuery extends jspb.Message {
    getCityName(): string;
    setCityName(value: string): GeopointQuery;

    getStateCode(): string;
    setStateCode(value: string): GeopointQuery;

    getCountryCode(): string;
    setCountryCode(value: string): GeopointQuery;

    getCityNameCase(): GeopointQuery.CityNameCase;

    getStateCodeCase(): GeopointQuery.StateCodeCase;

    getCountryCodeCase(): GeopointQuery.CountryCodeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeopointQuery.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: GeopointQuery
    ): GeopointQuery.AsObject;
    static serializeBinaryToWriter(
      message: GeopointQuery,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): GeopointQuery;
    static deserializeBinaryFromReader(
      message: GeopointQuery,
      reader: jspb.BinaryReader
    ): GeopointQuery;
  }

  export namespace GeopointQuery {
    export type AsObject = {
      cityName: string;
      stateCode: string;
      countryCode: string;
    };

    export enum CityNameCase {
      _CITY_NAME_NOT_SET = 0,
      CITY_NAME = 1,
    }

    export enum StateCodeCase {
      _STATE_CODE_NOT_SET = 0,
      STATE_CODE = 2,
    }

    export enum CountryCodeCase {
      _COUNTRY_CODE_NOT_SET = 0,
      COUNTRY_CODE = 3,
    }
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 1,
  }
}

export enum Mode {
  XML = 0,
  JSON = 1,
  HTML = 2,
}
export enum Unit {
  STANDARD = 0,
  METRIC = 1,
  IMPERIAL = 2,
}
