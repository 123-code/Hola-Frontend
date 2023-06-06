import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Nino from '../img1.jpg';
import Nina from '../Img2.jpg';
import Bebe from '../Bebe.jpg';
//import SimpleImageSlider from "react-simple-image-slider";

export default function  ImageSlider (){
    return(
        <>
        <body className=" bg-yellow-500 text-center">
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
         <div>
            <img className="object-scale-down h-47 w-47" src = {Bebe} alt="Niño"/>
            <p className="Trabajo con niños">Trabajo con niños</p>
 
            
        </div>

        <div>
        <img className="object-scale-down h-47 w-47" src={Nina} alt="Niña"/>
        <div><p>Trabajo Con Infantes</p></div>
        
        </div>
    
</Carousel>
</body>
        
        </>
    )
    
     
}