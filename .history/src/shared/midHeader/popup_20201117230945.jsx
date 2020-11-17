import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-header">
                        <img className="popup-img" src={require("../../images/add_user.png")} alt="Add user" />
                        <p> Add User</p>
                        <span onClick={this.props.closePopup}>&times;</span>

                    </div>
                    <div className="add-user-form">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />

                        <label htmlFor="phone_num">Phone Number</label>
                        <input type="text" id="phone_num" />

                        <label for="segment">Segment to be handled</label>
                        
                        <select id="segment">
                            <option value="All">All</option>
                            <option value="canadHR230a">HR230 </option>
                            <option value="usa">HR300</option>
                            <option value="All">Orion</option>
                            <option value="canada">Orion2 </option>
                            <option value="usa">Pulse</option>
                        </select>

                    </div>
                </div>
            </div>
        )
    }
}
