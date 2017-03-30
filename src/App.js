import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from "react-redux";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
            <div>
            <button
             onClick={() => this.props.setName('ticky')}>Cambiar nombre</button>

            <p>
            {this.props.user.name}
            </p>

            </div>

    
      </div>
    );
  }
};