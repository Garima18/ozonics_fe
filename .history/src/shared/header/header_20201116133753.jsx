import React, { Component } from 'react'
import "./header.scss"

export default class header extends Component {
    render() {
        return (
            <div className="header">
               <a href="/products/"><img className="header-button" src={require("../../images/logo.png")}  alt="logo"/></a> 
                 {/* <button className="header-button">OZONICS   </button> */}
            </div>
           
        )
    }
}
