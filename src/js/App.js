import '../css/Global.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.jsx';
import About from './About.js';
import Upendo from './Upendo.js';
import Chancebulon from './Chancebulon.js';
import AIM from './AIM.js';
import PersonalProject from './PersonalProject.js';

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
          <Route path="/aim-today" element={<AIM />} />
          <Route path="/personal-project" element={<PersonalProject />} />
          <Route path="/chancebulon" element={<Chancebulon />} />
        </Routes>
    </div>
  </Router>
    
  );
}

export default App;
