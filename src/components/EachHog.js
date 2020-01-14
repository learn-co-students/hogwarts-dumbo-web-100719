import React, { Component } from 'react'

export default class EachHog extends Component {

    state = {
        clicked: false
    }

    clickedHog = () => {

        this.setState({
            
            clicked: !this.state.clicked
        })
    }

    theHogs = () => {

        const hogToLowerCase= (this.props.hog.name).toLowerCase()
        const hogForImage= hogToLowerCase.split(" ").join("_")

            if (this.state.clicked) {
                return <card >
            <img src ={require(`../hog-imgs/${hogForImage}.jpg`)} alt="{hog.name}"/>
            <p><button onClick= {this.clickedHog} id= "forClicking">{this.props.hog.name}</button></p>
            <p><h2 id= "the-name">{this.props.hog.name}</h2></p>
            <ul>
            <li id= "specialty">Specialty: {this.props.hog.specialty}</li>
            <li id= "greased">Greased: {this.props.hog.greased === true ? "yes" : "no"}</li> 
            <li id= "weight"> weight: {this.props.hog.weight}</li>
            <li id= "highest medal achieved">Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</li>
            <li></li> 
            </ul>
            </card>
            }
            else {
                return  <card>
                <img src ={require(`../hog-imgs/${hogForImage}.jpg`)} alt="{hog.name}"/>
                <p><button onClick= {this.clickedHog} id= "name">{this.props.hog.name}</button></p>
                </card>
            }
        }
    
        
    


    render(){
        
        return (
           <div>
        <p>{this.theHogs()}</p>   
        </div>
        )
    }
}