import React from 'react';
import Contacto from 'Pages/Contacto';
import Agendar from 'Pages/Agendar';

export function Navbar(props){
    return(
        <>
        <nav>
<a href = {Contacto}> Contacto </a>
<a href = {Agendar}> Agendar </a>

        </nav>
        </>
    )
}