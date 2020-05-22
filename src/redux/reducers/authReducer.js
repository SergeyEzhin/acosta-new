import { LOGIN, LOGOUT, SHOW_ERROR_ALERT, HIDE_ERROR_ALERT, SAVE_AUTH } from "../types"

const initialState = {
    isAuth: false,
    errorAuth: false,
    token: ''
}

export const authReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case LOGIN:
            return {...state, isAuth: true, token: action.payload}
        case LOGOUT:
            return {...state, isAuth: false, token: ''}
        case SHOW_ERROR_ALERT:
            return {...state, errorAuth: true}
        case HIDE_ERROR_ALERT:
            return {...state, errorAuth: false}
        case SAVE_AUTH:
            return {...state, isAuth: true, errorAuth: false, token: action.payload}
        default:
            return state
    }
}