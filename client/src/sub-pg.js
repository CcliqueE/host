import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'

import { Navbar, Nav, Form, Button } from 'react-bootstrap'

function Sub() {
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
                        <input type="text" className="username" name="username" placeholder="Username.."/>
                    </Form>
                    <Form className="forms-home" inline>
                    <input type="password" className="password" name="password" placeholder="Password.."/>
                    </Form>
                    <Button href="/register-login" type="submit">SignUp/Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Sub