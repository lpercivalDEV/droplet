import React from "react";
import "./assets/main.css";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Header />
      <Wrapper>
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
