//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Main from './Pages/Main';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Personalized from './Pages/Personalized';
import {ContactForm} from './Components/ContactForm';
import Nosotros from './Pages/Nosotros';
import Material from './Pages/Material';  
import Consultas from './Pages/Consultas';
import Grupales from './Pages/Grupales';
import  CursoVeranoForm  from './Pages/CursoVerano'
import Evaluaciones from './Pages/Evaluaciones';
import ThankYouPage from './Pages/FormSent';
import Chat from './Pages/Chat';
export default class App extends React.Component {
  render(){
    return( 
      <Router>
        <Navbar/>
         <Routes>
         <Route path="/" element={<Main/>} />
          <Route path = '/personalized' element={<Personalized/>}/>
          <Route path = '/contactform' element={<ContactForm/>}/>
          <Route path = '/nosotros' element={<Nosotros/>}/>
          <Route path = '/material' element={<Material/>}/>
          <Route path = '/consultas' element={<Consultas/>}/>
          <Route path="/grupales" element={<Grupales/>}/>
          <Route path="/cursoverano" element={<CursoVeranoForm/>}/>
          <Route path="/evaluaciones" element={<Evaluaciones/>}/>
          <Route path="/thankyoupage" element={<ThankYouPage/>}/>
          <Route path="/chat" element={<Chat/>}/>
         </Routes>
         <Footer/>
      </Router>

    )
  }
  }




