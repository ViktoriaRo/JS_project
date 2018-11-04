import React from 'react';
import Titles from './Titles';
import Form from './Form';


class Contacts extends React.Component {
	render() {
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
									<Form getWeather={this.getWeather} />
										hello from Contacts...
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
};		

export default Contacts;