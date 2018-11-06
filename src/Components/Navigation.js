import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="navbar-fixed">
			<nav className="nav-wrapper red darken-3">
				<div className="container">
					<div className="brand-logo" to="/"><i className="material-icons">cloud </i> Weather App</div>
					<ul className="right">
						<li><NavLink to="/"> Home</NavLink> </li>
						<li><NavLink to="/about"> About</NavLink></li>
						<li><NavLink to="/feedback"> Feedback</NavLink></li>
					</ul>
				</div>
			</nav>
		</div>
	);
} 

export default Navigation;