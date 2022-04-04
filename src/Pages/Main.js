import React from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
 
const Main = ()=>{
    return(
        <>
        <img className="object-scale-down h-48 w-96 inline-block align-middle" src={Logo} alt="logo"></img>
        <Navbar/>
        <ImageSlider/>

        </>
    )
}

export default Main;

