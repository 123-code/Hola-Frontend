import React,{useState,useRef,useEffect} from 'react';
import  Navbar  from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from '../Logo.jpg';
import Frase from '../Components/Frase';
import Footer from '../Components/Footer';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Body from './Body.tsx';

 //<TxtCards CardText/> 
 
// json data, will be passed as props to component

/*Because google.maps.Map requires an Element 
as a constructor parameter,
 useRef is needed to
 maintain a mutable object that will 
 persist for the lifetime of the component */
 const render = (status =  Status)=>{
    return(
        <h1>{status}</h1>
    )
};


const ShowMap = ()=>{
    const [map, setMap] = useState();
    const ref = useRef(null);
    return (
        
useEffect(()=>{
    if(ref.current && !map){
        setMap(new window.google.maps.Map(ref.current, {}));
    }
    
},[ref,map])
    );
    
}


const Main = (props)=>{

    return(
        <>
        <Navbar/>
        
        
        <Frase/>
        
       
        <ImageSlider/>

         <Footer/>
        </>
    )
}

export default Main;

