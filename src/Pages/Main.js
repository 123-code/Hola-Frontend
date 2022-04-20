import React from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import Footer from '../Components/Footer';
 
// Component de frase 


const Main = ()=>{
    return(
        <>
        
        <img className="object-scale-down h-48 w-96 inline-block align-middle" src={Logo} alt="logo"></img>
        <Frase/>
        <Navbar/>
        <ImageSlider/>
        

        <h1> Hola Terapia De Lenguaje </h1>

        <p> Especializados en: 
            .....
        </p>




        <h2> Encuentranos En:</h2>

        <ul>
            <l1> Ambato </l1>
            <l1> Riobamba </l1>
         </ul>
            
        
         <Footer/>
        </>
    )
}

export default Main;

