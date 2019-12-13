import React, { Component } from 'react'
import mudBlood from "../hog-imgs/mudblood.jpg"
import augustusGloop from "../hog-imgs/augustus_gloop.jpg"
import bayOfPigs from "../hog-imgs/bay_of_pigs.jpg"
import cherub from "../hog-imgs/cherub.jpg"
import galaxyNote from "../hog-imgs/galaxy_note.jpg"
import leggoMyEggo from "../hog-imgs/leggo_my_eggo.jpg"
import piggySmalls from "../hog-imgs/piggy_smalls.jpg"
import porkchop from "../hog-imgs/porkchop.jpg"
import rainbowdash from "../hog-imgs/rainbowdash.jpg"
import sobriety from "../hog-imgs/sobriety.jpg"
import theProsciuttoConcern from "../hog-imgs/the_prosciutto_concern.jpg"
import trouble from "../hog-imgs/trouble.jpg"
import truffleshuffle from "../hog-imgs/truffleshuffle.jpg"

const pigMapper = {
    'Mudblood' : mudBlood,
    'Augustus Gloop' : augustusGloop,
    'Bay of Pigs' : bayOfPigs,
    'Cherub' : cherub,
    'Galaxy Note' : galaxyNote,
    'Leggo My Eggo' : leggoMyEggo,
    'Piggy smalls' : piggySmalls,
    'Porkchop' : porkchop,
    'Rainbowdash' : rainbowdash,
    'Sobriety' : sobriety,
    'The Prosciutto Concern': theProsciuttoConcern,
    'Trouble' : trouble,
    'TruffleShuffle' : truffleshuffle
}


export default class Hog extends Component {

    state = {
        global: false
    }



    handleOnClick = () => {
        this.setState({
            global: !this.state.global
        })
    } 

    render() {
        let displayed = this.state.global ? "block" : "none"
        return (
            <div className="pigTile" onClick={this.handleOnClick}>
            <div>
                <h1>{this.props.name}</h1>
                <img src={pigMapper[this.props.name]} alt={'wasssa'} />
            </div>
            <div className={displayed}>
                <p>{this.props.specialty}</p>
                <p>Are you greased? {(this.props.greased ? "yeaaaaaa" : "nahhhhh")}</p>
                <p>Weight:{this.props.weight}</p>
                <h3>Medal: {this.props.medal}</h3>
            </div>

            </div>
        )
    }
}
