import React from "react";

class MemeGenerator extends React.Component {
  render() {
    return (
      <div>
        <div className="generator-container">
          <div className="generator-card">
            <input
              className="input"
              type="text"
              placeholder="Upper Caps"
              onChange={this.props.handleChange}
              name="upperText"
              value={this.props.data.upperText}
            />
            <input
              className="input"
              type="text"
              placeholder="Lower Caps"
              onChange={this.props.handleChange}
              name="lowerText"
              value={this.props.data.lowerText}
            />
            <button className="button" onClick={this.props.handleClick}>
              Random Image!
            </button>

            <div className="meme">
              <div style={{ top: "15px" }} className="text">
                {this.props.data.upperText}
              </div>
              <img
                src={
                  this.props.data.isLoading
                    ? "https://miro.medium.com/max/2100/1*e_Loq49BI4WmN7o9ItTADg.gif"
                    : this.props.data.imgPath
                }
                width="100%"
                alt=""
              />
              <div style={{ bottom: "80px" }} className="text">
                {this.props.data.lowerText}
              </div>
            </div>
          </div>
        </div>

        <div className="showButtonContainer">
          <button className="button" onClick={this.props.allClick}>
            Show All Images
          </button>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
