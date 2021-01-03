import React from "react";

const Wrapper = (props) => {
  return (
    <div className="wrapper mx-auto h-full max-w-lg px-6 py-2 mt-2 text-center flex-auto align-center border-8 justify-center shadow-md">
      {props.children}
    </div>
  );
};

export default Wrapper;
