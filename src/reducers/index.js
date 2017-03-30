import { combineReducers } from 'redux'
import userReducer from './userReducer'


const todoApp = combineReducers({
  userReducer
})

export default todoApp;