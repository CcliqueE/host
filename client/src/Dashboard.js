import './css/dashboard.css';
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { BsX } from 'react-icons/bs'
import { Tab, Col, Nav, Row, Button } from 'react-bootstrap'

class Dashboard extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            create: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createServer = this.createServer.bind(this)
    }

    handleSubmit() {
        
    }

    createServer() {
        // if (localStorage.getItem('self_serverId') !== '') {
        //     window.location = '/pricing'
        // } else 
        if (this.state.create === false) {
            this.setState({
                create: true 
            })
        } else if (this.state.create === true){
            this.setState({
                create: false
            })
        }
    }

    render(){
    return (
        <div className="dashboard-page-contain">
            <NavBar/>

            <Tab.Container defaultActiveKey="second">
                <Row>
                    <div className="nav-bar-contain">
                        <Col>
                            <div className="nav-bar-pills">
                            <Nav fill className="" variant="pills" >
                                <Nav.Item className="pill-1">
                                    <Nav.Link eventKey="first">Mods</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="pill-2">
                                    <Nav.Link eventKey="second">My Servers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="pill-3">
                                    <Nav.Link eventKey="third">Server Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                        </Col>
                    </div>
                </Row>
                    <Tab.Content>
                        <div className="nav-pages">
                            <Tab.Pane eventKey="first">
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                    <Button variant="default" className="server-create-btn" onClick={this.createServer} type="submit">
                                        <h3 className="server-create-btn-text">Create Server</h3>
                                    </Button>
                                <h5 className="server-subtext">No Server is associated with this account</h5>
                                <h5 className="server-subtext">Create your first</h5>
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                
                            </Tab.Pane>
                        </div>
                    </Tab.Content>
            </Tab.Container>

            {this.state.create === true ? 
            <div className="server-creation-contain">
                <div className="server-creation-background"></div>
                <div className="server-creation-div">
                    <Button variant="default" className="server-creation-btn">
                        <h4 className="server-creation-btn-text">Create</h4>
                    </Button>
                    <Button onClick={this.createServer} variant="default" className="server-creation-btn-close">
                        <BsX size={20}/>
                    </Button>
                </div>
            </div>
            : <div></div>}

            <Footer/>
        </div>
    )
    }
}

export default Dashboard