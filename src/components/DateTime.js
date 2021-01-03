import React from "react";

const DateTime = () => {
  const date = new Date();
  return (
    <div className="date-time text-center font-serif text-blue-800 mt-14">
      {`${date.toLocaleDateString()} 💧 ${date.toLocaleTimeString()}`}
    </div>
  );
};

export default DateTime;
