import React from 'react'
import './css/register.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Col, Form, Button, Alert } from 'react-bootstrap'

function SignLog () {
    return (
        <div>

            <NavBar/>
        
            {/* End of consistent code */}

            <Alert variant="info" className="email-alert">
                <Alert.Heading className="alert-head" >Good to see you!</Alert.Heading>               
                <p className="alert-p">
                    We won't ever share your email with anyone else :)
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
                        <Form.Group >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control className="form" type="password" placeholder="Confirm Password" />
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
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="form" type="email" placeholder="Username" />
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


            <Footer/>
        </div>
    )
}

export default SignLog