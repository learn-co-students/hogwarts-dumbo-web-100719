import React, { Component } from "react";
import HogCard from "./HogCard";

class HogContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  renderHogs = () => {
    return (
      <div>
        {this.props.hogs.map((hog, index) => (
          <HogCard
            key={index}
            name={hog.name}
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            medal={hog["highest medal achieved"]}
          />
        ))}
      </div>
    );
  };

  render() {
    return <div>{this.renderHogs()}</div>;
  }
}

export default HogContainer;
