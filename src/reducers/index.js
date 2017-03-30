import { combineReducers } from 'redux'
import userReducer from './userReducer'
import ongReducer from './ongReducer'


const todoApp = combineReducers({
  userReducer,
  ongReducer
})

export default todoApp;