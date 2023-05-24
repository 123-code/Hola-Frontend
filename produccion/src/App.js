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


export default class App extends React.Component {
  render(){
    return(
      <Router>
         <Routes>
         <Route path="/" element={<Main/>} />
         </Routes>
      </Router>

    )
  }
  }




