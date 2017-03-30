import React from 'react';

export default ({ infoPerfil }) => {
  return (
    <div className="panel-info-perfil">
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Nombre de la ONG </label>
        <input type="text" defaultValue={ infoPerfil.name } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Tipo </label>
        <input type="text" defaultValue={ infoPerfil.type } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Teléfono </label>
        <input type="text" defaultValue={ infoPerfil.phone } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Email </label>
        <input type="text" defaultValue={ infoPerfil.email } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Website </label>
        <input type="text" defaultValue={ infoPerfil.website } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Descripcion </label>
        <textarea defaultValue={ infoPerfil.descrription } size="30" />
      </div>
    </div>
)};