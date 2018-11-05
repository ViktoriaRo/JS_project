import React from 'react';
import axios from 'axios';
import Titles from './Titles';
import Form from './Form';

class Feedback extends  React.Component {
	state = {
		persons: [],
	}

	omponentDidMount() {
		axios.get(`http://jsonplaceholder.typicode.com/users`).then(res => {
			console.log(res);
			this.setState({persons: res.data});
		});
	}

	render() {
		return(
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
								</div>
								<div className="col-xs-7 form-container">
									
										Write your feedback here...
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
};

export default Feedback;