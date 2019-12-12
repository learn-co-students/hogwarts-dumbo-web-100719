import React, { Component } from 'react'
import AugustusGloop from "./hog-imgs/augustus_gloop.jpg"
import BayOfPigs from "./hog-imgs/bay_of_pigs.jpg"
import Cherub from "./hog-imgs/cherub.jpg"
import GalaxyNote from "./hog-imgs/galaxy_note.jpg"
import Leggo from "./hog-imgs/leggo_my_eggo.jpg"
import Mudblood from "./hog-imgs/mudblood.jpg"
import PiggySmalls from "./hog-imgs/piggy_smalls.jpg"
import Porkchop from "./hog-imgs/porkchop.jpg"
import RainbowDash from "./hog-imgs/rainbowdash.jpg"
import Sobriety from "./hog-imgs/sobriety.jpg"
import TheProsciutto from "./hog-imgs/the_prosciutto_concern.jpg"
import Trouble from "./hog-imgs/trouble.jpg"
import TruffleShuffle from "./hog-imgs/truffleshuffle.jpg"

const imgMapper = {
    "Mudblood" : Mudblood,
    "Porkchop" : Porkchop,
    "Cherub" : Cherub,
    "Piggy smalls": PiggySmalls,
    "Trouble": Trouble,
    "Sobriety": Sobriety,
    "Rainbowdash": RainbowDash,
    "TruffleShuffle": TruffleShuffle,
    "Bay of Pigs": BayOfPigs,
    "The Prosciutto Concern": TheProsciutto,
    "Galaxy Note": GalaxyNote,
    "Leggo My Eggo": Leggo,
    "Augustus Gloop": AugustusGloop

}









export default class Hog extends Component {

    state = {
        isHidden: false
    }

hideOrDisplay = () => {
    this.setState({
        isHidden: !this.state.isHidden
    })
}
    






    render() {
        // let foundImg = this.props.images.find(imageObj => imageObj.name === this.props.HogObj.name) 
        console.log(this.props.images)

        return (
            <div
            className = "ui eight wide column"
            >
            <h4
            onClick = {this.hideOrDisplay}
            >{this.props.hogObj.name}</h4>
            <div style = {this.state.isHidden ? {display: "none"}: {display: "block"}}>
            <img src= {imgMapper[this.props.hogObj.name]} alt= "piggo" />
            <p>{this.props.hogObj.specialty}</p>
            {this.props.hogObj.greased ? <p>SURE IS!</p> : <p>NO WAY!</p>}
            <p>{this.props.hogObj.weight}</p>
            <h5>HOGBELT LEVEL: {this.props.hogObj["highest medal achieved"]}</h5>
            </div>
            </div>
        )
    }
}
