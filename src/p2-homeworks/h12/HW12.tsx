import React, {ChangeEvent} from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC, ThemeType} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes: ThemeType[] = ['dark', 'red', 'some'];

function HW12() {
    const theme: ThemeType = useSelector<AppStoreType, ThemeType>((state) => state.themes.theme)

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         dispatch(changeThemeAC(e.currentTarget.value as ThemeType))
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
