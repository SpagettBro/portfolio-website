import '../css/Home.css'
import Carousel from './components/Carousel';
import InfoCards from './components/InfoCards';

function Home() {
  return ( 
    <div className="App">
      <div className='content'>
        <Carousel />
        <InfoCards />
      </div>
    </div>
  );
}

export default Home;
