import React from "react";

const WeatherData = (props) => {
  return (
    <div className="weather-data">
      <p className="weather-tagline">
        Weather forecast for <span className="weather-data-city">CITY</span>
      </p>
      <div className="weather-data-box">
        <span className="weather-data-property">
          <p className="weather-data-title">Temperature</p>
          <p className="weather-data-value">10.9</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Feels Like</p>
          <p className="weather-data-value">9.9</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Humidity</p>
          <p className="weather data-value">22</p>
        </span>
        <span className="weather-data-property">
          <p className="weather-data-title">Pressure</p>
          <p className="weather data-value">1020</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
