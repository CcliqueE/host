import '../css/pronav.css';
import React from 'react'
import axios from 'axios'

import { Button, Row, Col, Form, Card, CardColumns } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiVisaLine } from 'react-icons/ri'
import { FaCcMastercard, FaCcDiscover } from 'react-icons/fa'
import { IoTrashOutline, IoCheckmarkDone } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { BsX } from 'react-icons/bs'
import { SiAmericanexpress } from 'react-icons/si'

class Settings extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            notSign: false,
            addCard: false,
            deleteCard: false,
            cancelSub: false,
            changePlan: false,
            loading: false,
            cardCarry: '',
            cardName: '',
            cardLast4: '' 
        }
        this.signOut = this.signOut.bind(this)
        this.addCard = this.addCard.bind(this)
        this.addCard_session = this.addCard_session.bind(this)
        this.deleteCard = this.deleteCard.bind(this)
        this.deleteCard_session = this.deleteCard_session.bind(this)
        this.cancelSub = this.cancelSub.bind(this)
        this.cancelSub_session = this.cancelSub_session.bind(this)
        this.changePlan = this.changePlan.bind(this)
        this.changePlan_session = this.changePlan_session.bind(this)
    }

    componentDidMount() {
        if (sessionStorage.getItem('bMo') === 'true') {
            const koopa = {
                sub_id: sessionStorage.getItem('koopa')
            }

            axios
            .post('http://localhost:5000/retrieve-card', koopa)
            .then((res) => { this.setState({
                cardCarry: res.data[0],
                cardName: res.data[1],
                cardLast4: res.data[2]
            }) })
            .then(() => { if(this.state.cardCarry === 'Visa') {this.setState({
                cardCarry: <RiVisaLine size={60}/>
            })} else if (this.state.cardCarry === 'MasterCard') {this.setState({
                cardCarry: <FaCcMastercard className="mastercard" size={70}/>
            })} else if (this.state.cardCarry === 'Discover') {this.setState({
                cardCarry: <FaCcDiscover className="mastercard" size={70}/>
            })} else if (this.state.cardCarry === 'American Express') {this.setState({
                cardCarry: <SiAmericanexpress className="american" size={60}/>
            })} else {
                this.setState({ cardCarry: <h4 className="card-fill">Card</h4> })
            }})
            .catch (err => {
                console.error(err)
            })
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addCard_session() {
        if (sessionStorage.getItem('koopa') === 'null') {
            window.location = '/change-plan'
        } else if (this.state.addCard === false) {
            this.setState({ addCard: true })
        } else if (this.state.addCard === true) {
            this.setState({ addCard: false })
        }
    }

    addCard() {
        this.setState({ loading: true })

        const update = {
            sub_id: sessionStorage.getItem('koopa'),
            name: this.state.cardHolder,
            cardNumber: this.state.cardNumber,
            exp_month: this.state.exp_month,
            exp_year: this.state.exp_year,
            cvc: this.state.cvc
        }

        axios
        .post('http://localhost:5000/update-card', update)
        .then((res) => { 
            sessionStorage.setItem('bMo', res.data[4])
            sessionStorage.setItem('cactus', res.data[4])
        })
        .then(() => { window.location.reload() })
        .catch (err => {
            console.error(err)
        })
    }

    deleteCard_session() {
        if (this.state.deleteCard === false) {
            this.setState({ deleteCard: true })
        } else if (this.state.deleteCard === true) {
            this.setState({ deleteCard: false })
        }
    }

    deleteCard() {
        const cancel = {
            sub_id: sessionStorage.getItem('koopa')
        }
        
        axios
        .post('http://localhost:5000/delete-card', cancel)
        .then((res) => { 
            sessionStorage.setItem('bMo', res.data)
            sessionStorage.setItem('cactus', res.data)
        })
        .then((res) => { window.location.reload() })
        .catch (err => {
            console.error(err)
        })
    }

    cancelSub_session() {
        if (this.state.cancelSub === false) {
            this.setState({ cancelSub: true })
        } else if (this.state.cancelSub === true) {
            this.setState({ cancelSub: false })
        }
    }

    cancelSub() {
        const cancel = {
            sub_id: sessionStorage.getItem('koopa')
        }
        
        axios
        .post('http://localhost:5000/delete-card', cancel)
        .then((res) => { 
            sessionStorage.setItem('bMo', res.data)
            sessionStorage.setItem('cactus', res.data)
        })
        .then((res) => { window.location.reload() })
        .catch (err => {
            console.error(err)
        })
    }

    changePlan_session() {
        if (this.state.changePlan === false) {
            this.setState({ changePlan: true })
        } else if (this.state.changePlan === true) {
            this.setState({ changePlan: false })
        }
    }

    changePlan() {

    }

    signOut() {
        if (sessionStorage.getItem('zkShrinks') !== null) {
            sessionStorage.removeItem('zkShrinks')
            sessionStorage.removeItem('koopa')
            sessionStorage.removeItem('cactus')
            sessionStorage.removeItem('bMo')
            window.location = '/'
        } else {
            this.setState({
                notSign: true
            })
        }
    }

    render(){
    return (
        <div className="settings-contain">
{/*  */}
            {sessionStorage.getItem('bMo') === 'true' ?
            <div className="payment-card">
                <div>
                    <h5 className="carrier">{this.state.cardCarry}</h5>
                    <h5 className="card-num">•••• {this.state.cardLast4}</h5>
                </div>
                <h5 className="holder">{this.state.cardName}</h5>
                <Row>
                    <div className="card-text-contain"><MdKeyboardArrowRight className="card-arrow"/>
                        <h5 onClick={this.addCard_session} className="card-text">Change Card</h5>
                    </div>
                    <div className="card-text-contain"><MdKeyboardArrowRight className="card-arrow"/>
                        <h5 onClick={this.cancelSub_session} className="card-text cancel-sub">Cancel Subscription</h5>
                    </div>
                </Row>
                <div className="chg-plan-contain">
                    <h5 onClick={this.changePlan_session} className="chg-plan-text">Change Current Plan</h5>
                </div>
                <div onClick={this.deleteCard_session} className="delete-card-contain">
                    <IoTrashOutline/>
                </div>
            </div>
             : 
            <div className="add-card-contain">
                <Row>
                    <h5 className="add-card-text">No card exists for this account</h5>
                    <Button onClick={this.addCard_session} variant="default" className="add-card-btn">
                        <h5 className="add-card-btn-text">Add Card</h5>
                    </Button>
                </Row>
            </div>}
{/*  */}
            {this.state.cancelSub === true ?
            <div className="cancel-sub-session-contain">
                <div className="cancel-sub-background"></div>
                <div className="cancel-sub-session">
                    <Row>
                        <h5 className="cancel-sub-ques-one">You are about to cancel your Subscription</h5>
                        <h5 className="cancel-sub-ques-two">Are you sure?</h5>
                        <div className="cancel-sub-btn-contain">
                            <Row>
                                <Button onClick={this.cancelSub_session} variant="default" className="cancel-sub-btn-no">
                                    <h5 className="cancel-sub-btn-text-no">No</h5>
                                </Button>
                                <Button onClick={this.cancelSub} variant="default" className="cancel-sub-btn-yes">
                                    <h5 className="cancel-sub-btn-text-yes">Cancel Subscription</h5>
                                </Button>
                            </Row>
                        </div>
                    </Row>
                </div>
            </div>
             : <div></div>
            }
{/*  */}
            {this.state.changePlan === true ?
            <div className="change-plan-contain">
                <div className="change-plan-background"></div>
                <div className="change-plan-session">
                    <div className="change-alert-contain">
                        <div className="change-alert-excl-contain-one"><h5 className="change-alert-excl">!</h5></div>
                        <div className="change-alert-excl-contain-two"><h5 className="change-alert-excl">!</h5></div>
                        <h4 className="change-alert-text-one">Stripe charges the remainder of the existing plan at this date when the subscription renewed</h4>
                    </div>
                    <div className="change-close-contain">
                        <Button onClick={this.changePlan_session} variant="default" className="change-close">
                            <BsX size={25}/>
                        </Button>
                    </div>
                    <CardColumns className="change-plan-cards">
                        <Card className="change-plan">
                            <Card.Body>
                                <Card.Title className="change-plan-title">$18</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <ul>
                                <h2 className="changebul-two">125 Slots</h2>
                                <h2 className="changebul-one"><IoCheckmarkDone/> Info2</h2>
                                <h2 className="changebul-one"><IoCheckmarkDone/> Info3</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info4</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info5</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info6</h2>
                            </ul>
                            <Card.Body>
                                <Button variant="defualt" className="choose-btn change-btn">
                                    <h4 className="choose-btn-txt">Change Plan</h4>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="change-plan change-plan-second">
                            <Card.Body>
                                <Card.Title className="change-plan-title">$26</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <ul>
                                <h2 className="changebul-two">200 Slots</h2>
                                <h2 className="changebul-one"><IoCheckmarkDone/> Info2</h2>
                                <h2 className="changebul-one"><IoCheckmarkDone/> Info3</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info4</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info5</h2>
                                <h2 className="changebul-three"><IoMdClose/> Info6</h2>
                            </ul>
                            <Card.Body>
                                <Button variant="defualt" className="choose-btn  change-btn">
                                    <h4 className="choose-btn-txt">Change Plan</h4>
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
            </div>
             : <div></div>}
{/*  */}
            {this.state.addCard === true ? 
            <div className="update-card-contain">
                <div className="update-card-background"></div>
                <div className="update-card-session-contain">
                    <div className="update-card-form-contain">
                    <Button onClick={this.addCard_session} variant="default" className="update-close">
                        <BsX size={25}/>
                    </Button>
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
                                    <Form.Label className="form-expire-two">Expire Date</Form.Label>
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
                        <Button onClick={this.addCard} type="submit" value="Submit" variant="default" className="update-card-btn">
                            {this.state.loading === false ? 
                            <h5 className="update-card-btn-text">Update Card</h5>
                            : <h5 className="update-card-btn-text">Loading...</h5>}
                        </Button>
                    </div>
                </div>
            </div>
             : <div></div>
            }
{/*  */}
            {this.state.deleteCard === true ? 
            <div className="delete-card-session-contain">
                <div className="delete-card-background"></div>
                <div className="delete-card-session">
                    <Row>
                    <h5 className="delete-card-ques-one">You are about to delete your card</h5>
                    <h5 className="delete-card-ques-two">Are you sure?</h5>
                    <div className="delete-card-btn-contain">
                    <Button onClick={this.deleteCard_session} variant="default" className="delete-card-btn-no">
                        <h5 className="delete-card-btn-text-no">No</h5>
                    </Button>
                    <Button onClick={this.deleteCard} variant="default" className="delete-card-btn-yes">
                        <h5 className="delete-card-btn-text-yes">Delete Card</h5>
                    </Button>
                    </div>
                    </Row>
                </div>
            </div>
             : <div></div>
            }
{/*  */}
            {this.state.addCard === true ? 
            <div className="chg-card-background">
                <div className="chg-card-contain">

                </div>
            </div>
             : <div></div>
            }
{/*  */}
            {this.state.notSign === true ? 
            <div className="notsign-error-text-contain">
                <div className="notsign-error-excl-contain"><h5 className="notsign-error-excl">!</h5></div>
                <div>
                    <h5 className="notsign-error-text">Not signed in</h5>
                </div>
            </div>
             : <div></div>}
{/*  */}
            <Button variant="default" onClick={this.signOut} className="sign-out-btn">
                <h4 className="sign-out-btn-text">Sign Out</h4>
            </Button>

        </div>
    )
    }
}

export default Settings