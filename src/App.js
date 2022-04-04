

import React from 'react';




import Main from './Pages/Main';


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

class App extends React.Component {
  render() {
    return (
      <Router>
       <div>
         <Main/>
       <Routes>
              <Route path="/" component={Main} exact />
              <Route path="/about" component={Nosotros} />
              <Route path="/foro" component={Foro} />
              <Route path="/contacto" component={Contacto} />
              <Route component={NotFound} />
       </Routes>
       </div>
      </Router>
      
    );
  }
}

export default App;
