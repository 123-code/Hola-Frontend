import React,{useState} from 'react';
import axios from 'axios';
import  Navbar  from '../Components/Navbar';
import AgregarComment from '../Components/AgregarComment';
import Lista from '../Components/ListaComentarios';


const Foro = ({match})=>{   
    let [nombre,setnombre] = useState("");
    let [mycomment,setmycomment] = useState("");
    let [Comment,SetComment] = useState({comments:[]});

  
    return(
        <>
       <div className="bg-stone-400">
        <h2 className=" font-mono text-center"> Foro Hola Terapia De Lenguaje </h2>
        
        <Navbar/>
        <AgregarComment/>
        <Lista/>
        </div>
        </>
    )

}
export default Foro;

