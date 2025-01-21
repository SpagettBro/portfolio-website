import '../css/Global.css'
import ProjectImage from './components/ProjectImage';
import ProjectSidebar from './components/ProjectSidebar';
import upendoImage from '../assets/images/UpendoHome.webp'

function Upendo() {
  return ( 
      <div className='content'>
        <ProjectImage projectImage={upendoImage}/>
        <ProjectSidebar sideHeader="Upendo" sideText="Opdrachtgever: <br /><br />
        - 2ManyDots <br /><br />
        Werktijd: <br /><br />
        - 6 weken (3 sprints) <br /><br />
        Gebruikte software: <br /><br />
        - Figma, Next.js <br /><br />
        Project files: <br /><br />
        - <a href='https://github.com/SpagettBro/personal-upendo' target='_blank' rel='noopener noreferrer'>Upendo Git Repository</a>" />
      </div>
  );
}

export default Upendo;
