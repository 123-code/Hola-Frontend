import React,{useState,useRef,useEffect} from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TxtCards from '../Components/TxtCards';
import Nina from '../Img2.jpg';
import burbujas from '../burbujas.jpeg';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

 //<TxtCards CardText/>

// json data, will be passed as props to component
const CardText = {
    titles:{
    Title1:"Pregunta en el Foro",
    Title2:"Conoce a Nuestro Equipo ",
    Title3:"Ponte en contacto con Nosotros",
    Title4:"Consulta por nuestro material de venta",
    },
    contents:{
        text1: "Responde a tus dudas relacionadas a la terapia de lenguaje",
        text2: "Conoce a nuestro equipo de profesionales",
        text3: "Contactanos y Agenda una evaluacion!",
        text4: "Encuentra el material que necesites"
    },
    
}
/*Because google.maps.Map requires an Element 
as a constructor parameter,
 useRef is needed to
 maintain a mutable object that will 
 persist for the lifetime of the component */
 const render = (status =  Status)=>{
    return(
        <h1>{status}</h1>
    )
};


const ShowMap = ()=>{
    const [map, setMap] = useState();
    const ref = useRef(null);
    return (
        
useEffect(()=>{
    if(ref.current && !map){
        setMap(new window.google.maps.Map(ref.current, {}));
    }
    
},[ref,map])
    );
    
}


const Main = (props)=>{
    let ciudades = ["Ambato","Riobamba","Toma Terapias Online"];
    let direcciones = ["Calle Sevilla y Vigo","null"];
    return(
        <>
         <Header/>
        
        <Frase/>
        
       
        <ImageSlider/>
    

       <div className="bg-green-500">

       <h1> Hola Terapia De Lenguaje </h1>

<p className = "font-mono"> somos el mejor centro de terapia de lenguaje del centro del pa??s.
</p>

<img className = "object-scale-down h-40 w-40" src={burbujas} alt="burbujas"/>


<h2> Encuentranos En:</h2>



{
    

ciudades.map((ciudades,ciudad)=>{
    
    return(
        <>
        
        <ul>
            
            
            <li key={ciudad}>{ciudades}</li>
           
        </ul>
        </>
    )
})



}

    

        </div> 

     
        
         <Footer/>
        </>
    )
}

export default Main;

