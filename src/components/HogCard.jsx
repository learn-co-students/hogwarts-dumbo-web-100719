import React, { Component } from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";

class HogCard extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClickState = () => {
    const clickState = this.state.clicked;
    console.log(clickState);
    this.setState({
      clicked: !clickState
    });
  };

  loadImage = hogName => {
    const formatName = hogName
      .toLowerCase()
      .split(" ")
      .join("_");
    const imageUrl = require(`../hog-imgs/${formatName}.jpg`);
    return imageUrl;
  };

  render() {
    const { name, specialty, weight, greased } = this.props;
    const styleClass = this.state.clicked ? "block" : "none";

    return (
      <div className="pigTile">
        <div className="image" onClick={this.handleClickState}>
          {/* <img
              src={
                process.env.PUBLIC_URL +
                "/hog-imgs/" +
                this.loadImages(this.props.name) +
                ".jpg"
              }
            /> */}
          <img src={this.loadImage(name)} />
        </div>
        <div className="content">
          <div>
            <h3 className="header">{name}</h3>
          </div>
        </div>
        <div style={{ display: styleClass }}>
          <p>{weight}</p>
          <p>{specialty}</p>

          <p>{greased ? "Yes" : "No"}</p>
        </div>
      </div>
    );
  }
}

export default HogCard;
