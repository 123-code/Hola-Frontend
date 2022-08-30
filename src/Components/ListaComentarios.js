import React,{useState,useEffect} from "react";
import axios from 'axios';
import {BiSad} from 'react-icons/bi';
import './AgregarComment';
//import Preguntacontent from './Preguntacontent';


const ListaComentarios = ()=>{
    const [preguntas,setpreguntas] = useState([]);


    const fetchdata = async ()=>{
       
        try{
            const response = await axios.get("mongodb://127.0.0.1:27017/foro");
            setpreguntas(response);
        }
        catch(error){
            console.error(error);
        }
    }

    const showpreguntas = ()=>{

            preguntas.map((index,item)=>{
                return(
                    <h3 key={index}>{item}</h3>
                )
             })
          
    }

    useEffect(()=>{
         fetchdata();   
    },[])

    return(
        <>
        {preguntas===""?<BiSad/> : showpreguntas()}
        </>
    )

}
export default ListaComentarios;
  

