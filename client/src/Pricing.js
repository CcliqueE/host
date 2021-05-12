import './App.css';
import Logo from './img/server-logo.png'
import React from 'react'

import { IoCheckmarkDone } from "react-icons/io5"
import { IoMdClose } from 'react-icons/io'
import { Card, Navbar, Nav, Form, InputGroup, Button, FormControl, CardColumns } from 'react-bootstrap'

function Pricing() {
    return (
        <div className="container">
            
            <Navbar className="navBar" fixed="top" expand="lg">
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