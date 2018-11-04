import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Error from './Components/Error';
import Navigation from './Components/Navigation';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} />
						<Route path="/contacts" component={Contacts} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
};		

export default App;