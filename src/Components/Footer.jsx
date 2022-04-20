import React from 'react';
import Logo from "../Logo.jpg";
import {GoMail} from 'react-icons/go';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';



 const Footer = ()=>{
     return(
        <>
         <div className = "background-green-50">

         <img className="object-scale-left h-12 w-12" src={Logo} alt="logo"/>

         <div>
          <p> Contáctanos </p>   
         <GoMail/> <BsInstagram/> <AiFillGithub/> <BsTwitter/>
         </div>
         
         </div>
         </>
         
     )
 }
 export default Footer;
