import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";

import "./components/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="back-ground">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
