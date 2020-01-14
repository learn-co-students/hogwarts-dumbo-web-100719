import React, { Component } from 'react';
import EachHog from './EachHog.js'


class Container extends Component {
  
renderHogs= () => {
  return this.props.sortingHogs.map(hog => {
return <EachHog hog={hog}/>
})
}

    render() {
      return (
    <div className="ui grid container"> 
{this.renderHogs()}
  </div>
      )
    }
  }


  
  export default Container;