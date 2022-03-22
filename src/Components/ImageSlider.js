import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Nino from '../img1.jpg';
import Nina from '../Img2.jpg';
//import SimpleImageSlider from "react-simple-image-slider";

export default function  ImageSlider (){
    return(
        <>
        <Carousel showArrows={true} showThumbs={false} showStatus={true}>
         <div>
            <img className="object-scale-down h-45 w-57" src = {Nino} alt="Niño"/>
            <p className="Trabajo con niños">Trabajo con niños</p>
 
            
        </div>

        <div>
        <img className="object-scale-down h-45 w-57" src={Nina} alt="Niña"/>
        <div><p>Trabajo Con Infantes</p></div>
        
        </div>
    
</Carousel>
        </>
    )
    
     
}
    






