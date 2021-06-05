import axios from 'axios'
import React from 'react'
import '../css/consistent.css'
import ProfileLogo from '../img/user-profile-final.png'

class NavProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.redirect = this.redirect.bind(this)
        this.pullUsername = this.pullUsername.bind(this)
    }

    redirect() {
        window.location = '/profile'
    }

    pullUsername(event) {
        const id = sessionStorage.getItem('id')
        axios.get('/username', id)
        //.then((res) => {this.setState({ username: res.data })})
        .then((res) => {console.log(res)})
        .catch(err => {
            console.error(err)
        })
    }

    render() {

        return (
            <div>
                <div className="profile-btn" onClick={this.redirect}>
                    
                    <img className="profile-img" src={ProfileLogo} alt="profile"/>
                    <h3 className="profile-name">{this.state.username}</h3>
                    <h5>{this.state.username}</h5>
                </div>
            </div>
        )
    }
}

export default NavProfile