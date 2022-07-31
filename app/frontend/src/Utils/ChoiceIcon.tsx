import React, { FC } from "react";
import {
  BsFillCloudSleetFill,
  BsCloudSunFill,
  BsFillCloudsFill,
  BsFillCloudRainFill,
  BsCloudRain,
  BsCloudDrizzle,
} from "react-icons/bs";
import { FaCloudRain, FaCloud, FaCloudSun } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { AiFillApi } from "react-icons/ai";
import { WiNightSnowWind, WiDaySunny } from "react-icons/wi";

interface IPropsType {
  value: string;
}
const ChoiceIcon: FC<IPropsType> = ({ value }) => {
  switch (value) {
    case "Mainly cloudy":
      return <BsCloudRain />;
    case "clear":
      return <WiDaySunny />;
    case "rain":
      return <FaCloudRain />;
    case "small rain":
      return <BsFillCloudRainFill />;
    case "Partly cloudy":
      return <BsCloudSunFill />;
    case "partly cloudy":
      return <BsCloudSunFill />;
    case "sunny":
      return <FiSun />;
    case "cloudy":
      return <BsFillCloudsFill />;
    case "snow":
      return <BsFillCloudSleetFill />;
    case "light snow":
      return <WiNightSnowWind />;
    case "light rain":
      return <BsCloudDrizzle />;
    case "overcast clouds":
      return <BsCloudSunFill />;
    case "few clouds":
      return <FaCloud />;
    case "scattered clouds":
      return <FaCloudSun />;
    default:
      return <AiFillApi />;
  }
};

export default ChoiceIcon;
