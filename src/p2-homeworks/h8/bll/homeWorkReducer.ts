import {UserType} from '../HW8';

type ActionsType = SortActionType | CheckActionType

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let newState = [...state]
                return newState.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            } else if (action.payload === 'down') {
                let newState = [...state]
                return newState.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            } else {
                return state
            }
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}