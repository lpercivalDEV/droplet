import React from "react";

const WeatherSearch = (props) => {
  return (
    <div className="weather-search">
      <form onSubmit={props.api_call} className="weather-search-form">
        <input
          type="text"
          className="weather-search-input border-4 border-blue-100 rounded-2xl"
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
