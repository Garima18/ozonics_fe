import React from 'react'

export default function otpVerification() {


    return (
        <div>
          
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
             

              {/* <input
                type="mobile_number"
                id="mobile_number"
                placeholder="Enter your mobile number"
              /> */}
            </div>
          </div>
          {/* <div className="login-act">
            <button className="no-bg" onClick={verifyMobile}>
              SendOTP
            </button>
          </div> */}
          <div className="login-act">
            <button className="no-bg" onClick={handleLogInClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  
        </div>
    )
}
