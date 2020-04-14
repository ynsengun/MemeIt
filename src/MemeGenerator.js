import React from "react";
import "./App.css";

class MemeGenerator extends React.Component {
  constructor() {
      super();
      this.state = {}
  }
  
  render() {
    return (
      <div className="generator-card">
        <form>
          <input className="input" type="text" placeholder="Upper Caps" />
          <input className="input" type="text" placeholder="Lower Caps" />
          <button className="button">Generate!</button>
        </form>
        <div className="meme">
          <p>upper</p>
          <img src="" />
          <p>lower</p>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
