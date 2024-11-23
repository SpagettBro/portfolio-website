import '../css/Upendo.css'
import ProjectImage from './components/ProjectImage';
import ProjectSidebar from './components/ProjectSidebar';

function Upendo() {
  return ( 
    <div className="App">
      <div id='upendoContent'>
        <ProjectImage />
        <ProjectSidebar />
      </div>
    </div>
  );
}

export default Upendo;
