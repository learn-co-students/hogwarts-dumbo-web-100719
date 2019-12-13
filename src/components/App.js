import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    greasedOption: false,
    sortOption: true
  };

  changeGreasedState = opt => {
    this.setState({
      greasedOption: opt
    });
  };

  changeSortState = opt => {
    this.setState({
      sortOption: opt
    });
  };

  renderHogs = () => {
    const greasedOption = this.state.greasedOption;
    const sortOption = this.state.sortOption;
    const filteredHogs = greasedOption ? hogs.filter(hog => hog.greased) : hogs;
    const sortedHogs = () =>
      filteredHogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name));

    if (greasedOption) {
      return filteredHogs;
    } else if (sortOption) {
      return sortedHogs();
    } else {
      return hogs;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav
          greasedOption={this.state.greasedOption}
          changeGreasedState={this.changeGreasedState}
          sortOption={this.state.sortOption}
          changeSortState={this.changeSortState}
        />
        <HogContainer hogs={this.renderHogs()} />
      </div>
    );
  }
}

export default App;
