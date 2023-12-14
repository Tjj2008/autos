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
      
      <img src='https://1.bp.blogspot.com/-XTZt_IRapI0/YHIclsUsdoI/AAAAAAABjK8/hWjSyl0oyn4cNVoE_mfWo-0-0ng47KOMACLcBGAsYHQ/s0/Talleres%2Bde%2BCordoba256x.png'  alt="Logo" className="logo" />
      
      <h1 className="navbar-title">¿No encontras tu modelo?</h1>
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