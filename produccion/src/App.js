import logo from './logo.svg';
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

export default class App extends React.Component {
  render(){
    return(
      <Router>
        <Navbar/>
         <Routes>
         <Route path="/" element={<Main/>} />
          <Route path = '/personalized' element={<Personalized/>}/>
          <Route path = '/contactform' element={<ContactForm/>}/>
         </Routes>
         <Footer/>
      </Router>

    )
  }
  }




