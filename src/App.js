import React from "react";
import "./assets/main.css";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import DateTime from "./components/DateTime";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-full">
      <Header />
      <Wrapper>
        <DateTime />
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
