import React from 'react';

const Form = (props) => {
	return (
		<form onSubmit={props.getWeather}>
			<input id="name" type="text" name="city" placeholder='City...' />
			<input id="name" type="text" name="country" placeholder='Country...' />
			<button>Get Weather </button>
		</form>
	);
};

export default Form;



