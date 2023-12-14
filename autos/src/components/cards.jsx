// cards.jsx
import React, { useContext } from "react";
import { Contexto } from "../context/Miprovider";

function MyCard() {
    const { autos, setAutos, busqueda } = useContext(Contexto);

    // Filtrar autos según la búsqueda
    const autosFiltrados = autos.filter((auto) =>
        auto.modelo.toLowerCase().includes(busqueda.toLowerCase())
    );

    function handleLike(id) {
        const updatedJugadores = jugadores.map((auto) => {
            if (auto.id === id) {
                return { ...auto, likes: (auto.likes || 0) + 1 };
            }
            return auto;
        });
        setJugadores(updatedJugadores);
    }

    function handleDelete(id) {
        const updatedAutos = autos.filter((auto) => auto.id !== id);
        setAutos(updatedAutos);
    }

    return (
        <div className="card-container">
            {autosFiltrados.map((auto) => (
                <div key={auto.id} className="card">
                    <div className="card-content">
                        <img className="imgCard" src={jugador.imagen} alt={jugador.edad} />
                        <h2>{auto.marca}</h2>
                        <p>modelo: {auto.modelo}</p>  
                    </div>
                    <button className="btnLike" onClick={() => handleLike(auto.id)}>
                        like {auto.likes || 0} 
                    </button>
                    <button className="btnElim" onClick={() => handleDelete(auto.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyCard;