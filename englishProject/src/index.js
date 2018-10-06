import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Provider} from 'react-redux'

import ConnectedNews from "./news/news"
import {About} from "./about/about"
import {store} from './store'

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>

      <hr/>

      <Route path="/about" render={() => <About/>}/>
      <Route exact path="/news" component={ConnectedNews}/>
    </div>
  </Router>
  </Provider>
)


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
