import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    reducer,
    authReducer
})

export default createStore(rootReducer);