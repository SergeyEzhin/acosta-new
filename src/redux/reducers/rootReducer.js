import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {authReducer} from './authReducer';
import { dataReducer } from './dataReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    data: dataReducer
});

export default rootReducer;