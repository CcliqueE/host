import './css/pricing.css'
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { IoCheckmarkDone } from "react-icons/io5"
import { IoMdClose } from 'react-icons/io'
import { Card, CardColumns } from 'react-bootstrap'

class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {
    }

    render() {
    return (
        <div className="">
            <NavBar/>
            
            <div className="cards">
            <CardColumns className="pricing-cards">
                <Card className="pricing">
                    <Card.Body>
                        <Card.Title className=" pricing-title">$15</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul>
                        <h2 className="accessbul-two">150 Slots</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
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
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
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
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info2</h2>
                        <h2 className="accessbul-one"><IoCheckmarkDone/> Info3</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info4</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info5</h2>
                        <h2 className="accessbul-three"><IoMdClose/> Info6</h2>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardColumns>
            </div>

            <Footer/>
        </div>
    )
    }
}


export default Pricing;