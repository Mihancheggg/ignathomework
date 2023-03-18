import React, { useEffect, useState } from 'react';

export const UseEffectTimer = () => {
    const [count, setCount] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        let timerId: NodeJS.Timer
        if(show){
            timerId = setInterval(() => {setCount(prev => prev + 1)},1000)
        }

        return(() => clearInterval(timerId))
    }, [show])

    return (
        <div>
            <hr/>
            <p>{count}</p>
            <button onClick={() => setShow(true)}>Start</button>
            <button onClick={() => setShow(false)}>Stop</button>
        </div>
    );
};