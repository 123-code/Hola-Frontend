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

  const imageStyle = {
    maxWidth: '800px',
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
        <div>
          <img style={imageStyle} src={Bebe} alt="Niño" />
          <p style={captionStyle}>Trabajo con niños</p>
        </div>

        <div>
          <img style={imageStyle} src={Nina} alt="Niña" />
          <p style={captionStyle}>Trabajo con infantes</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
