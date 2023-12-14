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
            imagen: "../src/assets/peugeot308.jpg",
           
           
        },
        {
            id: 3,
            marca: "Peugeot",
            modelo: "508 ",
            imagen: "../src/assets/peugeot508.jpg",
            
           
        },
        {
            id: 4,
            marca: "Peugeot",
            modelo: "2008 ",
            imagen: "../src/assets/Peugeot2008.jpg",
            
           
        },
        {
            id: 5,
            marca: "Peugeot",
            modelo: "3008",
            imagen: "../src/assets/Peugeot3008.png",
            
           
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
            imagen: "../src/assets/peugeot_408.jpg",
            
           
        },
      
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ autos, setAutos, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}