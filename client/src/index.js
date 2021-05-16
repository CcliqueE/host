import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import Pricing from './Pricing'
import SignLog from './Sign-Log'
import NoSub from './no-sub-pg'
import Sub from './sub-pg'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/register-login" component={SignLog}/>
      <Route exact path="/dashboard" component={NoSub}/>
      <Route exact path="/dashboard-sub" component={Sub}/>
    </Switch>
  </Router>
  ), document.getElementById('root')
);