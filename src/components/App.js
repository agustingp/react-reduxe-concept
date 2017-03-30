import React, { Component, PropTypes  } from 'react';
import logo from '../logo.svg';
import {connect} from "react-redux";
import '../App.css';
import SignIn from '../containers/ong.container';

const App = ({user})=> (<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
            <SignIn />
    
      </div>

)

export default App;