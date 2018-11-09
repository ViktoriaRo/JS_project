import React, { Component } from 'react';
import Titles from './Titles';
import FeedbackContainer from './FeedbackContainer'
import FeedbackForm from './FeedbackForm'

class Feedback extends Component {
  state = {
    feedback: [
		{
			name: 'John', 
			surname: 'Smith',
			content: 'Easy to use. Nice interface. I like it!',
			id: 2
		}
	]
  }

  addFeedback = (feed) => {
  	feed.id = Math.random();
  	let feedback = [...this.state.feedback, feed];
  	this.setState({
  		feedback: feedback
  	});
  }

  render() {
    return (
    	<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-5 title-container">
								<Titles />
							</div>
							<div className="col-7 form-container">
        						<FeedbackForm addFeedback={this.addFeedback}/>
								<FeedbackContainer feedback={this.state.feedback}/>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Feedback;