import React from "react";
import Navbar from "./components/Navbar";
import SearchResultContainer from "./components/SearchResultContainer";
import FooterComponent from "./components/FooterComponent";

import "./App.css";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <SearchResultContainer />
      <FooterComponent />
    </div>
  );
};

export default App;
