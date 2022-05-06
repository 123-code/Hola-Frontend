import React,{useState} from 'react';
import  Navbar  from '../Components/Navbar';
import AgregarComment from '../Components/AgregarComment';
import Lista from '../Components/ListaComentarios';

const Foro = ({match})=>{   
    const [Comment,SetComment] = useState({comments:[]});

    const fetchdata= async ()=>{
        const data = await fetch(`/api/questions/${match.params.id}`);
        const reqbody = await data.json();
        SetComment(reqbody);

    }
    return(
        <>
       
        <h2 className=" font-mono text-center"> Foro Hola Terapia De Lenguaje </h2>
        
        <Navbar/>
        <AgregarComment/>
        <Lista/>
        </>
    )

}
export default Foro;

