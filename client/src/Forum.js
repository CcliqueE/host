import React from 'react'

import Navbar from './components/NavBar'
import Footer from './components/Footer'

class Forum extends React.Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render(){
    return (
        <div className="forum-contain">
            <Navbar/>


            <Footer/>
        </div>
    )
    }
}

export default Forum
