import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class Dashboard extends React.Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render(){
    return (
        <div className="">
            
            <NavBar/>

            {/* End of consistent code */}



            <Footer/>
        </div>
    )
    }
}

export default Dashboard