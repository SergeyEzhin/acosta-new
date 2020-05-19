import { LOGIN, LOGOUT, SHOW_ERROR, HIDE_ERROR } from "../types"

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
        case SHOW_ERROR:
            return {...state, errorAuth: true}
        case HIDE_ERROR:
            return {...state, errorAuth: false}
        default:
            return state
    }
}