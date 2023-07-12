import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import usersReducer from './userReducer';
export default combineReducers({ usersReducer, jobReducer });
