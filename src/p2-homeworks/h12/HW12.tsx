import React, {ChangeEvent} from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC, ThemeType} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme: ThemeType = useSelector<AppStoreType, ThemeType>((state) => state.themes.theme)

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.value) {
            case 'dark':
                dispatch(changeThemeAC('dark'));
                break
            case 'red':
                dispatch(changeThemeAC('red'));
                break
            default:
                dispatch(changeThemeAC('some'));
                break
        }
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio name={'themes'} options={themes} onChange={onChangeHandler} value={theme}/>

            <hr/>
        </div>
    );
}

export default HW12;
