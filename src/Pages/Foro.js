import React,{useState} from 'react';
import  Navbar  from './Components/Navbar';


const Foro = ()=>{  
    return(
        <>
        <h1 className="text-center"> Foro </h1>
        <h2 className="text-left"> Preguntas:</h2>
        <textarea className="text-left"></textarea>
        
        <button>Guardar</button>
        </>
    )

}
export default Foro;

