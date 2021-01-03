import React, { useState } from "react";
import axios from "axios";

import Context from "../Context";

import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();

    const location = e.target.elements.location.value;

    if (!location)
      return setError("Please enter the name of a city."), setWeather(null);

    if (location) setError(null);

    const city_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;

    const request = axios.get(city_weather);
    const response = await request;
    setWeather(response.data.main);

    setCity(response.data.name);
  };

  return (
    <div className="main">
      <Content>
        <Context.Provider
          value={{ api_call: api_call, weather: weather, city: city }}
        >
          <WeatherSearch api_call={api_call} />
          {weather && <WeatherData weather={weather} />}
          {error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Main;
