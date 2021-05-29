import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Pricing from './Pricing'
import SignIn from './SignIn'
import Created from './created'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Forum from './Forum'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/register-login" component={SignIn}/>
      <Route exact path="/register-login/created" component={Created}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/forum" component={Forum}/>
    </Switch>
  </Router>
  ), document.getElementById('root')
);