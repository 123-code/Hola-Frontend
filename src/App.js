import React from 'react';

// falta todo el css. 
import {
  BrowserRouter as Router,
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
import Navbar from './Components/Navbar';
import { StickyContainer, Sticky } from 'react-sticky';
  
 
// create class component.
export default class App extends React.Component {
  render(){
    return(
      
      <Router>
         <div className="App">
         
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/foro' element={<Foro/>}/> 
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path = '/material' element={<Material/>}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
        
        
        </div>
        <div className="page-body">
        <StickyContainer>
        <Sticky style={{height: '200px', overflow: 'scroll'}} scrollElement={<Navbar/>}>
     <header>
        <Navbar/>
     </header>
         </Sticky>
      
        </StickyContainer>

    
        </div>
      </Router>
      
    )
  }
}
//  <Navbar className ="bottom-0 right-0"/>