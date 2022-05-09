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
     const Icons = [<AiOutlineFacebook/> ,"Facebook" ,<AiFillGithub/> ,"Github",<BsTwitter/>, "Twitter",<GoMail/>,"E-mail" ,<BsInstagram onClick={"https://www.instagram.com/holaterapiadelenguaje/?hl=en"}/>,"Instagram" ,<FaQuestion/> ,"Foro"];
     //const names = ["Facebook","Github","Twitter","Mail","Instagram","Ayuda"];
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