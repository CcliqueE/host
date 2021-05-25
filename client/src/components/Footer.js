import React from 'react'
import '../css/consistent.css'

import { AiOutlineInfoCircle } from 'react-icons/ai'

export default class Footer extends React.Component {
    constructor (props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="footer-contain">
                <div className="footer-back"></div>
                <div className="footer-100">
                    <h2>Links</h2>
                    <ul className="footer-list">
                        <li><a className="footer-link" href="/">about <AiOutlineInfoCircle/></a></li>
                        <li><a className="footer-link" href="/pricing">pricing</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}