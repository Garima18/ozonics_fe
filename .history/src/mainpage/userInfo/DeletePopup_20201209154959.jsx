import React, { Component } from 'react'

export default class DeletePopup extends Component {
    render() {
        return (
            <div className="delete-popup">
                <div className="delete-popup-inner">
                <p className="delete-p"> Please confirm to delete this user</p>
                <div className="popup-button">
                        <button className="delete-button" >Cancel</button>
                        <button className="add-button">Confirm</button>
                    </div>
                </div>
            </div>
        )
    }
}
