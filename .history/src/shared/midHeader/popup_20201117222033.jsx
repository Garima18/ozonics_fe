import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div className="popup">
                    <div className="popup-inner">
                        <button onClick={this.props.closePopup}>close me</button>
                        <div className="popup-header">
                            <img  className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                            <p> Add User</p>
                            <span  onClick={this.props.closePopup}>&times;</span>

                        </div>
                        </div>                
            </div>
        )
    }
}
