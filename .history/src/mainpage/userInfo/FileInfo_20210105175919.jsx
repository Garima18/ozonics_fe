import React, { Component } from 'react'
import Header from '../../shared/header/header'
import MidHeader from '../../shared/midHeader/midHeader'
import './user.scss'
import { baseUrl, get } from '../../shared/http-service'



export default class FileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValues: [],
            editPopup: false
        };
    }


    componentDidMount = async () => {
        const response = await get(baseUrl + "fileInfo/", null);
        console.log(response.data);
        this.setState({
            dataValues: response.data
        })
    }

    render() {
        return (
            <div className="bg-color">
                <Header />
                <div className="products-outer">
                    <MidHeader />
                    <h2><span>File Details</span></h2>
 <div className="table-box">
                    <table className="">
                    <thead>
                        <tr className="">
                            <th>Username</th>
                            <th>File Name</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.dataValues.map((item, index) => 
                       
                            <tr  className="">
                                <td className="">{item.username}</td>
                                <td className="">{item.file_name}</td>
                                <td className="">
                                <table>
                                    <tr col></tr>
                                </table>
                                </td>
                                {/* </td>{item.category.replaceAll("_",":")}</td> */}
                                <td className="">{item.login_time}</td>
                            </tr>
                        )}
                        </tbody>


                        {/* <tr>name2</tr>
    <tr>name3</tr> */}

                    </table>
                    </div>
                    {/* <div className="table-box">
                        <div className="table-row table-header">
                            <div className="table-cell">
                                <p>Username</p>
                            </div>
                            <div className="table-cell">
                                <p>File Name</p>
                            </div>
                            <div className="table-cell">
                                <p>Category</p>
                            </div>
                            <div className="table-cell">
                                <p>Date</p>
                            </div>
                            <div className="table-cell">
                                <p>Status</p>
                            </div>
                        </div>
                    </div> */}

                    <a href="/showUsers">
                        <div className="go-to"> <i className="fa fa-long-arrow-left left-arrow"></i>
                            <p style={{ marginLeft: "15px" }}> Edit User</p></div>
                    </a>

                </div>

            </div>
        )
    }
}
