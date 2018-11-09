import React from 'react';
import Titles from './Titles';

const About = () => {
	return (
		<div className="wrapper">
			<div className="main">
				<div className="container">
					<div className="row">
						<div className="col-5 title-container">
							<Titles />
						</div>
						<div className="col-7 form-container">
							
								This page is about ....
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};		

export default About;