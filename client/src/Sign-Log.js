import React from 'react'
import './App.css'
import Logo from './img/server-logo.png'

import { Col, Navbar, Nav, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function SignLog () {
    return (
        <div>
            <Navbar className="navBar" fixed="top" expand="md">
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
                    <Button href="/register-login" type="submit">SignUp/Login</Button>
                    </Form>
                </Navbar.Collapse>
                </div>
            </Navbar>
        
            {/* End of consistent code */}
                      
            <Form className="signLog">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default SignLog