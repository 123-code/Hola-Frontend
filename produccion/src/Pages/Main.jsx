import React,{useState,useRef,useEffect} from 'react';


import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import ChatBotButton from '../Components/GoToChat';

import Body from './Body.jsx';




const Main = (props)=>{

    return(
        <>

        <Frase/>
        <ImageSlider/>
        <Body/>
       <ChatBotButton/>
     
        
        </>
    )
}

export default Main;
