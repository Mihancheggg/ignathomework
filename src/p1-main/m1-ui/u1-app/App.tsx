import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
import {Provider} from 'react-redux';
import { store } from '../../../p2-homeworks/h10/bll/store';

export function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                <div className={s.header}>React homeworks:</div>
                <hr/>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW5/>
            </div>
        </Provider>

    )
}

