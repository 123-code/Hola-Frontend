import React,{useState} from 'react';
import  Navbar  from './Components/Navbar';
import  Comment from './Components/AgregarComment';


const Foro = ()=>{  
    return(
        <>
        <h1 className="text-center"> Foro </h1>
        <h2 className="text-left"> Preguntas:</h2>
        
        
        <Comment/>
        </>
    )

}
export default Foro;

