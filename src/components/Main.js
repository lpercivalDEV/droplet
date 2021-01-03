import React, { useEffect } from "react";
import axios from "axios";

import Content from "./Content";
import WeatherSearch from "./WeatherSearch";

const Main = () => {
  const api_call = async (e) => {
    e.preventDefault();

    const city_weather = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${process.env.REACT_APP_API_KEY}`;

    const request = axios.get(city_weather);
    const response = await request;
    console.log(response);
  };

  return (
    <div className="main">
      <h1 className="test-title">FORECAST GOES HERE</h1>
      <Content />
      <WeatherSearch api_call={api_call} />
    </div>
  );
};

export default Main;
