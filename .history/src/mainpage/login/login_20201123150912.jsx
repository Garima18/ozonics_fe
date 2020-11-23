import React, { useState } from 'react'
import "./login.scss"
import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";
import { Redirect } from 'react-router-dom';



export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [phone, setphone] = useState(initialState)

  const handleLogInClick = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // const mobile_number = document.getElementById("mobile_number").value;


    if (username === "" || password === "") { alert("Enter all fields") } else {
      //api is here
      const response = await post(baseUrl + "login/", {
        username,
        password
      });
      console.log(response);
      if (response.msg === "SUCCESS") {setLoggedIn(true);
      console.log(response.phone_num);
      }
      // if (username === "admin" && password === "admin12") setLoggedIn(true);
      else alert("Invalid USername or password");
    }

  };

  


  return (

    <div>
      {!loggedIn && <LoginDialog handleLogInClick={handleLogInClick}  />}
      {/* {loggedIn && <Products />} */}
      {loggedIn && <Redirect to="/products/" />}
    </div>
  )
}


function LoginDialog({ handleLogInClick }) {

  return (

    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div className="login-dialog-container">
        <div className="login-dialog">

          <div className="form">
            <div>
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                id="username"
                placeholder="Username"
              />
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
        
          <div className="login-act">
            <button className="no-bg" onClick={handleLogInClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}