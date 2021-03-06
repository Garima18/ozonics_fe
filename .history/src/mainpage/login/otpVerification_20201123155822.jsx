import React from 'react'
import "./login.scss"

import Header from "../../shared/header/header"
import { post, baseUrl } from "../../shared/http-service";

export default function OtpVerification({mobile_number}) {
    const id = mobile_number.toString();
    console.log(id.substring(id.length - 2));

    const verifyMobile = async () => {
        console.log("phone:"+ mobile_number);
        const otp = document.getElementById("otp").value;
        if (otp === "") alert("Enter your OTP")
        else {
            const response = await post(baseUrl + "verifyOTP", {
                otp
            });
            console.log(response);
            if (response.msg === "SUCCESS")
                alert("Sucessfully sent the otp");
            else alert("Error found");
        }
    };

    return (
        <div>

            <div style={{ backgroundColor: "black" }}>
                <Header />
                <div className="login-dialog-container">
                    <div className="login-dialog">
                    <div className="form">

                        <p className="otp-text">    Enter the OTP received on ******{id.substring(id.length - 3)}
                            </p>
                        <input id="otp" placeholder="OTP" type="text" />
                        </div>
                        <div className="login-act">
                            <button className="no-bg" onClick={verifyMobile}>
                                Verify
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
