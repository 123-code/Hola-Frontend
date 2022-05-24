import React from 'react';
import Logo from "../Logo.jpg";
import {GoMail} from 'react-icons/go';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import{FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom';



 const Footer = ()=>{
    
     //const names = ["Facebook","Github","Twitter","Mail","Instagram","Ayuda"];
     return(
        <>
        <div className = "bg-gray-100">
        <img className="object-scale-left h-12 w-12" src={Logo} alt="logo"/>
        <div> <AiOutlineFacebook/> . <AiFillGithub/> .<BsTwitter/>.<GoMail/>.<BsInstagram/>.<FaQuestion/> </div>
        </div>
         </>   
     )
 }
 export default Footer;
 
//<div className="flex flex-col justify-center items-center">

const Links = ()=>{
    const names = ["Facebook","Github","Twitter","Mail","Instagram","Ayuda"];
    const url = ["https://www.facebook.com/holaterapiadelenguaje/?hl=en",""];
    return(
        <>
        {names.map((name,index,url)=>{
            return(
                <>
                <Link to = {url} key={index}>{name}</Link>
                </>
            )
        })}
        </>
    )
}