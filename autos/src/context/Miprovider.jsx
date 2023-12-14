import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [autos, setAutos] = useState([
        {
            id: 1,
            marca: "Peugeot",
            modelo: "208 ",
            imagen: "../src/assets/peugeot208.jpg",
          
            
        },
        {
            id: 2,
            marca: "Peugeot",
            modelo: "308 ",
            imagen: "../src/assets/peugeot-308.jpg",
           
           
        },
        {
            id: 3,
            marca: "Peugeot",
            modelo: "508 ",
            imagen: "../src/assets/peugeot-508.avif",
            
           
        },
        {
            id: 4,
            marca: "Peugeot",
            modelo: "2008 ",
            imagen: "../src/assets/peugeot2008.jpg",
            
           
        },
        {
            id: 5,
            marca: "Peugeot",
            modelo: "3008",
            imagen: "../src/assets/peugeot3008.jpg",
            
           
        },
        {
            id: 6,
            marca: "Peugeot",
            modelo: "5008",
            imagen: "../src/assets/peugeot5008.jpg",
            
           
        },
        {
            id: 7,
            marca: "Peugeot",
            modelo: "408",
            imagen: "../src/assets/peugeot 408.jpg",
            
           
        },
        {
            id: 8,
            marca: "Javier Nicolás Vallejo",
            modelo: "Delantero",
            imagen: "../src/assets/jugadores-web_Vallejos_20-removebg-preview.png",
            
           
        },
        {
            id: 9,
            marca: "Rodrigo Garro",
            modelo: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Garro_16-removebg-preview.png",
            
          
        },
        {
            id: 10,
            marca: "Ramón Sosa Acosta",
            modelo: "Delantero",
            imagen: "../src/assets/WEB_RAMON-SOSA-1-removebg-preview.png",
            
            
        },
        {
            id: 11,
            marca: "Lautaro Nahuel Bustos",
            modelo: "Delantero",
            imagen: "../src/assets/jugadores-web_Bustos_10-removebg-preview.png",
            
          
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ autos, setAutos, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}