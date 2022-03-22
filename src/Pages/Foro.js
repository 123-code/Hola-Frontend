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
        <h1 className="text-center"> Foro </h1>
        <h2 className="text-left"> Preguntas:</h2>
        
        <Navbar/>
        <Lista/>
        <AgregarComment/>

        </>
    )

}
export default Foro;

