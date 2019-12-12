import React, { Component } from 'react'
import Tile from './Tile.js'




export default class HogContainer extends Component {
    // 
    
    render() {
        //console.log(this.props.hogs)
        
        const hogComponent = this.props.hogs.map((hog, i) => 
       
        < Tile key = {i} name = {hog.name} specialty= {hog.specialty} greased = {hog.greased} weight= {hog.weight} highestMedal = {hog['highest medal achieved']} /> 
        )
        return (
            <div className = "ui grid container">
                {hogComponent}
                
            </div>
        )
    }
}
