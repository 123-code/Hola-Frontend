import React from 'react';


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
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
        
        
        </div>
        <div className="page-body">
       
        </div>
      </Router>
      
    )
  }
}