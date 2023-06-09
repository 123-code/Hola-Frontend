import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {SiEthereum} from 'react-icons/si';
import { BsPhone } from 'react-icons/bs';
import './Footer.css'
//import logo from '../Imgs/logoRB.png'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="footer__container" >

        <div className="footer__column">
          <h4>Nuestras redes</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/terapiadelenguajeambato/?locale=es_LA"><i className="fa fa-facebook"></i> <BsFacebook/> </a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a><FaTwitter/></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a><FaInstagram/></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a><SiEthereum/></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Contáctanos</h4>
          <ul>
          <li><BsPhone/><a style={{color:'#fff'}} href="#">Cel:+593 0998836981</a></li>
          <li> Dirección: Cuidadela España Sevilla y Vigo</li>
          </ul>
        </div>
      </div>


      
      <div className="footer__bottom" >
        <p>© HolaTL 2023</p>
        {/*<img src={logo} alt="ReactBuilders" />*/}

      </div>
    </footer>
  );
};

export default Footer;