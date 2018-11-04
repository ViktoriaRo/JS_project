import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

const API_KEY = "10bddaa697444e217f0c7f6b862097bd";

class Home extends React.Component {
	state = {
		city: undefined,
		country: undefined,
		temperature: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

	 getWeather = async (e) => {
    	e.preventDefault();
    	const city = e.target.elements.city.value;
    	const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if (city && country) {
			this.setState({
				city: data.name,
				country: data.sys.country,
				temperature: data.main.temp,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ""
			});
		} else {
			this.setState({
				city: undefined,
				country: undefined,
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please enter the value."
			});
		}
	}

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
									<Weather 
										temperature={this.state.temperature}
										humidity={this.state.humidity}
										description={this.state.description}
										city={this.state.city}
										country={this.state.country}
										error={this.state.error}
									/>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
};		

export default Home;