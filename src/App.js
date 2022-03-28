

import Logo from './Logo.jpg';



import Main from './Pages/Main';

import ImageSlider  from './Components/ImageSlider';
import  Navbar  from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Foro from './Pages/Foro';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import NotFound from './Pages/NotFound';

function App() {
  return (
  <div className='navbar'>
    <img className="object-scale-down h-48 w-96 inline-block align-middle" src={Logo} alt="logo"></img>



<Routes>
<Navbar/>
<ImageSlider/>
   <Route  exact path= "/" element={<App/>}/>
   <Route path = "/foro" element={<Foro/>}/>
    <Route path = "/nosotros" element={<Nosotros/>}/>
    <Route path = "/contacto" element={<Contacto/>}/>
    <Route element={<NotFound/>}/>
</Routes>
   




 </div>
  
   
  
  
 
   
     
    
  
  
 
  
  
   

  )
}

export default App;
