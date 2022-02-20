import logo from './logo.svg';
import './App.css';



import Main from './Pages/Main';
import Agendar from './Pages/Agendar';
import { ImageSlider } from './Components/ImageSlider';
import { Navbar } from './Components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Foro from './Pages/Foro';

function App() {
  return (
   <div>
    <Router>
    <h1> App.js </h1>
    
  
   <Navbar/>
   <Main/>


   </Router>
</div>
  )
}

export default App;
