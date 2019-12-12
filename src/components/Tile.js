import React, { Component } from 'react'
import Augustus from '../hog-imgs/augustus_gloop.jpg'
import BayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import RainbowDash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import ThePro from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import Truffle from '../hog-imgs/truffleshuffle.jpg'
import HogDetails from './HogDetails.js'

const imgMapper = {
    'Mudblood': Mudblood,
    'Porkchop': Porkchop,
    'Cherub': Cherub,
    'Piggy smalls': PiggySmalls,
    'Trouble': Trouble,
    'Sobriety': Sobriety,
    'Rainbowdash': RainbowDash,
    'TruffleShuffle': Truffle,
    'Bay of Pigs': BayOfPigs,
    'The Prosciutto Concern': ThePro,
    'Galaxy Note': GalaxyNote,
    'Leggo My Eggo': LeggoMyEggo,
    'Augustus Gloop': Augustus
}

export default class Tile extends Component {
    
    state = {
        block: "none"
    }
    showDetails = () => {
        if (this.state.block === "none"){
            this.setState({
                block: "block"
            })
        }else{
            this.setState({
                block: "none"
            })

        }
        
    }
    render() {
       
        
        return (
            <div className="ui eight wide column" onClick = {this.showDetails} >
                <h1>
                    {this.props.name}
                </h1>
                <img src = {imgMapper[this.props.name]} alt = ''/>
                
                <div style = {{display: this.state.block }}>
                < HogDetails {...this.props} />
                </div>
            </div>
        )
    }
}