import React, { Component, useState } from 'react'
import { post, baseUrl } from '../../shared/http-service';
import '../userInfo/user.scss';

export default function MailPopup() {

    const [mailPopup, setMailPopup] = useState(false);
    const [emailList, setEmailList] = useState('')
    constructor(props) {
        super(props);
        this.state = {
            mailPopup: false,
            emailList: ''
        };
    }
    sendMail = async () => {
        const response = await post(baseUrl + "sendEmail/", {
            
            emailList: this.state.emailList
        });
        console.log(response);
        this.setState({
            mailPopup: true
        })
        if (response.msg === "SUCCESS") {
            alert("User deleted successfully");
        }
        console.log(this.state.mailPopup);
    }

    updateEmail(evt) {
        this.setState({
            emailList: evt.target.value
        })
    }
    render() {
        return (
            <div>

                {/* {this.state.deletePopup && <Redirect to="/showUsers/" />} */}

                <div className="delete-popup">
                    <div className="delete-popup-inner">
                        <p className="delete-p">Enter Email Id{this.props.fileName} </p>
                        <input type="text" placeholder="Use comma separated for multiple Emails"
                            onChange={evt => this.updateEmail(evt)}
                            value={this.state.emailList} />

                        
                        <div style={{ marginTop: "20px" }}>
                            <button className="delete-button confirm" onClick={this.sendMail.bind(this)} >Send Mail</button>
                        </div>
                    </div>


                </div>

            </div>

        )
    }
}
