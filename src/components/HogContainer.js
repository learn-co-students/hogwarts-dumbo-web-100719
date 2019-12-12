import React, { Component } from 'react'
import Hog from './Hog';


export default class HogContainer extends Component {


renderHogs = () => {
    return this.props.hogs.map(hog =>
         <Hog hogObj= {hog} images={this.props.images}/>
    )
}








    render() {
        return (
            <div
            className = "ui grid container"
            >
                {this.renderHogs()}
            </div>
        )
    }
}
