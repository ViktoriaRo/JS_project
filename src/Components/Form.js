import React from 'react';

const Form = (props) => {
	return (
		<div>
			<form onSubmit={props.getWeather}>
				<input id="weather-input" type="text" name="city" placeholder='City...' />
				<input id="weather-input" type="text" name="country" placeholder='Country...' />
				<button>Get Weather </button>
			</form>
		</div>
	);
};

export default Form;



