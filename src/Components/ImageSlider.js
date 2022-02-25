import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Nino from '../img1.jpg';
import Nina from '../Img2.jpg';
//import SimpleImageSlider from "react-simple-image-slider";

export default () => (
    <Carousel>
   
        <div>
            <img className="object-scale-down h-50 w-57" src = {Nino} alt="Niño"/>
            <p className="Trabajo con niños">Legend 1</p>

            
        </div>

        <div>
        <img className="object-scale-down h-50 w-57" src={Nina} alt="Niña"/>
        <p className="Trabajo con infantes">Legend 2</p>
        </div>
    
</Carousel>
);
    






