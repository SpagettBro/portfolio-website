import '../css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';

function App() {
  return ( 
  
  <Router>
    <div className="App">
      <Navbar />
      <div id='overlay'></div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  </Router>
    
  );
}

export default App;
