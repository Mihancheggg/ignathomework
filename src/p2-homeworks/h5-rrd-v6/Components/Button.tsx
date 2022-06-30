import React from 'react';

type ButtonPropsType = {
    hidden: boolean
    callback: ()=> void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callback}>
            {props.hidden ? 'Show menu' : 'Hide menu'}
        </button>
    );
};