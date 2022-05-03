import React from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
 
// Component de frase 


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

