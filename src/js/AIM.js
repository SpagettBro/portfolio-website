import '../css/Global.css'
import ProjectImage from './components/ProjectImage';
import ProjectSidebar from './components/ProjectSidebar';
import AIMImage from '../assets/images/AIMHome.webp'

function AIM() {
  return ( 
      <div className='content'>
        <ProjectImage projectImage={AIMImage}/>
        <ProjectSidebar sideHeader="AIM Today" sideText="Opdrachtgever: <br /><br />
        - 2ManyDots <br /><br />
        Werktijd: <br /><br />
        - 6 Weken (3 sprints)<br /><br />
        Gebruikte software: <br /><br />
        - Figma, Next.js, StoryBloks <br /><br />
        Project files: <br /><br />
        - <a href='https://github.com/SpagettBro/personal-aim-today' target='_blank' rel='noopener noreferrer'>AIM Git Repository</a>" />
      </div>
  );
}

export default AIM;
