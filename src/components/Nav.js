import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<button
			onClick= {props.filterPigs}
			>GREEZEFILTAR</button>
			<button
			onClick= {props.sortName}
			>U WANT AR NAME SERT</button>
			<button
			onClick = {props.weightSort}
			>HOOS HEAVIEST</button>

		</div>
	)
}

export default Nav
