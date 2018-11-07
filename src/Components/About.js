import React from 'react';
import Titles from './Titles';
import Form from './Form';


const About = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-xs-5 title-container">
								<Titles />
							</div>
							<div className="col-xs-7 form-container">
								
									This page is about ....
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	);
};		

export default About;