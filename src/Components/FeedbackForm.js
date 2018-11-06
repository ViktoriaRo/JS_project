import React from 'react';

const FeedbackForm = () => {
	return (
			<form>
				<input id="weather-input" type="text" name="name" placeholder='Name...' />
				<textarea className="materialize-textarea" data-length="120" name="feedback" placeholder='Your feedback...' />
				<button>Submit feedback</button>
			</form>
	);
}

export default FeedbackForm;