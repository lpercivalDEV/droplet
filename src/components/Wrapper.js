import React from "react";

const Wrapper = (props) => {
  return (
    <div className="wrapper mx-auto min-h-full min-w-min min-h- px-6 py-2 mt-2 text-center flex-auto justify-center align-center border-8 border-blue-200 rounded-full shadow-md">
      {props.children}
    </div>
  );
};

export default Wrapper;
