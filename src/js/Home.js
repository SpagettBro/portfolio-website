import '../css/Home.css'
import Carousel from './components/Carousel';
import InfoCard from './components/InfoCard';
import MultiColorsLeft from './components/MultiColorsLeft';
import MultiColorsRight from './components/MultiColorsRight';

function Home() {
  return ( 
      <div id='content'>
        <Carousel />
        <div className='infoSection'>
          <MultiColorsLeft />
          <InfoCard GridPosition='right' Color='yellow'/>
        </div>
        <div className='infoSection'>
          <InfoCard GridPosition='left' Color='blue'/>
          <MultiColorsRight/>
        </div>
      </div>
  );
}

export default Home;
