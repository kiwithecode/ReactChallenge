import { combineReducers } from 'redux';
import remindersReducer from './remindersReducer';

const reducers = {
  reminders: remindersReducer
};

export default combineReducers(reducers);
