import React from 'react'
import axios from 'axios'
import './css/register.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Form, Button, Alert } from 'react-bootstrap'

class SignIn extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            log_sign: false,
            email: '',
            loginemail: '',
            username: '',
            loginuser: '',
            password: '',
            loginpass: '',
            passconfirm: '',
            show: true,
            empty: false,
            taken: false,
            pass: true,
        }
        this.switch = this.switch.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.registerSubmit = this.registerSubmit.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this)
        // this.checkBox = this.checkBox.bind(this)
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    registerSubmit(event) {
        if (this.state.password !== this.state.passconfirm) {
            event.preventDefault()
        } else if (this.state.username.length > 15) {
            event.preventDefault()
        } else if (this.state.username.indexOf(' ') > 0 || this.state.password.indexOf(' ') > 0) {
            event.preventDefault()
        } else if (this.state.email === '' ||
        this.state.username === '' ||
        this.state.password === '' ||
        this.state.passconfirm === '') {
            this.setState({ empty: true })
            event.preventDefault()
        } else if (this.state.email !== '' || 
        this.state.username !== '' ||  
        this.state.password !== '' || 
        this.state.passconfirm !== '' ) {
            event.preventDefault()
            const register = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
            axios
            .post('http://localhost:5000/register', register)
            .then(() => {window.location = '/register-login/created'})
            .catch(err => {
                console.error(parseInt(err));
                this.setState({ taken: true })
            });
        } else {
            window.location.reload()
        }
    }

    loginSubmit(event) {
        if (this.state.loginemail === '' || this.state.loginpass === '') {
            this.setState({ empty: true })
            event.preventDefault()
        } else if (this.state.loginemail !== '' || this.state.loginpass !== '') {
            
            event.preventDefault()
            const login = {
                email: this.state.loginemail,
                password: this.state.loginpass
            }
            axios
            .post('http://localhost:5000/login', login)
            .then((res) => { 
                sessionStorage.setItem('zkShrinks', res.data[0])
                sessionStorage.setItem('koopa', res.data[1])
                sessionStorage.setItem('cactus', res.data[2])
                sessionStorage.setItem('bMo', res.data[3])
            })
            .then((res) => { window.location = '/dashboard' })
            .catch(err => {
                event.preventDefault()
                console.error(err)
                this.setState({ pass: false })
            })
            
            axios
            .post('http://localhost:5000/delete-expired')
            .catch (err => {
                console.error(err)
            })

        } else {
            event.preventDefault()
        }
    }

    switch() {
        if (this.state.log_sign === false) {
            this.setState({ empty: false })
            this.setState({ log_sign: true })
            this.setState({ pass: true })
        } else if (this.state.log_sign === true) {
            this.setState({ empty: false })
            this.setState({ log_sign: false })
        }
    }

    render() {

    return (
        <div>

            <NavBar/>
        
            <Alert variant="info" className="email-alert">
                <Alert.Heading className="alert-head" >Good to see you!</Alert.Heading>               
                <p className="alert-p">
                    We don't ever share your email with anyone else :)
                </p>
            </Alert>
            {this.state.log_sign === true ?
            <div className="sign-log-contain">
                <Form onSubmit={this.registerSubmit} className="sign-log">
                    <div className="sign-log-group">
                        <Form.Group>
                            {this.state.empty === true ? 
                            <div className="empty-error-contain">
                                <div className="empty-error-excl-contain"><h4 className="empty-error-excl">!</h4></div>
                                <h4 className="empty-error-text">No input can be empty</h4>
                            </div>
                            : <div></div>}
                            <div className="register-title-contain">
                                <h1 className="register-title">Register</h1>
                            </div>
                            <div className="switch-btn-contain">
                                <Button onClick={this.switch} variant="default" className="switch-btn">
                                    <h4 className="switch-text">Switch to Login</h4>
                                </Button>
                            </div>
                            {this.state.taken === true ? 
                            <div className="taken-alert">
                                <div className="taken-alert-ex">
                                    <h5 className="taken-ex-text">!</h5>
                                </div>
                                <h4 className="taken-alert-text">Email has been taken</h4>
                            </div>
                            : <div></div>}
                            <Form.Label>Email address</Form.Label>
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
                        {this.state.username.length > 15 ?
                        <div className="long-error-contain">
                            <h4 className="long-error-title">Username is too long</h4>
                            <h4 className="long-error-info">Should be less than 15 characters</h4>
                        </div>
                        : <div></div>}
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
                        && this.state.show ? 
                        <div className="confirm-alert">
                            <div className="exclamation">
                                <h4 className="ex-text">!</h4>
                            </div>
                                <div className="con-alert-text">
                                <h3 className="con-alert-text2">Passwords Do Not Match!!</h3>
                                <h4 className="con-alert-text3">Make Sure They Are The Same</h4>
                            </div>
                        </div>
                            : <div></div>}
                        {this.state.username.indexOf(' ') >= 0 || 
                        this.state.password.indexOf(' ') >= 0 ? 
                        <div className="space-error-contain">
                            <div className="space-error-excl-contain">
                                <h4 className="space-error-excl">!</h4>
                            </div>
                            <h4 className="space-error-text">No spaces are allowed for Password or Username</h4>
                        </div>
                        : <div></div>}
                        <div className="register-btn">
                            <Button 
                            className="sign-log-btn" 
                            href=''
                            variant="default" 
                            type="submit"
                            value="Submit"
                            >
                                <h4>Register</h4>
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
             :
            <div className="sign-log-contain">
                <div className="sign-log-group">
                    <Form className="sign-log" onSubmit={this.loginSubmit}>
                        <Form.Group>
                            {this.state.empty === true ? 
                            <div className="empty-error-contain">
                                <div className="empty-error-excl-contain"><h4 className="empty-error-excl">!</h4></div>
                                <h4 className="empty-error-text">No input can be empty</h4>
                            </div>
                             : <div></div>}
                            <div className="log-title-contain">
                                <h1 className="log-title">Login</h1>
                            </div>
                            <div className="register-switch switch-btn-contain">
                                <Button onClick={this.switch} variant="default" className="switch-btn">
                                    <h4 className="switch-text">Switch to Register</h4>
                                </Button>
                            </div>
                            {this.state.pass === false ? <div className="wrg-pass">
                            <div className="wrg-ex-contain"><h4 className="wrg-ex">!</h4></div>
                            <h4 className="wrg-pass-text">Account doesn't exist!!</h4>
                            </div>
                             : <div></div>}
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="loginemail"
                            className="form" 
                            type="email" 
                            placeholder="Email"
                            value={this.state.loginemail}
                            onChange={this.handleInputChange}
                            
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            name="loginpass"
                            className="form" 
                            type="password" 
                            placeholder="Password"
                            value={this.state.loginpass}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="box" controlId="box2">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <div className="log-btn-contain">
                            <Button 
                            className="sign-log-btn log-btn" 
                            href="" 
                            variant="default" 
                            type="submit"
                            value="Submit"
                            onClick={this.loginSubmit}
                            >
                                <h4 className="log-btn-text">Login</h4>
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            }
            <Footer/>
        </div>
        )
    }
}

export default SignIn


