import React from 'react'
import IdleTimer from 'react-idle-timer'
import { useRef } from 'react';

function IdleTimerContainer() {
    const createHistory = require("history").createBrowserHistory;

    const idleTimerRef = useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    let history = createHistory();
    history.push("/");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;  
    alert("You are logged out. Please relogin to your account"); 
    window.localStorage.clear();
    }
    return (
        <div>
            <IdleTimer ref={idleTimerRef} timeout={5**1000} onIdle={onIdle}> </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
