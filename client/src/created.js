import React from 'react'
import axios from 'axios'
import './css/register.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Col, Form, Button, Alert } from 'react-bootstrap'

class Created extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            passconfirm: '',
            show: true,
            taken: Boolean
        }

        this.handleInputChange = this.handleInputChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit(event) {
        if (this.state.password !== this.state.passconfirm) {
            event.preventDefault()
            alert('Passwords do not match')
        } else if (this.state.email !== '' || 
        this.state.username !== '' ||  
        this.state.password !== '' || 
        this.state.passconfirm !== '' ) {
            event.preventDefault()
            const user = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
            console.log(user)
            axios
            .post('http://localhost:5000/register', user)
            .then(() => {window.location = '/register-login/created'})
            .then(this.setState({taken: false}))
            .catch(err => {
                console.error(err);
                this.setState({taken: true})
            });
        } else {
            alert('doesnt work')
        }
    }

    componentDidMount() {
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
                            {this.state.taken === true ? 
                            <div className="taken-alert">
                                <div className="taken-alert-ex"><h5 className="taken-ex-text">!</h5></div>
                                <h4 className="taken-alert-text">Email has been taken</h4>
                            </div>
                             : <div></div>}
                            <Form.Control
                            name="email"
                            className="form" 
                            type="email" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                            name="username"
                            className="form" 
                            type="text" 
                            placeholder="Username" 
                            value={this.state.username}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            name="password"
                            className="form" 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            name="passconfirm"
                            className="form" 
                            type="password" 
                            placeholder="Confirm Password"
                            value={this.state.passconfirm}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        {this.state.passconfirm !== ''
                        && this.state.passconfirm !== this.state.password 
                        && this.state.show ? (
                        <div 
                        className="confirm-alert"
                        role="alert">
                            <div className="exclamation"><h4 className="ex-text">!</h4></div>
                                <div className="con-alert-text">
                                <h3 className="con-alert-text2">Passwords Do Not Match!!</h3>
                                <h4 className="con-alert-text3">Make Sure They Are The Same</h4>
                            </div>
                        </div>
                        ) : (
                        <div></div>
                        )}
                        <Form.Group controlId="box1">
                            <Form.Check className="box" type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button 
                        className="sign-log-btn" 
                        href=''
                        variant="primary" 
                        type="submit"
                        value="Submit"
                        >Submit</Button>
                        
                    </Col>
                    <div className="form-line"></div>
                    <Col>
                        <Form.Group>
                            <div className="created-alert">
                                    <h4 className="created-alert-text1">Account Created</h4>
                                    <h4 className="created-alert-text2">Log In</h4>
                            </div>
                            <h1>Log In</h1>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            name="username"
                            className="form" 
                            type="email" 
                            placeholder="Username" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            name="password"
                            className="form" 
                            type="password" 
                            placeholder="Password" />
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

export default Created