import React, { Component } from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";

class HogCard extends Component {
  testing = () => {
    console.log(this.state.clicked);
  };
  state = {
    clicked: false
  };

  loadImage = hogName => {
    const formatName = hogName
      .toLowerCase()
      .split(" ")
      .join("_");
    const imageUrl = require(`../hog-imgs/${formatName}.jpg`);
    return imageUrl;
  };

  handleClickState = e => {
    console.log(e.target);
    this.setState({
      clicked: true
    });
  };

  render() {
    {
      this.testing();
    }
    const { name, specialty, weight, greased } = this.props;

    return (
      <div className="ui card eight wide column pigTile">
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
        <div className={this.state.clicked ? "active" : null}>{weight}</div>
        <div>{specialty}</div>
        <div>{greased ? "Yes" : "No"}</div>
      </div>
    );
  }
}

export default HogCard;
