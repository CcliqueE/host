import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'

import { Navbar, Nav, Form, InputGroup, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Line } from 'react-shapes'

function Home() {
  return (
    <div>
      <Navbar className="navBar" expand="md">
        <Navbar.Brand href="/">
          <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
        </Navbar.Brand>
          <div className="Sign">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="Nav" href="/pricing">Pricing</Nav.Link>
            </Nav>
            <Form className="forms-home" inline>
              <InputGroup >
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Form className="forms-home" inline>
              <FormControl  type="password" placeholder="Password" className=" mr-sm-2" />
              <Button type="submit">SignUp/Login</Button>
            </Form>
          </Navbar.Collapse>
          </div>
          
      </Navbar>
    </div>
  );
}

export default Home;
