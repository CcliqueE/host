import './App.css';
import Logo from './img/server-logo.png'
import React from 'react'

import { IoCheckmarkDone } from "react-icons/io5"
import { IoMdClose } from 'react-icons/io'
import { Card, Navbar, Nav, Form, Button, CardColumns } from 'react-bootstrap'

function Pricing() {
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

            {/* End of consistent code */}
            <CardColumns expand="sm">
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className=" pricing-title">$15</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">150 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info6</h2>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className=" pricing-title">$15</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">150 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info6</h2>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className=" pricing-title">$15</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">150 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/>       Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/>       Info6</h2>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>
    )
}

export default Pricing;