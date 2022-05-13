import React from "react";
import './AgregarComment';


const MostrarComment=(props)=>{
    let datos = [];
    // fetchiing data from bakcend to show
   

        fetch("mongodb://localhost:27017/Foro").then(response=> response.json())
    .then(data=> datos.push[data.stringify]
    );
    
    if (datos.length === 0){
        return(
            <>
            <h2>No hay comentarios</h2>
            </>
        )

    }
        
  
else{

    return(
        <>
      
       <h1 className = " font-mono  text-center font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
           Preguntas Recientes </h1>
 
           <div claasName = "questions">
            {datos.map((item,index)=>{ return(
            <>
            <h2 key = {index}> {item.Nombre}</h2>
             <h3 key={index}>{item.Contenido}</h3>   
            </>
            
            
            )})}
            </div>
        <h2>{props.comment}</h2>
        </>
    ) 
}

    

  
}
export default MostrarComment;