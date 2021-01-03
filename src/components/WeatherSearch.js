import React, { useContext } from "react";

import Context from "../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className="weather-search pt-20">
      <form onSubmit={api_call} className="weather-search-form">
        <input
          name="location"
          type="text"
          className="weather-search-input w-80 border-4 border-blue-100 rounded-2xl"
        />
        <div className="weather-search-submi focus-visible">
          <button
            className="weather-search-btn h-auto w-auto px-4 m-6 border-2 bg-blue-100"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
