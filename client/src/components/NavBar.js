import React from 'react'
import Logo from '../img/rust-logo.png'
import '../css/consistent.css'

import { VscMenu } from 'react-icons/vsc'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

export default class NavBar extends React.Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <div className="nav-contain">
                <Navbar className="navBar" fixed="top" expand="lg">
                    <Navbar.Brand href="/">
                    <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"><VscMenu className="burger"/></Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end" bsPrefix="navbar-collapse" id="collapse">
                        <Nav >
                        <div className="nav-contain"><a className="Nav" href="/pricing">Pricing</a></div>
                        </Nav>
                        <hr className="collapse-line" />
                        <Form className="forms-home" inline>
                            <input type="text" className="username" name="username" placeholder="Username"/>
                        </Form>
                        <Form className="forms-home" inline>
                        <input type="password" className="password" name="password" placeholder="Password"/>
                        </Form>
                        <Button href="/register-login" type="submit">SignUp/Login</Button>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        )
    }

}