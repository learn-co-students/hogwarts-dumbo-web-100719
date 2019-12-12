import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import images from './hogphotos'


class App extends Component {

  state = {
    currentHogs: hogs,
    greasedFilter: false,
    nameFilter: false

  }

filterPigs = () => {
  let filteredPigs = this.state.currentHogs.filter(hog => hog.greased)
  if(!this.state.greasedFilter){
    this.setState({
      currentHogs: filteredPigs,
      greasedFilter: !this.state.greasedFilter
    })
  } else {
    this.setState({
      currentHogs: hogs,
      greasedFilter: !this.state.greasedFilter
    })
  }
}

sortName = () => {
  let sortedPigs = this.state.currentHogs.sort((hog1, hog2)=> hog1.name.localeCompare(hog2.name))
  
  this.setState({currentHogs: sortedPigs})  
}

sortWeight = () => {
  let sortedPigs = this.state.currentHogs.sort((hog1, hog2)=> hog1.weight - hog2.weight).reverse()
  
  this.setState({currentHogs: sortedPigs}) 
}




  render() {
    return (
      <div className="App">
          < Nav filterPigs= {this.filterPigs} sortName= {this.sortName} weightSort = {this.sortWeight} />
          <HogContainer hogs = {this.state.currentHogs} images={images}/>
      </div>
    )
  }
}

export default App;
