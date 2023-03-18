import React, { useEffect, useState } from 'react';

export const TwoTimers = () => {
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)

    useEffect(() => {
        setInterval(() => {
            setCount1(count1 + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setCount2(count2 => count2 + 1)
        }, 1000)
    }, [])


    return (
        <div>
            <hr/>
            <p>Count1:</p>{count1}
            <p>Count2:</p>{count2}
        </div>
    );
};