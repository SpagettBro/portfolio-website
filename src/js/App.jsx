import '../css/Global.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Upendo from './Upendo.jsx';
import Chancebulon from './Chancebulon.jsx';
import AIM from './AIM.jsx';
import PersonalProject from './PersonalProject.jsx';

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
