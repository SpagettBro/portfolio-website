import '../css/Global.css';
import OverviewInfo from './components/OverviewInfo';
import OverviewList from './components/OverviewList';

function Projects() {
  return ( 
      <div className='content'>
        <OverviewInfo />
        <OverviewList />
      </div>
  );
}

export default Projects;
