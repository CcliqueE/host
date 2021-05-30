import './css/pricing.css'
import './css/checkout.css'
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { IoCheckmarkDone } from "react-icons/io5"
import { IoMdClose } from 'react-icons/io'
import { BsX } from 'react-icons/bs'
import { Card, CardColumns, Button } from 'react-bootstrap'

class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sub_show: false,
            price: ''
        }
        this.createSubsciption = this.createSubsciption.bind(this)
    }
    
    componentDidMount() {
    }

    createSubsciption() {
        if (this.state.sub_show === false) {
            this.setState({ sub_show: true })
            this.setState({ price: '' })
        } else if (this.state.sub_show === true) {
            this.setState({ sub_show: false })
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
                        <Button onClick={this.createSubsciption} variant="defualt" className="choose-btn">
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
                        <Button onClick={this.createSubsciption} variant="defualt" className="choose-btn">
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
                        <Button onClick={this.createSubsciption} variant="defualt" className="choose-btn">
                            <h4 className="choose-btn-txt">Purchase</h4>
                        </Button>
                    </Card.Body>
                </Card>
            </CardColumns>
            </div>
            {this.state.sub_show === true ? 
            <div className="checkout-contain">
                <div className="checkout-background"></div>
                <div className="checkout-session">
                    <div className="checkout-price">

                    </div>
                    <Button onClick={this.createSubsciption} variant="default" className="checkout-close">
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