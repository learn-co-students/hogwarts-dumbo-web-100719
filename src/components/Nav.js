import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {


	render(){
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br></br>
			<br></br>
			<p><button onClick= {this.props.sortByGreased}>Greased</button></p> 
			<br></br>
			<p><button onClick={this.props.sortByName}>Sort by Name</button></p>
			<br></br>
			<p><button onClick={this.props.sortByWeight}>Sort by Weight</button></p>
		</div>
	)
}
}

export default Nav
