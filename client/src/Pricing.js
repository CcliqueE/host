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
import { FaCcDiscover, FaCcMastercard, FaCcStripe, FaCcVisa, FaCcAmex } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Card, CardColumns, Button, Form, Col, Row } from 'react-bootstrap'

class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sub_show_one: false,
            sub_show_two: false,
            sub_show_three: false,
            alreadySub_one: false,
            alreadySub_two: false,
            alreadySub_three: false,
            loading: false,
            cardHolder: '',
            cardNumber: '',
            exp_month: '',
            exp_year: '',
            cvc: '',
            cardHolder_two: '',
            cardNumber_two: '',
            exp_month_two: '',
            exp_year_two: '',
            cvc_two: '',
            cardHolder_three: '',
            cardNumber_three: '',
            exp_month_three: '',
            exp_year_three: '',
            cvc_three: ''
        }
        this.session_Subscription_one = this.session_Subscription_one.bind(this)
        this.session_Subscription_two = this.session_Subscription_two.bind(this)
        this.session_Subscription_three = this.session_Subscription_three.bind(this)
        this.createSubscription_one = this.createSubscription_one.bind(this)
        this.createSubscription_two = this.createSubscription_two.bind(this)
        this.createSubscription_three = this.createSubscription_three.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    session_Subscription_one(event) {
        event.preventDefault()
        if (sessionStorage.getItem('zkShrinks') === null) {
            window.location = '/register-login'
        } else if (sessionStorage.getItem('koopa') !== 'null') {
            this.setState({ alreadySub_one: true })
            this.setState({ alreadySub_two: false })
            this.setState({ alreadySub_three: false })
        } else if (this.state.sub_show_one === false && sessionStorage.getItem('zkShrinks') !== null) {
            this.setState({ sub_show_one: true })
        } else if (this.state.sub_show_one === true) {
            this.setState({ sub_show_one: false })
            window.location.reload()
        }
    }

    session_Subscription_two(event) {
        event.preventDefault()
        if (sessionStorage.getItem('zkShrinks') === null) {
            window.location = '/register-login'
        } else if (sessionStorage.getItem('koopa') !== 'null') {
            this.setState({ alreadySub_two: true })
            this.setState({ alreadySub_one: false })
            this.setState({ alreadySub_three: false })
        } else if (this.state.sub_show_two === false && sessionStorage.getItem('zkShrinks') !== null) {
            this.setState({ sub_show_two: true })
        } else if (this.state.sub_show_two === true) {
            this.setState({ sub_show_two: false })
            window.location.reload()
        }
    }

    session_Subscription_three(event) {
        event.preventDefault()
        if (sessionStorage.getItem('zkShrinks') === null) {
            window.location = '/register-login'
        } else if (sessionStorage.getItem('koopa') !== 'null') {
            this.setState({ alreadySub_three: true })
            this.setState({ alreadySub_two: false })
            this.setState({ alreadySub_one: false })
        } else if (this.state.sub_show_three === false && sessionStorage.getItem('zkShrinks') !== null) {
            this.setState({ sub_show_three: true })
        } else if (this.state.sub_show_three === true) {
            this.setState({ sub_show_three: false })
            window.location.reload()
        }
    }

    createSubscription_one(event) {
        event.preventDefault()
        this.setState({ loading: true })
        const session_id = {
            user_id: sessionStorage.getItem('zkShrinks'),
            name: this.state.cardHolder,
            cardNumber: this.state.cardNumber,
            exp_month: this.state.exp_month,
            exp_year: this.state.exp_year,
            cvc: this.state.cvc,
            price_id: 'price_1IwNtYA2kpe3q8neItkjs5mO'
        }
        axios
        .post('http://localhost:5000/create-subscription', session_id)
        .then((res) => { 
            sessionStorage.setItem('koopa', res.data[0])
            sessionStorage.setItem('bMo', res.data[1])
         })
        .then((res) => { window.location = '/dashboard' })
        .catch(err => {
            console.error(err)
        })
    }

    createSubscription_two(event) {
        event.preventDefault()
        
        const session_id = {
            user_id: sessionStorage.getItem('zkShrinks'),
            name: this.state.cardHolder_two,
            cardNumber: this.state.cardNumber_two,
            exp_month: this.state.exp_month_two,
            exp_year: this.state.exp_year_two,
            cvc: this.state.cvc_two,
            price_id: 'price_1IwNt1A2kpe3q8netS3EwHGi'
        }
        axios
        .post('http://localhost:5000/create-subscription', session_id)
        .then((res) => { sessionStorage.setItem('koopa', res.data) })
        .then((res) => { window.location = '/dashboard' })
        .catch(err => {
            console.error(err)
        })
    }

    createSubscription_three(event) {
        event.preventDefault()
        
        const session_id = {
            user_id: sessionStorage.getItem('zkShrinks'),
            name: this.state.cardHolder_three,
            cardNumber: this.state.cardNumber_three,
            exp_month: this.state.exp_month_three,
            exp_year: this.state.exp_year_three,
            cvc: this.state.cvc_three,
            price_id: 'price_1IwNrrA2kpe3q8neoXohgWAf'
        }
        axios
        .post('http://localhost:5000/create-subscription', session_id)
        .then((res) => { sessionStorage.setItem('koopa', res.data) })
        .then((res) => { window.location = '/dashboard' })
        .catch(err => {
            console.error(err)
        })
    }

    render() {
    return (
        <div className="pricing-page-contain">
            <NavBar/>
            
            <div className="cards card-price">
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
                        <Button onClick={this.session_Subscription_one} variant="defualt" className="choose-btn tier_one">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                        {this.state.alreadySub_one === true ? 
                        <div className="already-error-contain">
                            <div className="already-excl-contain"><h4 className="already-excl">!</h4></div>
                            <h4 className="already-error-text">Already Subscribed</h4>
                            <div className="already-change-contain"><h5 className="already-change-text">Change Plan</h5></div>
                        </div>
                         : <div></div>}
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
                        <Button onClick={this.session_Subscription_two} variant="defualt" className="choose-btn">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                        {this.state.alreadySub_two === true ? 
                        <div className="already-error-contain">
                            <div className="already-excl-contain"><h4 className="already-excl">!</h4></div>
                            <h4 className="already-error-text">Already Subscribed</h4>
                            <div className="already-change-contain"><h5 className="already-change-text">Change Plan</h5></div>
                        </div>
                         : <div></div>}
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
                        <Button onClick={this.session_Subscription_three} variant="defualt" className="choose-btn">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                        {this.state.alreadySub_three === true ? 
                        <div className="already-error-contain">
                            <div className="already-excl-contain"><h4 className="already-excl">!</h4></div>
                            <h4 className="already-error-text">Already Subscribed</h4>
                            <div className="already-change-contain"><h5 className="already-change-text">Change Plan</h5></div>
                        </div>
                         : <div></div>}
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
                    <Button onClick={this.session_Subscription_one} variant="default" className="checkout-close">
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
                        <Row className="expire-date">
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label className="form-expire">Expire Date</Form.Label>
                                    <Form.Control
                                    name="exp_month"
                                    className="form" 
                                    placeholder="03" 
                                    value={this.state.exp_month}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <h5 className="slash">/</h5>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Control
                                    name="exp_year"
                                    className="form expire-year" 
                                    placeholder="23"
                                    value={this.state.exp_year}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="form-cvc">
                                    <Form.Label>Security</Form.Label>
                                    <Form.Control
                                    name="cvc"
                                    className="form" 
                                    placeholder="155" 
                                    value={this.state.cvc}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant="default" className="checkout-btn" onClick={this.createSubscription_one}>
                            {this.state.loading === false ? 
                            <h4 className="checkout-btn-text">Subscribe</h4>
                             : <h4 className="checkout-btn-text">Loading...</h4>}
                        </Button>
                        <h4 className="checkout-price-text2">Your subscription will start now</h4>
                        <FaCcDiscover className="card-icons" size={50}/><FaCcMastercard className="card-icons" size={50}/><FaCcStripe className="card-icons" size={50}/><FaCcVisa className="card-icons" size={50}/><FaCcAmex className="last-card-icon" size={50}/>
                    </div>
                </div>
            </div>
             : <div></div>}
            {this.state.sub_show_two === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">
                        <img className="inverted-logo" alt="logo" src={LogoInverse}/>
                        <h4 className="checkout-price-text">Monthly Recurring <HiArrowNarrowRight/> $26</h4>
                    </div>
                    <Button onClick={this.session_Subscription_two} variant="default" className="checkout-close">
                        <BsX size={25}/>
                    </Button>
                    <div className="form-contain">
                        <Form.Group>
                            <Form.Label className="form-title">Card Holder Name</Form.Label>
                            <Form.Control
                            name="cardHolder_two"
                            className="form" 
                            placeholder="Joe Smith" 
                            value={this.state.cardHolder_two}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-title">Card Number</Form.Label>
                            <Form.Control
                            name="cardNumber_two"
                            className="form" 
                            placeholder="7777-7777-7777-7777" 
                            value={this.state.cardNumber_two}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Row className="expire-date">
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label className="form-expire">Expire Date</Form.Label>
                                    <Form.Control
                                    name="exp_month_two"
                                    className="form" 
                                    placeholder="03" 
                                    value={this.state.exp_month_two}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <h5 className="slash">/</h5>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Control
                                    name="exp_year_two"
                                    className="form expire-year" 
                                    placeholder="23"
                                    value={this.state.exp_year_two}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="form-cvc">
                                    <Form.Label>Security</Form.Label>
                                    <Form.Control
                                    name="cvc_two"
                                    className="form" 
                                    placeholder="155" 
                                    value={this.state.cvc_two}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant="default" className="checkout-btn" onClick={this.createSubscription_two}>
                            <h4 className="checkout-btn-text">Subscribe</h4>
                        </Button>
                        <h4 className="checkout-price-text2">Your subscription will start now</h4>
                        <FaCcDiscover className="card-icons" size={50}/><FaCcMastercard className="card-icons" size={50}/><FaCcStripe className="card-icons" size={50}/><FaCcVisa className="card-icons" size={50}/><FaCcAmex className="last-card-icon" size={50}/>
                    </div>
                </div>
            </div>
             : <div></div>}
            {this.state.sub_show_three === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">
                        <img className="inverted-logo" alt="logo" src={LogoInverse}/>
                        <h4 className="checkout-price-text">Monthly Recurring <HiArrowNarrowRight/> $36</h4>
                    </div>
                    <Button onClick={this.session_Subscription_three} variant="default" className="checkout-close">
                        <BsX size={25}/>
                    </Button>
                    <div className="form-contain">
                        <Form.Group>
                            <Form.Label className="form-title">Card Holder Name</Form.Label>
                            <Form.Control
                            name="cardHolder_three"
                            className="form" 
                            placeholder="Joe Smith" 
                            value={this.state.cardHolder_three}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-title">Card Number</Form.Label>
                            <Form.Control
                            name="cardNumber_three"
                            className="form" 
                            placeholder="7777-7777-7777-7777" 
                            value={this.state.cardNumber_three}
                            onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Row className="expire-date">
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Label className="form-expire">Expire Date</Form.Label>
                                    <Form.Control
                                    name="exp_month_three"
                                    className="form" 
                                    placeholder="03" 
                                    value={this.state.exp_month_three}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <h5 className="slash">/</h5>
                            <Col sm={2}>
                                <Form.Group>
                                    <Form.Control
                                    name="exp_year_three"
                                    className="form expire-year" 
                                    placeholder="23"
                                    value={this.state.exp_year_three}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="form-cvc">
                                    <Form.Label>Security</Form.Label>
                                    <Form.Control
                                    name="cvc_three"
                                    className="form" 
                                    placeholder="155" 
                                    value={this.state.cvc_three}
                                    onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant="default" className="checkout-btn" onClick={this.createSubscription_three}>
                            <h4 className="checkout-btn-text">Subscribe</h4>
                        </Button>
                        <h4 className="checkout-price-text2">Your subscription will start now</h4>
                        <FaCcDiscover className="card-icons" size={50}/><FaCcMastercard className="card-icons" size={50}/><FaCcStripe className="card-icons" size={50}/><FaCcVisa className="card-icons" size={50}/><FaCcAmex className="last-card-icon" size={50}/>
                    </div>
                </div>
            </div>
             : <div></div>}


            <Footer/>
        </div>
    )
    }
}


export default Pricing;