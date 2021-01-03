import React from "react";

const Error = ({ error }) => {
  return (
    <div className="error py-4 px-4 font-600 text-red-700 bg-indigo-50 rounded-full shadow-lg max-w-max mx-auto my-4">
      {error}
    </div>
  );
};

export default Error;
