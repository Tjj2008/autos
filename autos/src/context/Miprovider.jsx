import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [autos, setAutos] = useState([
        {
            id: 1,
            marca: "Peugeot",
            modelo: "208 ",
            imagen: "https://www.peugeotplan.com.ar/pageValue/carModelDetailsImage/422/true",
          
            
        },
        {
            id: 2,
            nombre: "Gastón Benavídez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Benavidez_29-768x1332-removebg-preview.png",
           
           
        },
        {
            id: 3,
            nombre: "Matías Catalán",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Catalan_4-768x1332-removebg-preview.png",
            
           
        },
        {
            id: 4,
            nombre: "Lucas Suárez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Suarez_03-removebg-preview.png",
            
           
        },
        {
            id: 5,
            nombre: "Juan Portillo",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Portillo_28-removebg-preview.png",
            
           
        },
        {
            id: 6,
            nombre: "Ulises Ortegoza",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Ortegoza_30-removebg-preview.png",
            
           
        },
        {
            id: 7,
            nombre: "Rodrigo Villagra",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Villagra_18-removebg-preview.png",
            
           
        },
        {
            id: 8,
            nombre: "Javier Nicolás Vallejo",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Vallejos_20-removebg-preview.png",
            
           
        },
        {
            id: 9,
            nombre: "Rodrigo Garro",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Garro_16-removebg-preview.png",
            
          
        },
        {
            id: 10,
            nombre: "Ramón Sosa Acosta",
            posicion: "Delantero",
            imagen: "../src/assets/WEB_RAMON-SOSA-1-removebg-preview.png",
            
            
        },
        {
            id: 11,
            nombre: "Lautaro Nahuel Bustos",
            posicion: "Delantero",
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