const initState = {
    isLoading: false
}

export type StateType = {
    isLoading: boolean
}

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: StateType = initState, action: LoadingACType): StateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SET-LOADING',
        payload: {
            isLoading
        }
    } as const
}