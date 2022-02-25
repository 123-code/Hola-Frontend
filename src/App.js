

import Logo from './Logo.jpg';



import Main from './Pages/Main';
import Agendar from './Pages/Agendar';
import ImageSlider  from './Components/ImageSlider';
import  Navbar  from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Foro from './Pages/Foro';

function App() {
  return (
  <div className='navbar'>
    <img className="object-scale-down h-48 w-96 inline-block align-middle" src={Logo} alt="logo"></img>
    <Router>
  
    
    
    
  
   <Navbar/>
   <ImageSlider/>
 
  
   </Router>
   
</div>
  )
}

export default App;
