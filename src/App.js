import React from "react";

import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="back-ground">
        <Header />
        <div className="generator-container">
          <MemeGenerator />
        </div>
      </div>
    );
  }
}

export default App;
