import React, { Component } from 'react'
import "./header.scss"
import Logo from ''

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-button" src={require("logo.png")} />
                 {/* <button className="header-button">OZONICS   </button> */}
            </div>
           
        )
    }
}
