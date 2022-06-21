import React,{useState} from 'react';
import  Navbar  from '../Components/Navbar';
import AgregarComment from '../Components/AgregarComment';
import Lista from '../Components/ListaComentarios';

const Foro = ({match})=>{   
    let [Comment,SetComment] = useState({comments:[]});

    const fetchdata= async ()=>{
        const data = await fetch(`/api/questions/${match.params.id}`);
        const reqbody = await data.json();
        SetComment(Comment = reqbody);
        console.log(Comment);

    } 

    return(
        <>
       <div className="bg-stone-400">
        <h2 className=" font-mono text-center"> Foro Hola Terapia De Lenguaje </h2>
        
        <Navbar/>
        <AgregarComment/>
    {fetchdata()}
        <Lista/>
        </div>
        </>
    )

}
export default Foro;

