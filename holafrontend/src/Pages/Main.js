import React from 'react';

const Navbar = () =>{
    return(
        
    <ul style = {{'text-align':'left',color:'orange'}}>
        <h3>Inicio</h3>
        <h3>Nosotros</h3>
        <h3>Agendar</h3>
        <h3>Contacto</h3>
    </ul>
    

    )
}

const Main = ()=>{
    return(
        <>
        <h1 style = {{backgroundColor:'green',color:"white"}}> Hola Terapia de lenguaje </h1>
        <h3> Cambiamos Vidas! </h3>
        <Navbar/>
        </>
    )
}

export default Main;