import React, { useEffect } from "react";
import axios from "axios";

const Main = () => {
  const api_call = async () => {
    const city_weather = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${process.env.REACT_APP_API_KEY}`;

    const request = axios.get(city_weather);
    const response = await request;
    console.log(response);
  };
  useEffect(() => {
    api_call();
  }, []);

  return (
    <div className="main">
      <h1>Main Component</h1>
    </div>
  );
};

export default Main;
