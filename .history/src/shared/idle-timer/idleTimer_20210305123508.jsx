import React from 'react'
import IdleTimer from 'react-idle-timer'

function idleTimer() {
    use
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
