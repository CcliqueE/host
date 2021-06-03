import './css/profile.css'
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProEdit from './components/ProEdit'
import Settings from './components/Settings'
import ProfileLogo from './img/user-profile-final.png'

import { HiOutlinePencil } from 'react-icons/hi'
import { Tab, Row, Col, Nav, Figure } from 'react-bootstrap'
 
function Profile() {
    return (
        <div>
            <NavBar/>
            <div className="profile-contain">
            <Tab.Container  defaultActiveKey="first">
                <Row>
                    <Figure>
                        <div className="profile-pic-choose">
                            <Figure.Image
                            className="profile-pic"
                            alt="profile-picture"
                            src={ProfileLogo}
                            />
                            <input type="file" size="10" className="profile-pic-edit"/>
                                <HiOutlinePencil className="pen-icon"/>
                        </div>
                    </Figure>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column profile-nav">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Profile Idk</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Settings</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col >
                    <div className="nav-card">
                    <Tab.Content>
                        
                        <Tab.Pane eventKey="first">
                            <ProEdit/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Settings/>
                        </Tab.Pane>
                        
                    </Tab.Content>
                    </div>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile