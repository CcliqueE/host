import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'

import { Navbar, Nav, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="container">
      <Navbar className="navBar" fixed="top" expand="md">
        <Navbar.Brand href="/">
          <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" bsPrefix="navbar-collapse" id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="Nav" href="/pricing">Pricing</Nav.Link>
            </Nav>
            <hr className="collapse-line" />
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
              <Button href="/register-login" type="submit">SignUp/Login</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Home;
