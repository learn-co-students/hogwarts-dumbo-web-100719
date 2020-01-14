import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container';


class App extends Component {

  state = {
      allHogs: [],
      greasedHogs: false,
      nameSortedHogs: false,
      weightSortedHogs: false
    }

  componentDidMount = () => {
    this.setState({
    allHogs: hogs,
  })
  }

sortByGreased= () => {
  this.setState({
  greasedHogs: !this.state.greasedHogs,
  nameSortedHogs: false,
  weightSortedHogs: false

  })
  //   const theGreasedHogs= this.state.allHogs.filter(hog => {
  //     return hog.greased === true
  //   });

  //   const whichWayToToggle= this.state.allHogs.map(hog => {
  //     return hog.greased
  //   })

  //   if (whichWayToToggle.includes(false)) {

  //   this.setState({
  //     allHogs: theGreasedHogs
  //   })
  // } 

  // else {
  //   this.setState({
  //     allHogs: hogs
  //   })
  // }
}

  sortByName= () => {
    this.setState({
      greasedHogs: false,
      nameSortedHogs: !this.state.nameSortedHogs,
      weightSortedHogs: false
    })

  // const theseHogs= hogs

  // const theseHogsCopy= [...hogs]

  // const sortedHogs= theseHogsCopy.sort((a, b) => a.name.localeCompare(b.name));

  //   if (this.state.allHogs === theseHogs) {

  //   this.setState({
  //     allHogs: sortedHogs,
  //   })
  // }

  // else {
  //   this.setState({
  //     allHogs: theseHogs
  //   })
  // }
}

sortByWeight= () => {

  this.setState({
    greasedHogs: false,
    nameSortedHogs: false,
    weightSortedHogs: !this.state.weightSortedHogs
  })

  // const theHogs= hogs

  // const theHogsCopy= [...hogs]

  // const sortedHogs= theHogsCopy.sort((a, b) => a.weight - b.weight);

  //   if (this.state.allHogs === theHogs) {

  //   this.setState({
  //     allHogs: sortedHogs,
  //   })
  // }

  // else {
  //   this.setState({
  //     allHogs: theHogs
  //   })
  // }
}

sortingHogs= () => {

  let hogs= [...this.state.allHogs]

  if (this.state.greasedHogs) {

    hogs= this.state.allHogs.filter(hog => {
          return hog.greased;
        });
  }

  if (this.state.nameSortedHogs) {
    hogs= hogs.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (this.state.weightSortedHogs) {
     hogs= hogs.sort((a, b) => {
       return a.weight - b.weight;
     });
  }

  return hogs
}

  render() {   
    return (  
      <div className="App">
        <Nav sortByWeight={this.sortByWeight} 
        sortByName={this.sortByName} 
        sortByGreased={this.sortByGreased}/>
        <br></br>
        <Container sortingHogs={this.sortingHogs()}/>
        <br></br>
      </div>
    )
  }
}

export default App;
