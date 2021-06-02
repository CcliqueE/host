import './css/pricing.css'
import './css/checkout.css'
import React from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LogoInverse from './img/rust-logo-inverted.png'

import { IoCheckmarkDone } from "react-icons/io5"
import { IoMdClose } from 'react-icons/io'
import { BsX } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Card, CardColumns, Button, Form, Col, Row } from 'react-bootstrap'

class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sub_show_one: false,
            sub_show_two: false,
            sub_show_three: false,
            cardNumber: '',
            cardHolder: ''
        }
        this.session_Subsciption_one = this.session_Subsciption_one.bind(this)
        this.session_Subsciption_two = this.session_Subsciption_two.bind(this)
        this.session_Subsciption_three = this.session_Subsciption_three.bind(this)
        this.customerCreate = this.customerCreate.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    session_Subsciption_one(event) {
        event.preventDefault()
        if (this.state.sub_show_one === false) {
            this.setState({ sub_show_one: true })
        } else if (this.state.sub_show_one === true) {
            this.setState({ sub_show_one: false })
            window.location.reload()
        }
    }

    session_Subsciption_two(event) {
        event.preventDefault()
        if (this.state.sub_show_two === false) {
            this.setState({ sub_show_two: true })
        } else if (this.state.sub_show_two === true) {
            this.setState({ sub_show_two: false })
            window.location.reload()
        }
    }

    session_Subsciption_three(event) {
        event.preventDefault()
        if (this.state.sub_show_three === false) {
            this.setState({ sub_show_three: true })
        } else if (this.state.sub_show_three === true) {
            this.setState({ sub_show_three: false })
            window.location.reload()
        }
    }

    customerCreate(event) {
        event.preventDefault()
        if (sessionStorage.getItem('user_id') !== null) {
            const session_id = {
                user_id: sessionStorage.getItem('user_id')
            }
            axios
            .post('http://localhost:5000/create-subscription', session_id)
            .then((res) => { console.log(res) })
        }
    }

    render() {
    return (
        <div className="pricing-page-contain">
            <NavBar/>
            
            <div className="cards">
            <CardColumns className="pricing-cards">
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className="pricing-title">$18</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">125 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
                    </ul>
                    <Card.Body>
                        <Button onClick={this.session_Subsciption_one} variant="defualt" className="choose-btn tier_one">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="pricing middle-card">
                    <div className="pricing middle-card-contain">
                    <div className="best-seller-contain"><h5 className="best-seller-text">🎉 Best Seller 🎉</h5></div>
                    <Card.Body>
                        <Card.Title className="pricing-title">$26</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">200 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
                    </ul>
                    <Card.Body>
                        <Button onClick={this.session_Subsciption_two} variant="defualt" className="choose-btn">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                    </Card.Body>
                    </div>
                </Card>
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className="pricing-title">$36</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">350 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
                    </ul>
                    <Card.Body>
                        <Button onClick={this.session_Subsciption_three} variant="defualt" className="choose-btn">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                    </Card.Body>
                </Card>
            </CardColumns>
            </div>
            {this.state.sub_show_one === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">
                        <img className="inverted-logo" alt="logo" src={LogoInverse}/>
                        <h4 className="checkout-price-text">Monthly Recurring <HiArrowNarrowRight/> $18</h4>
                    </div>
                    <Button onClick={this.session_Subsciption_one} variant="default" className="checkout-close">
                        <BsX size={25}/>
                    </Button>
                    <div className="form-contain">
                        <Form.Group>
                            <Form.Label className="form-title">Card Holder Name</Form.Label>
                            <Form.Control
                            name="cardHolder"
                            className="form" 
                            
                            placeholder="Joe Smith" 
                            value={this.state.cardHolder}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-title">Card Number</Form.Label>
                            <Form.Control
                            name="cardNumber"
                            className="form" 
                            
                            placeholder="7777-7777-7777-7777" 
                            value={this.state.cardNumber}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control
                                    name="cardNumber"
                                    className="form" 
                                    
                                    placeholder="Zip Code" 
                                    value={this.state.cardNumber}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group>
                                    <Form.Label>Security</Form.Label>
                                    <Form.Control
                                    name="cardNumber"
                                    className="form" 
                                    
                                    placeholder="155" 
                                    value={this.state.cardNumber}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant="default" className="checkout-btn">
                            <h4 className="checkout-btn-text">Subscribe</h4>
                        </Button>
                        <h4 className="checkout-price-text2">Your subscription will start now</h4>
                    </div>
                </div>
            </div>
             : <div></div>}
            {this.state.sub_show_two === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">
                        <h4>$26</h4>
                    </div>
                    <Button onClick={this.session_Subsciption_two} variant="default" className="checkout-close">
                        <BsX size={25}/>
                    </Button>
                </div>
            </div>
             : <div></div>}
            {this.state.sub_show_three === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">
                        <h4>$36</h4>
                    </div>
                    <Button onClick={this.session_Subsciption_three} variant="default" className="checkout-close">
                        <BsX size={25}/>
                    </Button>
                </div>
            </div>
             : <div></div>}


            <Footer/>
        </div>
    )
    }
}


export default Pricing;