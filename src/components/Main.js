import React, { useState } from "react";
import axios from "axios";

import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";

const Main = () => {
  const [weather, setWeather] = useState();

  const api_call = async (e) => {
    e.preventDefault();

    const city_weather = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${process.env.REACT_APP_API_KEY}`;

    const request = axios.get(city_weather);
    const response = await request;
    setWeather(response.data.main);
  };
  console.log(weather);

  return (
    <div className="main">
      <h1 className="test-title">FORECAST GOES HERE</h1>
      <Content>
        <WeatherSearch api_call={api_call} />
        <WeatherData weather={weather} />
      </Content>
    </div>
  );
};

export default Main;
