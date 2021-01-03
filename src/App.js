import React from "react";
import "./assets/main.css";

import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container max-w-md mx-auto px-4 py-12">
      <img
        className="max-w-sm max-h-sm"
        src="./logos/default-monochrome.svg"
        alt=""
      />
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
