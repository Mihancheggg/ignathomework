const initState: ThemesType = {
    theme: 'some'
};

export type ThemeType = 'dark' | 'red' | 'some'

export type ThemesType = {
    theme: ThemeType
}

export const themeReducer = (state: ThemesType = initState, action: ThemeReducerTypes): ThemesType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};

export type ThemeReducerTypes = ChangeThemeType

type ChangeThemeType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemeType) => {
    return {
        type: 'CHANGE-THEME',
        payload: {theme}
    } as const
};