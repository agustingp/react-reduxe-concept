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

            <p>
            {this.props.user.name}
            </p>

            </div>

    
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);