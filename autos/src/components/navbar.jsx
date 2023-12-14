import React, { useContext } from "react";
import { Contexto } from "../context/Miprovider";
// Agrega la imagen importada si aún no lo has hecho

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/1865px-Peugeot_Logo.svg.png'  alt="Logo" className="logo" />
      
      <h1 className="navbar-title">Encontra tu modelo aca!</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar modelos..."
            onChange={handleSearch}
          />
          {/* Agrega un icono o botón de búsqueda si es necesario */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;