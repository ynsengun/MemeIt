import React from "react";

class AllImages extends React.Component {
  render() {
    return (
      <div className="allimages-container">
        {this.props.imgs.map((item) => {
          return (
            <div className="img-container">
              <button
                style={{ padding: "0px" }}
                key={item.id}
                onClick={this.props.imgClick}
              >
                <img src={item.url} alt=""></img>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllImages;
