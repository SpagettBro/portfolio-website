import '../css/Home.css'
import Carousel from './components/Carousel';
import InfoCards from './components/InfoCards';

function Home() {
  return ( 
      <div id='content'>
        <Carousel />
        <InfoCards />
      </div>
  );
}

export default Home;
