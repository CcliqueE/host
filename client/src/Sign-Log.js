import React from 'react'
import './App.css'
import Logo from './img/server-logo.png'

import { Col, Navbar, Nav, Form, Button, Alert } from 'react-bootstrap'

function SignLog () {
    return (
        <div>
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
        
            {/* End of consistent code */}

            <Alert variant="info" className="email-alert">
                <Alert.Heading className="alert-head" >Good to see you!</Alert.Heading>               
                <p className="alert-p">
                    We never share your email with anyone else :)
                </p>
            </Alert>
            <div className="form-container">  
            <Form className="signLog">
                <Form.Row>
                    <Col className="sign-div" xs={12} md={6}>
                        <Form.Group >
                            <h1>Sign Up</h1>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="form" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="box1">
                            <Form.Check className="box" type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button className="sign-log-btn" href="/dashboard" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    <div className="form-line"></div>
                    <Col>
                        <Form.Group>
                            <h1>Log In</h1>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form" type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="form" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="box" controlId="box2">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button className="sign-log-btn" href="dashboard-sub" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            </div>

            {/* More consistent code */}

            <div className="footer-100">
                <h2>Links</h2>
                <ul className="footer-list">
                    <li><a className="footer-link" href="/">about</a></li>
                    <li><a className="footer-link" href="/pricing">pricing</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SignLog