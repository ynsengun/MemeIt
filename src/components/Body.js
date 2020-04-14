import React from "react";
import "./App.css";
import AllImages from "./AllImages";
import MemeGenerator from "./MemeGenerator";

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      upperText: "",
      lowerText: "",
      imgPath: "",
      imgs: [],
      isLoading: false,
      isAllActivated: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.imgClick = this.imgClick.bind(this);
    this.allClick = this.allClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then((responsePromise) => responsePromise.json())
      .then((response) => {
        let len = response.data.memes.length;
        let index = Math.floor(Math.random() * len);
        this.setState({
          imgPath: response.data.memes[index].url,
          isLoading: false,
          imgs: response.data.memes,
        });
      })
      .catch((err) => console.log(err));
  }

  handleClick(e) {
    this.setState({ isLoading: true });
    let len = this.state.imgs.length;
    let index = Math.floor(Math.random() * len);
    this.setState({
      imgPath: this.state.imgs[index].url,
      isLoading: false,
    });
  }

  imgClick(e) {
    console.log(e.target);
    this.setState({ imgPath: e.target.src });
    this.allClick();
  }

  allClick() {
    this.setState((prev) => {
      return {
        isAllActivated: !prev.isAllActivated,
      };
    });
  }

  render() {
    window.scrollTo(0, 0);

    if (this.state.isAllActivated) {
      return(
        <AllImages
          imgs = {this.state.imgs}
          imgClick = {this.imgClick}
        />
      )
    } else {
      return (
        <MemeGenerator
          data = {this.state}
          handleChange = {this.handleChange}
          allClick = {this.allClick}
          handleClick = {this.handleClick}
        />
      );
    }
  }
}

export default Body;
