import '../css/Home.css'
import Carousel from './components/Carousel';
import InfoCards from './components/InfoCards';
import UpArrow from '../assets/images/UpArrow.png';

function Home() {
  return ( 
    <div className="App">
      <div className='content'>
        <Carousel />
        <img id="upArrow" src={UpArrow} alt="Up arrow." />
        <InfoCards />
      </div>
    </div>
  );
}

export default Home;
