import React from "react";

const API_CALL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${process.env.DROPLET_APP_OPEN_WEATHER_API_KEY}`;

const Main = () => {
  return (
    <div className="main">
      <h1>Main Component</h1>
    </div>
  );
};

export default Main;
