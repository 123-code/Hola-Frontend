import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Nino from '../img1.jpg';
import Nina from '../Img2.jpg';
//import SimpleImageSlider from "react-simple-image-slider";

export default function  ImageSlider (){
    return(
        <>
        <body className="bg-blue-200 text-center">
            <Carousel showArrows={true} showThumbs={false} showStatus={false}>
         <div>
            <img className="object-scale-down h-45 w-45" src = {Nino} alt="Niño"/>
            <p className="Trabajo con niños">Trabajo con niños</p>
 
            
        </div>

        <div>
        <img className="object-scale-down h-45 w-57" src={Nina} alt="Niña"/>
        <div><p>Trabajo Con Infantes</p></div>
        
        </div>
    
</Carousel>
</body>
        
        </>
    )
    
     
}
    






