import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Nina from '../Img2.jpg';
import Bebe from '../Bebe.jpg';

const ImageSlider = () => {
  const carouselStyle = {
    
    backgroundColor: '#ffcc00',
    textAlign: 'center',
    padding: '20px',
   
  };


  const header = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  fontSize: '90pt'
  }

  const ImageContainer ={
    position: 'relative',
    textAlign: 'center',
    marginTop: '0px',
  
  };

  const imageStyle = {
    maxWidth: '700px',
    height: 'auto',
    borderRadius: '10px',
  };

  const captionStyle = {
    color: '#fff',
    fontSize: '16px',
    marginTop: '10px',
  };

  const mediaQueryStyle = `
    @media (max-width: 500px) {
      img {
        max-width: 300px;
      }
    }
  `;

  return (
    <div style={carouselStyle}>
      <style>{mediaQueryStyle}</style>
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        <div style={ImageContainer}>
        <img className="object-scale-down h-47 w-47" src={Bebe} alt="flores" />
          <div style={header}>Cambiamos Vidas</div>
          
        </div>

        <div style={ImageContainer}>
        <img className="object-scale-down h-47 w-47" src={Nina} alt="flores" />
          <div style={header}>Cambiamos Vidas</div>
          
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
