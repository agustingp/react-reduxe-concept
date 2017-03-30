import React, { Component, PropTypes  } from 'react';
import logo from '../logo.svg';
import {connect} from "react-redux";
import '../App.css';
import PanelInformacionPerfil from'./PanelInformacionPerfil';

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
            <PanelInformacionPerfil infoPerfil={state}/>
    
      </div>

)

let state={
nombre: 'Quiero Ayudar',
tipo: 'Asociación Civil',
telefono: '0303456',
email: 'quiero@ayudar.com',
website: 'www.quieroayudar.com.ar',
descripcion: 'Somos una ONG que quiere ayudar'
}

export default App;