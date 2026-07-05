import '../css/Global.css'
import ProjectImage from './components/ProjectImage';
import ProjectSidebar from './components/ProjectSidebar';
import personalProjectImage from '../assets/images/ChancebulonRender0000.webp'

function PersonalProject() {
  return ( 
      <div className='content'>
        <ProjectImage projectImage={personalProjectImage}/>
        <ProjectSidebar sideHeader="Personal Project" sideText="Opdrachtgever: <br /><br />
        - 2ManyDots <br /><br />
        Werktijd: <br /><br />
        - 4 Weken <br /><br />
        Gebruikte software: <br /><br />
        - Figma, Next.js, StoryBloks <br /><br />
        Project files: <br /><br />
        - <a href='https://git.fhict.nl/I520564/semester-2-media-individuele-projecten-mga/-/blob/main/Design/ProjectX/ChancebulonVideo1920x1080.mp4?ref_type=heads' target='_blank' rel='noopener noreferrer'>Chancebulon Git Repository</a>" />
      </div>
  );
}

export default PersonalProject;
