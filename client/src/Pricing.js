import './App.css';
import Logo from './img/server-logo.png'
import React from 'react'
import { Navbar, Nav, Form, InputGroup, Button, FormControl } from 'react-bootstrap'

function Pricing() {
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
            <h1>This is Pricing</h1>
        </div>
    )
}

export default Pricing;