import React from "react";
import './AgregarComment';

const MostrarComment=(props)=>{
   return(
       <>
      <h1 className = "font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
          Preguntas Recientes </h1>

       <h2>{props.comment}</h2>
       </>
   ) 
}
export default MostrarComment;