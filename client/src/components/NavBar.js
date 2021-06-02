import React from 'react'
import axios from 'axios'
import Logo from '../img/rust-logo.png'
import ProfileLogo from '../img/user-profile-final.png'
import '../css/consistent.css'

import { VscMenu } from 'react-icons/vsc'
import { Navbar, Button } from 'react-bootstrap'

export default class NavBar extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            id: sessionStorage.getItem('user_id'),
            username: ''
        }
        
        this.redirect = this.redirect.bind(this)
    }

    redirect(event) {
        window.location = '/profile'
        
    }

    componentDidMount() {
        if (sessionStorage.getItem('user_id') !== null) {
        const id = {
            user_id: this.state.id
        }
        axios
        .post('http://localhost:5000/username', id)
        .then((res) => {this.setState({ username: res.data })})
        .then(() => {console.log(this.state.username)})
        
        
        .catch(err => {
            console.error(err)
        })
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
                        {sessionStorage.getItem('user_id') !== null && sessionStorage.getItem('user_id').includes('') === true ? 
                        <div onClick={this.redirect} className="profile-btn" >
                            <img className="profile-img" src={ProfileLogo} alt="profile"/>
                            <h3 className="profile-name">{this.state.username}</h3>
                        </div >
                         : <Button  variant="default" className="nav-btn sign-btn" href="/register-login" type="submit">
                            <h2 className="btn-txt">Sign In</h2>
                        </Button>}
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
        )
    }

}