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
         <div className = "bg-gray-100">

         <img className="object-scale-left h-12 w-12" src={Logo} alt="logo"/>
         <div>
             <FaQuestion/>
             <p className = "font-mono"> Pregunta en nuestro foro! </p>

             <p className = "font-mono"> Contáctanos </p>   
         </div>
          <Icons/>
         </div>
         </>
         
     )
 }
 export default Footer;


 // icons component 
 const Icons = ()=>{
     return(
         <>
         <GoMail/> <BsInstagram onClick={"https://www.instagram.com/holaterapiadelenguaje/?hl=en"}/> <AiFillGithub onClick={"https://github.com/HolaTL"}/> <BsTwitter/> <AiOutlineFacebook/>
         </>
     )
 }