import React from 'react'
import TxtCards from './TxtCards';
import CardText from '../CardText.json';

const Frase = ()=>{
    return(
<>
       <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-center ">
          
           <h1 className="font-mono text-6xl subpixel-antialiased text-lime-500"> Recibir Terapia de lenguaje oportunamente puede marcar la diferencia</h1>
           <TxtCards/>     
       </div>
</>
    )}

    export default Frase;