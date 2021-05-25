import React from 'react'
import './css/register.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Col, Form, Button, Alert } from 'react-bootstrap'

class SignIn extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            passconfirm: ''
        }

        this.emailChange = this.emailChange.bind(this)
        this.usernameChange = this.usernameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.confirmChange = this.confirmChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        })
    }
    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    passwordChange(event) {
        this.setState({
            password: event.target.value
        })
    }
    confirmChange(event) {
        this.setState({
            passconfirm: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {

    return (
        <div>

            <NavBar/>
        
            <Alert variant="info" className="email-alert">
                <Alert.Heading className="alert-head" >Good to see you!</Alert.Heading>               
                <p className="alert-p">
                    We won't ever share your email with anyone else :)
                </p>
            </Alert>
            <div className="form-container">  
            <Form onSubmit={this.handleSubmit} className="signLog">
                <Form.Row>
                    <Col className="sign-div" xs={12} md={6}>
                        
                        <Form.Group>
                            <h1>Sign Up</h1>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            name="email"
                            className="form" 
                            type="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.emailChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                            name="username"
                            className="form" 
                            type="text" 
                            placeholder="Username" 
                            value={this.state.username}
                            onChange={this.usernameChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            name="password"
                            className="form" 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.passwordChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            className="form" 
                            type="password" 
                            placeholder="Confirm Password"
                            value={this.state.passconfirm}
                            onChange={this.confirmChange}/>
                        </Form.Group>
                        <Form.Group controlId="box1">
                            <Form.Check className="box" type="checkbox" label="Remember Me" />
                        </Form.Group>
                        
                        <Button 
                        className="sign-log-btn" 
                        href="" 
                        variant="primary" 
                        type="submit"
                        onClick={() => {if (this.state.password !== this.state.passconfirm) {
                            alert('password does not match')
                        } else {
                            return
                        }}}
                        >
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
}

export default SignIn