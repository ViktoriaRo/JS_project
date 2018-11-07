import React from 'react';

const FeedbackForm = () => {
	return (
			<form>
				<input id="weather-input" type="text" name="name" placeholder='Name...' />
				<input id="weather-input" type="text" name="surname" placeholder='Surname...' />
				<button className="input-field inline">Submit feedback</button>
				<textarea id="feedback-input" className="materialize-textarea" name="feedback" placeholder='Your feedback...' />
			</form>
	);
}

export default FeedbackForm;