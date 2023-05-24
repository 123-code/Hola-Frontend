import React from 'react';

// falta todo el css. 
import {
  HashRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Foro from './Pages/Foro';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import NotFound from './Pages/NotFound';
import Main from './Pages/Main';
import Material from './Pages/Material';
import Personalized from './Pages/Personalized';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { StickyContainer, Sticky } from 'react-sticky';
import {ContactForm} from './Components/ContactForm';
import Grupales from './Pages/Grupales';
import Evaluaciones from './Pages/Evaluaciones';
   
  
// create class component.
export default class App extends React.Component {
  render(){
    return(
      
      <Router basename="/React">
         <Navbar/>

         <div className="App">
         
        <Routes>
        
          <Route path='/' element={<Main/>}/>
          <Route path='/foro' element={<Foro/>}/> 
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path = '/material' element={<Material/>}/>
          <Route path = '/personalized' element={<Personalized/>}/>
          <Route path = '/contactform' element={<ContactForm/>}/>
          <Route path = '/grupales' element={<Grupales/>}/>
          <Route path = '/evaluaciones' element={<Evaluaciones/>}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
        </div>

        <Footer/>
      </Router>
      
    )
  }
}
//  <Navbar className ="bottom-0 right-0"/>