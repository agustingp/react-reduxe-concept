import React from 'react';

export default ({ infoPerfil }) => {
  return (
    <div className="panel-info-perfil">
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Nombre de la ONG </label>
        <input name="name" type="text" defaultValue={ infoPerfil.name } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Tipo </label>
        <input name="type" type="text" defaultValue={ infoPerfil.type } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Teléfono </label>
        <input name="phone" type="text" defaultValue={ infoPerfil.phone } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Email </label>
        <input name="email" type="text" defaultValue={ infoPerfil.email } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Website </label>
        <input name="website" type="text" defaultValue={ infoPerfil.website } size="30" />
      </div>
      <div className="campo-panel-info-perfil">
        <label htmlFor="nombre"> Descripcion </label>
        <textarea name="description" defaultValue={ infoPerfil.description } size="30" />
      </div>
    </div>
)};