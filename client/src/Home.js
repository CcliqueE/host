import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'

import { Navbar, Nav, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Line } from 'react-shapes'

function Home() {
  return (
    <div>
      <Navbar className="navBar">
        <Navbar.Brand href="/">
          <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
        </Navbar.Brand>
          <div className="Sign">
          <Nav.Link className="Nav" href="/pricing">Pricing</Nav.Link>
          <Form inline>
            <InputGroup>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <FormControl type="password" placeholder="Password" className=" mr-sm-2" />
            <Button type="submit">SignUp/Login</Button>
          </Form>
          </div>
      </Navbar>
      <Line x1={15} x2={550} y1={25} y2={350}  stroke={{color:'#E65243'}} strokeWidth={3} />
    </div>
  );
}

export default Home;
