import '../css/Global.css';
import AboutInfo from './components/AboutInfo';
import AboutSkills from './components/AboutSkills';

function About() {
  return ( 
      <div className='content'>
        <AboutInfo />
        <AboutSkills />
      </div>
  );
}

export default About;
