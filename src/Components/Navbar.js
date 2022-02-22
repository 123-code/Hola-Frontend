import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go';
import {AiOutlineClose} from 'react-icons/ai';
import SidebarData from './Sidebardata';

//import {Contacto} from '/Pages';
export default function Navbar(){

  const[sidebar,updater]=useState(false);

const showbar = ()=>{
  updater(!sidebar);
}


return(
        <>
<div className="navbar">
<Link to = "#" className="menu-bars"></Link>
<GoThreeBars onClick = {showbar}/>
</div>



  
<nav className={sidebar ? "nav-menu active":"nav-menu"}>
<ul className="nav-menu-items">
  <li className="navbar-toggle">
    <Link to="#" className="menu-bars"><AiOutlineClose/></Link></li>
    {SidebarData.map((item,index)=>{
      return(
        <li key={index} className={item.cName}>
       <Link to={item.path}></Link>
       {item.icon}
        <span>{item.title}</span>
        </li>
      )
    })}
</ul>
</nav>
  </>
    )
}
