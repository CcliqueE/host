import './css/dashboard.css';
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { VscMenu } from 'react-icons/vsc'
import { Tab, Row, Col, Nav } from 'react-bootstrap'

class Dashboard extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            open: false
        }
        this.openNav = this.openNav.bind(this)
    }
    
    openNav() {
        if(this.state.open === false) {
            this.setState({open: true})
        } else if (this.state.open === true) {
            this.setState({open: false})
        }
    }

    render(){
    return (
        <div className="">
            <NavBar/>
            <div className="dashboard-contain">
                
                <Tab.Container  defaultActiveKey="first">
                       <VscMenu size={25} onClick={this.openNav} className="side-nav-burger"/> 
                    {this.state.open === true ? 
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">My Servers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Mods</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col >
                            <Tab.Content>
                                <Tab.Pane eventKey="first">

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                     : <div></div>}
                </Tab.Container>
            </div>
            <Footer/>
        </div>
    )
    }
}

export default Dashboard