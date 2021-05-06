import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import Pricing from './Pricing'


ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pricing" component={Pricing}/>
    </Switch>
  </Router>
  ), document.getElementById('root')
);