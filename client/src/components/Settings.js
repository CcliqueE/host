import '../css/pronav.css';
import React from 'react'
import axios from 'axios'

import { Button, Row, Col, Form } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiVisaLine } from 'react-icons/ri'
import { FaCcMastercard } from 'react-icons/fa'
import { IoTrashOutline } from 'react-icons/io5'
import { BsX } from 'react-icons/bs'

class Settings extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            notSign: false,
            addCard: false,
            deleteCard: false,
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
            })}
            })
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
            window.location = '/pricing'
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
        .then((res) => { window.location.reload() })
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
                <h5 className="carrier">{this.state.cardCarry}</h5>
                <h5 className="card-num">•••• {this.state.cardLast4}</h5>
                <h5 className="holder">{this.state.cardName}</h5>
                <Row>
                <div className="card-text-contain"><MdKeyboardArrowRight className="card-arrow"/><h5 className="card-text">Change Card</h5></div>
                <div className="card-text-contain"><MdKeyboardArrowRight className="card-arrow"/><h5 className="card-text cancel-sub">Cancel Subscription</h5></div>
                </Row>
                <div className="chg-plan-contain"><h5 className="chg-plan-text">Change Current Plan</h5></div>
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
                    <Button onClick={this.addCard} variant="default" className="update-card-btn">
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
                    <h5 className="delete-card-ques">Are you sure?</h5>
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