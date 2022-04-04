import React,{useState} from 'react';

import { Link } from 'react-router-dom';

import SidebarData from './Sidebardata';
import{AiFillHome} from 'react-icons/ai';
import{FaQuestion} from 'react-icons/fa';
import{HiUserGroup} from 'react-icons/hi';
import {BsFillTelephoneFill} from 'react-icons/bs';

// falta cambiar css aquí
 
export default function Navbar(){

  


return(
        <>


<nav>
<ul>

<div>
  <li className="relative">
  <AiFillHome className ='justify-items-start'/>
   <Link to="/" className = "font-mono text-slate-300 pt-6">Inicio</Link>
   
</li>

</div>
 


<div>
  <li className='relative'>
  <FaQuestion className='justify-items-start'/>
  <Link to="/foro" className = "font-mono">Foro</Link>
</li>
</div>

<div>
<li className="relative">
   <HiUserGroup className='justify-items-start'/>
    <Link to="/nosotros" className = "font-mono">Quienes Somos</Link>
</li>
</div>

<div>
  <li className="relative">
   <BsFillTelephoneFill/>
    <Link to="/contacto" className = "font-mono">Contactanos</Link>
    
</li>
</div>

</ul>

</nav>
  </>
    )
}


 