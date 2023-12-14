import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [autos, setAutos] = useState([
        {
            id: 1,
            marca: "Peugeot",
            modelo: "Peugeot 208 ",
            imagen: "../src/assets/peugeot208.jpg",
          
            
        },
        {
            id: 2,
            marca: "Peugeot",
            modelo: "Peugeot 308 ",
            imagen: "../src/assets/peugeot308.jpg",
           
           
        },
        {
            id: 3,
            marca: "Peugeot",
            modelo: "Peugeot 508 ",
            imagen: "../src/assets/peugeot508.jpg",
            
           
        },
        {
            id: 4,
            marca: "Peugeot",
            modelo: "Peugeot 2008 ",
            imagen: "../src/assets/Peugeot2008.jpg",
            
           
        },
        {
            id: 5,
            marca: "Peugeot",
            modelo: "Peugeot 3008",
            imagen: "../src/assets/Peugeot3008.png",
            
           
        },
        {
            id: 6,
            marca: "Peugeot",
            modelo: "Peugeot 5008",
            imagen: "../src/assets/peugeot5008.jpg",
            
           
        },
        {
            id: 7,
            marca: "Peugeot",
            modelo: "Peugeot 408",
            imagen: "../src/assets/peugeot_408.jpg",
            
           
        },
        {
            id: 8,
            marca: "Peugeot 4x4",
            modelo: "Peugeot Landtrek",
            imagen: "../src/assets/peugeotlandtrek.jpg",
            
           
        },
        {
            id: 9,
            marca: "Peugeot",
            modelo: "Peugeot Expert",
            imagen: "../src/assets/peugeotexpert.jpg",
            
           
        },
        {
            id: 10,
            marca: "Mercedes Benz",
            modelo: "Mercedes A200",
            imagen: "../src/assets/MercedesA200.jpg",
            
           
        },
        {
            id: 11,
            marca: "Ford 4x4",
            modelo: "Ford Ranger raptor f150",
            imagen: "../src/assets/raptor.jpg",
            
           
        },
        {
            id: 12,
            marca: "Ford 4x4",
            modelo: "Ford Ranger",
            imagen: "../src/assets/Rangeer.jpg",
            
           
        },
        {
            id: 13,
            marca: "Volkswagen",
            modelo: "Volkswagen Amarok V6",
            imagen: "../src/assets/amarok.jpg",
            
           
        },
        {
            id: 14,
            marca: "Volkswagen",
            modelo: "Volkswagen Vento",
            imagen: "../src/assets/vento.jpg",
            
           
        },
        {
            id: 15,
            marca: "BMW",
            modelo: "BMW X5",
            imagen: "../src/assets/bmwx5.jpg",
            
           
        },
        {
            id: 16,
            marca: "BMW",
            modelo: "BMW M4",
            imagen: "../src/assets/bmwm4.jpg",
            
           
        },
        {
            id: 17,
            marca: "BMW",
            modelo: "BMW X6",
            imagen: "../src/assets/bmwx6.jpg",
            
           
        },
        {
            id: 18,
            marca: "BMW",
            modelo: "BMW X4",
            imagen: "../src/assets/bmwx4.jpg",
            
           
        },
        {
            id: 19,
            marca: "BMW",
            modelo: "BMW X3",
            imagen: "../src/assets/bmwx3.jpg",
            
           
        },
        {
            id: 20,
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