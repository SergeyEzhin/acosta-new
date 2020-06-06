import {FETCH_DATA, CLEAR_DATA, SAVE_DATA} from '../types';

const initialState = {
    data: ''
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_DATA:
            return {...state, data: action.payload}
        case SAVE_DATA: 
            return {...state, data: action.payload}
        case CLEAR_DATA: 
            return initialState;
        default:
            return state
    }
}
