import React, { useState, Component } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import { Redirect } from 'react-router-dom';

export default class DeletePopup extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            deletePopup: false
        };
    }
    deleteUser = async () => {
        const response = await post(baseUrl + "deleteUser/", {
            username: this.props.username
        });
        console.log(response);
        if (response.msg === "SUCCESS") {
                 alert("User deleted successfully");
            // console.log("delete" + loggedIn);
            this.setState({
                deletePopup:true
            })
        }
    }
    render() {
    return (
        <div>
            
            {this.deletePopup && <Redirect to="/showUsers" />}

            <div className="delete-popup">
                <div className="delete-popup-inner">
                <h3>Deleted: {loggedIn}</h3>
                    <p className="delete-p"> Deleting {username}, please confirm!</p>
                   
                    <div className="popup-button">
                        <a href="/showUsers"><button className="delete-button cancel" >Cancel</button></a>
                        <button className="delete-button confirm" onClick={deleteUser}>Confirm</button>
                    </div>
                </div>


            </div>
        </div>
    )
    }
}
