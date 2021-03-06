import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'
import { baseUrl, get } from '../../shared/http-service'

export default class LoginDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValues: [],
            logintime:''
        };
    }
    componentDidMount = async () => {
        const response = await get(baseUrl + "showLoginInfo/", null);
        console.log(response.data);
        this.setState({
            dataValues: response.data
        })

    }

    dateFormat=(date)=>{
        var date_split = date.split(" ");
        var days = String(date_split[0]).split('-');
        login
    }



    render() {
        return (
            <div className="bg-color">
                <Header />
                <div className="products-outer">
                    <MidHeader />
                    <h2><span>Login Details</span></h2>

                    <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>Timestamp</p>
                            </div>

                        </div>

                        <div>
                            {this.state.dataValues.map((item, index) =>
                                // <div> {item.phone_num} </div>
                                <div className="table-row" key="index">
                                    <div className="table-cell">
                                        <p>{item.username}</p>
                                    </div>

                                    <div className="table-cell">
                                        <p>{item.login_time}</p>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>


                    <a href="/showUsers">
                        <div className="go-to"> <i className="fa fa-long-arrow-left left-arrow"></i>
                            <p style={{ marginLeft: "15px" }}> Edit User</p></div>
                    </a>


                </div>

            </div>
        )
    }
}
