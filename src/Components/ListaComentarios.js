import React,{useState,useEffect} from "react";
import axios from 'axios';
import {BiSad} from 'react-icons/bi';
import './AgregarComment';
//import Preguntacontent from './Preguntacontent';


const ListaComentarios = ()=>{
    const [form,setform] =  useState({
        nombre:"",
        pregunta:[],
        
    })
const fetchdata = ()=>{
    axios.get('/api/preguntap')
    .then((response)=>{
        const data = response.data.pregunta
        setform({pregunta:data});
    }).catch((err)=>{
        console.error(err);
    })
}

const showposts = ()=>{
     fetchdata();
    if(form.pregunta.length === 0){
// return err component
    }
    return form.pregunta.map((preg,index)=>(
<div key={index}>
<h1>{form.nombre}</h1>
<h2>{form.pregunta}</h2>
</div>
    ))
}

   return(
    <>
    <div>
    <h1>Posts:</h1>
    </div>

    <div>
        {showposts()}
    </div>
   
    </>
   )
}
export default ListaComentarios;
  

