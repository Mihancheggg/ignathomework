import React, { useState } from 'react';

export function Clicker() {
    const [clicks, setClicks] = useState<number>(0);

    let counter = 0

    const numShow = () => {
        return new Promise((resolve, reject) => {
            resolve(counter)
        })
    }

    const onClick = () => {
        setTimeout(() => {
            counter++
            console.log(counter)
            numShow().then(res => console.log(res))
            setClicks(clicks + 1);
        }, 1000);
    };

    return (
        <div>
            <hr/>
            {clicks}
            <button onClick={onClick}>
                Increment
            </button>
        </div>
    );
}