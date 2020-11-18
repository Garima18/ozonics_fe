import React, { Component } from 'react'
import {  baseUrl } from "../../shared/http-service";
import Popup from "./popup";
import axios from 'axios';
import ListFiles from "../../mainpage/allProducts/listFiles";

export default class midHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showPopup: false,
      showFiles: false,
      dataValues: []
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      showFiles: !this.state.showFiles

    })
  }

  sendquery = async () => {
    this.setState({
      showFiles: !this.state.showFiles
    })

    axios.post(baseUrl+"searchQuery/", 
    {searchStr:this.state.inputValue}, {
      
      }).then(res=>{
        this.setState({
          dataValues: res.data['files']
        })
          console.log("full reponse:"+this.state.dataValues);
          console.log(res.statusText);
      })

  }
  render() {
    return (
      <div>
        <div className="search-bar">
          <input type="text" placeholder="Search here.." name="search"
            onChange={evt => this.updateInputValue(evt)}
            value={this.state.inputValue}
          />
          <button type="submit" onClick={this.sendquery} ><i className="fa fa-search"></i></button>
          {(this.state.showFiles) && <ListFiles dataValues={this.state.dataValues} closeFile ={this.togglePopup.b} />}

        </div>
        <div className="add-user">
          <img className="user-img" src={require("../../images/add_user.png")} alt="Add User" onClick={this.togglePopup.bind(this)} />
          {this.state.showPopup ? <Popup
            closePopup={this.togglePopup.bind(this)}
          /> : null}
          <p>Add User</p>

        </div>

      </div>
    )
   

  }
}
