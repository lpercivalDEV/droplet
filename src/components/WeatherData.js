import React, { useContext } from "react";

import Context from "../Context";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, feels_like, humidity, pressure } = weather;

  return (
    <div className="weather-data py-6">
      <p className="weather-tagline text-center pb-2">
        Weather in{" "}
        <span className="weather-data-city text-blue-600">{city}</span>
      </p>
      <div className="flex justify-center">
        <div className="weather-data-box grid grid-cols-2 grid-rows-2 gap-10">
          <div className="weather-data-property border-4 border-blue-200 rounded-full max-w-max p-6">
            <p className="weather-data-title">Temperature</p>
            <p className="weather-data-value text-7xl">{temp}</p>
          </div>
          <div className="weather-data-property  border-4 border-blue-200 rounded-full max-w-max p-6">
            <p className="weather-data-title">Feels Like</p>
            <p className="weather-data-value text-7xl">{feels_like}</p>
          </div>
          <div className="weather-data-property border-4 border-blue-200 rounded-full max-w-max p-6">
            <p className="weather-data-title">Humidity</p>
            <p className="weather data-value text-7xl">{humidity}</p>
          </div>
          <div className="weather-data-property border-4 border-blue-200 rounded-full max-w-max p-6">
            <p className="weather-data-title">Pressure</p>
            <p className="weather data-value text-7xl">{pressure}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
