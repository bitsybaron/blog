import {createStore} from 'redux';
import postReducer from './postReducer';

export default createStore(postReducer);