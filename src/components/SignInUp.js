import React from 'react';

import PanelPerfil from './PanelInformacionPerfil';

export default ({ ong, OnSignInUp }) => {
  return (
  <form onSubmit={(e) => {
         e.preventDefault();
         OnSignInUp(e.target);
       }}>
    <PanelPerfil infoPerfil={ ong } />
    <input type="submit" value="Sign-In" />
  </form>
)};
