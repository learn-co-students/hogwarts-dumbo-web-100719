import React, { Component } from 'react'

export default class HogDetails extends Component {
    
    
    
    render() {
        const { weight, specialty, greased, highestMedal } =  this.props
        
        return (
            <div >
                <p>
                   weight: {weight} llbs
                </p>
                <p>
                  speciality: {specialty}
                </p>
                <p>
                    Greased: {greased ? "yes" : "no"}
                </p>
                <p>
                    Medal: {highestMedal}
                </p>
            </div>
        )
    }
}