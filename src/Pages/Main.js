import React from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import TxtCards from '../Components/TxtCards';
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
const Main = (props)=>{
    return(
        <>
         <Header/>
        
        <Frase/>
        
       
        <ImageSlider/>
    

       <div className="bg-green-500">

       <h1> Hola Terapia De Lenguaje </h1>

<p> Especializados en: 
    .....
</p>




<h2> Encuentranos En:</h2>

<ul>


 </ul>
    

        </div> 

     
        
         <Footer/>
        </>
    )
}

export default Main;

