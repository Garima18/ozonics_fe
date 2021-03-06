import React from 'react'
import IdleTimer from 'react-idle-timer'
import { useRef } from 'react';

function idleTimer() {
    useRef
    const idleTimerRef =useRef(null);
    const onIdle = ()=>{console.log("it is idle");
    }
    return (
        <div>
            <IdleTimer ref={idleTimerRef} timeout={5*1000} onIdle={onIdle}> </IdleTimer>
        </div>
    )
}

export default idleTimer
