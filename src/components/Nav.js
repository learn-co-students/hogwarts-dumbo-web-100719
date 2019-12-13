import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  const handleGreasedClick = () => {
    const greased = !props.greasedOption;
    props.changeGreasedState(greased);
  };
  const handleSortClick = () => {
    const sorted = !props.sortOption;
    props.changeSortState(sorted);
  };
  const greasedButtonText = props.greasedOption ? "Greased On" : "Greased Off";
  const sortButtonText = props.sortOption ? "Sorted: A-Z" : "Sorted: Z-A";
  return (
    <div className="navWrapper">
      <button onClick={handleGreasedClick}>{greasedButtonText}</button>
      <button onClick={handleSortClick}>{sortButtonText}</button>
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
