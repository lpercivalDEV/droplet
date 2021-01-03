import React from "react";

const Wrapper = (props) => {
  return (
    <div className="wrapper mx-auto h-full sm:max-w-lg md:max-w-xl lg:max-w-5xl xl:max-w-7xl px-6 py-2 mt-2 text-center flex-auto justify-center align-center border-8 border-blue-200 rounded-full shadow-md">
      {props.children}
    </div>
  );
};

export default Wrapper;
