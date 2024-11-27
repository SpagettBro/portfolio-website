import '../css/Global.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Upendo from './Upendo.js';

function App() {
  return ( 
  
  <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/upendo" element={<Upendo />} />
        </Routes>
    </div>
  </Router>
    
  );
}

export default App;
