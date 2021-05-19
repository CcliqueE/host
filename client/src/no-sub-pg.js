import './App.css';
import React from 'react'
import Logo from './img/server-logo.png'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

function NoSub() {
    return (
        <div className="">
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


            {/* More consistent code */}

            <hr className="footer-hr" />
            <div className="footer-100">
                <h2>Links</h2>
                <ul className="footer-list">
                    <li><a className="footer-link" href="/">about <AiOutlineInfoCircle/></a></li>
                    <li><a className="footer-link" href="/pricing">pricing</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NoSub