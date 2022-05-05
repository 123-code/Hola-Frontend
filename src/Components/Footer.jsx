import React from 'react';
import Logo from "../Logo.jpg";
import {GoMail} from 'react-icons/go';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import{FaQuestion} from 'react-icons/fa';



 const Footer = ()=>{
     const Icons = [<AiOutlineFacebook/> ,<AiFillGithub/> ,<BsTwitter/>, <GoMail/> ,<BsInstagram onClick={"https://www.instagram.com/holaterapiadelenguaje/?hl=en"}/> ,<FaQuestion/>];
     return(
        <>
        <div className = "bg-gray-100">
        <img className="object-scale-left h-12 w-12" src={Logo} alt="logo"/>
        {Icons.map((Icon,i)=>{
            return(
           <p key={i}>{Icon}</p>)
        }) }
        </div>
         </>   
     )
 }
 export default Footer;
