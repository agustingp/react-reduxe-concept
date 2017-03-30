import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import './index.css';
import todoApp from './reducers';
import App from './components/App'

const store=createStore(todoApp);


ReactDOM.render(
  <Provider store={store} ><App  /></Provider>,  
  document.getElementById('root')
);
