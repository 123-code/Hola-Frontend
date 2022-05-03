import React from 'react';
import Logo from '../Logo.jpg';

const Header = ()=>{
return(
    <>
    <div className="bg-yellow-500">
    <img className="object-scale-down h-48 w-96 bg-right-top mx-auto" src={Logo} alt="logo"></img>
    </div>
    </>
)
}
export default Header;