import React from "react";
import "./Navbar.css";


function Navbar(props) {
  return(
    <div className="navbar-container">
		<nav>
			<div className="nav-wrapper container">
				<a href="/" className='brand-logo center'>Steven Bender's Garden Traveler</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingRight: "20px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
  )
}

export default Navbar