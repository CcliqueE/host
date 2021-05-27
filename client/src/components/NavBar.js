import React from 'react'
import Logo from '../img/rust-logo.png'
import NavProfile from './NavProfile'
import '../css/consistent.css'

import { VscMenu } from 'react-icons/vsc'
import { Navbar, Button } from 'react-bootstrap'

export default class NavBar extends React.Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log()

        return (
            <div>
                <div className="nav-contain">
                <Navbar className="navBar" fixed="top" expand="lg">
                    <Navbar.Brand href="/">
                    <img className="logoImg" alt="logo-img" type="image/png" src={Logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"><VscMenu className="burger"/></Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end" bsPrefix="navbar-collapse" id="collapse">
                        <div className="nav-contain">
                        <a className="Nav" href="/pricing">Pricing</a>
                        <a className="Nav" href="/dashboard">Dashboard</a>
                        <a className="Nav" href="/forum">Forum</a>
                        </div>
                        <hr className="collapse-line" />
                        {sessionStorage.getItem('username') !== null && sessionStorage.getItem('username').includes('') === true ? <NavProfile/>
                         : <Button className="nav-btn sign-btn" href="/register-login" type="submit">Sign In</Button>}
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        )
    }

}