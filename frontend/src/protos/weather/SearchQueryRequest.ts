// Original file: protocs/weather_search_service.proto

import type {
  LatLong as _weather_LatLong,
  LatLong__Output as _weather_LatLong__Output,
} from "../weather/LatLong";
import type { Mode as _weather_Mode } from "../weather/Mode";
import type { Unit as _weather_Unit } from "../weather/Unit";

export interface SearchQueryRequest {
  latLon?: _weather_LatLong | null;
  mode?: _weather_Mode | keyof typeof _weather_Mode;
  unit?: _weather_Unit | keyof typeof _weather_Unit;
  lang?: string;
  _mode?: "mode";
  _unit?: "unit";
}

export interface SearchQueryRequest__Output {
  latLon?: _weather_LatLong__Output;
  mode?: _weather_Mode;
  unit?: _weather_Unit;
  lang?: string;
}
