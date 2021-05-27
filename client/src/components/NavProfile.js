import React from 'react'
import '../css/consistent.css'
import ProfileLogo from '../img/user-profile-final.png'

class NavProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.redirect = this.redirect.bind(this) 
    }

    redirect() {
        window.location = '/profile'
    }

    render() {

        return (
            <div>
                <div className="profile-btn" onClick={this.redirect}>
                    <img className="profile-img" src={ProfileLogo} alt="profile"/>
                    <h3 className="profile-name">{sessionStorage.getItem('username')}</h3>
                </div>
            </div>
        )
    }
}

export default NavProfile