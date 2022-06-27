import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import{AiFillHome} from 'react-icons/ai';
import{FaQuestion} from 'react-icons/fa';
import{HiUserGroup} from 'react-icons/hi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdToys} from 'react-icons/md';
import Sticky from 'react-stickynode';

 // arreglar para que aparezca static 
export default function Navbar(){

  
return(
        <>



<body>

<nav className = "w-65 h-100 shadow-md bg-white px-3 absolute inset-y-0 left-0 ">

<ul className="py-10">

<div className = "flex space-x-4 py-10">
  <li className="relative">
  <AiFillHome className ='justify-items-start'/>
   <Link to="/" className = "font-mono text-slate-300 pt-6">Inicio</Link>
   
</li>

</div>
 


<div className= "flex space-x-4 py-10">
  <li className='relative'>
  <FaQuestion className='justify-items-start'/>
  <Link to="/foro" className = "font-mono">Foro</Link>
</li>
</div>

<div className= "flex space-x-4 py-10">
<li className="relative">
   <HiUserGroup className='justify-items-start'/>
    <Link to="/nosotros" className = "font-mono">Quienes Somos</Link>
</li>
</div>

<div className= "flex space-x-4 py-10">
  <li className="relative">
   <BsFillTelephoneFill/>
    <Link to="/contacto" className = "font-mono">Contáctanos</Link>
    
</li>
</div>

<div className= "flex space-x-4 py-10">
<li className="relative">
   <MdToys/>
    <Link to="/material" className = "font-mono">Material</Link>
</li>
</div>

</ul>

</nav>
</body>

  </>
    )
}


 