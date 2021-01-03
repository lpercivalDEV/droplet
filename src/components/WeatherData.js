import React, { useContext } from "react";

import Context from "../Context";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, feels_like, humidity, pressure } = weather;

  return (
    <div className="weather-data py-12">
      <p className="weather-tagline">
        Weather forecast for <span className="weather-data-city">{city}</span>
      </p>
      <div className="weather-data-box">
        <span className="weather-data-property">
          <p className="weather-data-title">Temperature</p>
          <p className="weather-data-value">{temp}</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Feels Like</p>
          <p className="weather-data-value">{feels_like}</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Humidity</p>
          <p className="weather data-value">{humidity}</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Pressure</p>
          <p className="weather data-value">{pressure}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
