import React from "react";
import { Weather } from "../types/Weather";

interface Props {
  weather: Weather;
}

const WeatherInfoCard = ({ weather }: Props) => {
  return (
    <div className="max-w-md p-8 mx-auto rounded-lg bg-slate-100 text-gray-800 border shadow-md">
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-24 h-24 p-2 text-yellow-500 fill-current"
          >
            <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
            <rect width="32" height="48" x="240" y="16"></rect>
            <rect width="32" height="48" x="240" y="448"></rect>
            <rect width="48" height="32" x="448" y="240"></rect>
            <rect width="48" height="32" x="16" y="240"></rect>
            <rect
              width="32"
              height="45.255"
              x="400"
              y="393.373"
              transform="rotate(-45 416 416)"
            ></rect>
            <rect
              width="32.001"
              height="45.255"
              x="80"
              y="73.373"
              transform="rotate(-45 96 96)"
            ></rect>
            <rect
              width="45.255"
              height="32"
              x="73.373"
              y="400"
              transform="rotate(-45.001 96.002 416.003)"
            ></rect>
            <rect
              width="45.255"
              height="32.001"
              x="393.373"
              y="80"
              transform="rotate(-45 416 96)"
            ></rect>
          </svg>
          <h1 className="text-xl font-semibold capitalize">{weather.city}</h1>
        </div>

        <span className="font-bold text-8xl">{Math.round(weather.temperature)}°</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-gray-600">
        <div className="flex justify-between">
          <span>Vento:</span>
          <span>{weather.wind_speed} km/h</span>
        </div>
        <div className="flex justify-between">
          <span>Umidade:</span>
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Chuva:</span>
          <span>{weather.rain} mm</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
