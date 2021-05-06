import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import Pricing from './Pricing'
import SignLog from './Sign-Log'


ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/register-login" component={SignLog}/>
    </Switch>
  </Router>
  ), document.getElementById('root')
);