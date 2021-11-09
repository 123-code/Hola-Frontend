
import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Preguntas from './Pages/Preguntas';
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Route path = "/" component = {HomePage} exact > </Route>
      <Route path = "/about" component = {AboutPage}> Conócenos </Route>
      <Route path = "/preguntas/:name" component = {Preguntas}>Preguntas</Route>
    </Router>

<HomePage/>
</>
  );
}

export default App;