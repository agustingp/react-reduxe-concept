import React, { Component, PropTypes  } from 'react';
import logo from '../logo.svg';
import {connect} from "react-redux";
import '../App.css';


const App = ({user})=> (<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
            <div>
            <button>Cambiar nombre</button>

            <p>
            {user.name}
            </p>

            </div>

    
      </div>

)


export default App;