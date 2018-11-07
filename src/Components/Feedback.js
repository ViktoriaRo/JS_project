import React from 'react';
import Titles from './Titles';
import FeedbackForm from './FeedbackForm';

class Feedback extends  React.Component {
	render() {
		return(
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-5 title-container">
								<Titles />
							</div>
							<div className="col-7 form-container">
								<FeedbackForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Feedback;