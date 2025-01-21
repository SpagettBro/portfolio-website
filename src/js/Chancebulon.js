import '../css/Global.css'
import ProjectImage from './components/ProjectImage';
import ProjectSidebar from './components/ProjectSidebar';
import upendoImage1 from '../assets/images/ChancebulonRender0000.webp'

function Chancebulon() {
  return ( 
      <div className='content'>
        <ProjectImage projectImage={upendoImage1}/>
        <ProjectSidebar sideHeader="Chancebulon" sideText="Opdrachtgever: <br /><br />
        - Fontys <br /><br />
        Werktijd: <br /><br />
        - 1 Week<br /><br />
        Gebruikte software: <br /><br />
        - Cinema4D <br /><br />
        Project files: <br /><br />
        - <a href='https://git.fhict.nl/I520564/semester-2-media-individuele-projecten-mga/-/blob/main/Design/ProjectX/ChancebulonVideo1920x1080.mp4?ref_type=heads' target='_blank' rel='noopener noreferrer'>Chancebulon Git Repository</a>" />
      </div>
  );
}

export default Chancebulon;
