import React, {useState} from 'react';
import {RequestsAPI} from './RequestsAPI';
import {log} from 'util';

export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [answer, setAnswer] = useState<string>('')

    const onClickHandler = () => {
        RequestsAPI.postCheckBox(checked)
            .then(response=> setAnswer(response.data.errorText))
            .catch ((error) => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
                setAnswer(error.message)
        })
    }

    return (
        <div>
            <button onClick={onClickHandler}>Send</button>
            <input type={'checkbox'} checked={checked} onChange={(event)=>setChecked(event.currentTarget.checked)}/>
            <p>{answer}</p>
        </div>
    );
};
