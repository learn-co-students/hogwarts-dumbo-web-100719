import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';

class App extends Component {
  
  state = {
    hogsArray: hogs
  }

  handleFilter = () => {
    const greasedHogs = this.state.hogsArray.filter(hog => hog.greased === true)
    this.setState({
      hogsArray: greasedHogs
    })
  }

  handleSort = () => {
     const sortedHogs = this.state.hogsArray.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
     this.setState({
       hogsArray: sortedHogs
     })
  }

  generateHog = () => {
    return this.state.hogsArray.map((hog, index) => (
       <Hog key={index} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']} />
    ))
  }

  render() {
    return (
      <div className="App">
          < Nav handleFilter={this.handleFilter} handleSort={this.handleSort}/>
          {this.generateHog()}
      </div>
    )
  }
}

export default App;
