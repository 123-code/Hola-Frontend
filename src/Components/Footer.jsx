import React from 'react';
import Logo from "../Logo.jpg";
import {GoMail} from 'react-icons/go';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import{FaQuestion} from 'react-icons/fa';



 const Footer = ()=>{
     return(
        <>
         <div className = "background-green-50">

         <img className="object-scale-left h-12 w-12" src={Logo} alt="logo"/>
         <div>
             <FaQuestion/>
             <p> Tienes Dudas sobre la terapia de lenguaje?</p>
             <p> Pregunta en nuestro foro! </p>

         </div>

         <div>
          <p> Contáctanos </p>   
         <GoMail/> <BsInstagram/> <AiFillGithub/> <BsTwitter/>
         </div>
      
         </div>
         </>
         
     )
 }
 export default Footer;
