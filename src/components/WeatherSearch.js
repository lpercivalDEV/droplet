import React, { useContext } from "react";

import Context from "../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className="weather-search p-6">
      <form onSubmit={api_call} className="weather-search-form">
        <input
          name="location"
          type="text"
          placeholder="Enter city"
          className="weather-search-input w-60 border-4 border-blue-100 rounded-2xl px-4"
        />
        <span className="weather-search-submi focus-visible">
          <button
            className="weather-search-btn h-auto w-auto px-4 m-6 border-2 bg-blue-100"
            type="submit"
          >
            Search
          </button>
        </span>
      </form>
    </div>
  );
};

export default WeatherSearch;
