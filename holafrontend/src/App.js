import logo from './logo.svg';
import './App.css';


import {Main,Navbar} from './Pages';
import Agendar from './Pages/Agendar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar>
    <div className="App">
      <Route path = "/" component = {Main} exact></Route>
      <Route path = "/agendar" component = {Agendar}></Route>
    </div>
    </Navbar>
    </Router>

  );
}

export default App;
