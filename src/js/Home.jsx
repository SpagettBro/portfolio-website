import '../css/Home.css'
import Carousel from './components/Carousel';
import InfoCard from './components/InfoCard';
import MultiColorsLeft from './components/MultiColorsLeft';
import MultiColorsRight from './components/MultiColorsRight';

const text1 = 'Deze site is een verzameling van mijn verschillende media-projecten, waarin ik mijn passie voor design, technologie en creativiteit laat zien. Van 3D-modellen en front-end webdesign tot interactieve applicaties en andere creatieve concepten, elk project vertelt een eigen verhaal. Mijn doel is om innovatieve en visueel aantrekkelijke media te maken die inspireren en indruk maken. Ontdek <a href="/projects" target="_blank" rel="noopener noreferrer">mijn werk</a> en laat je meenemen in mijn wereld van media en design!';
const text2 = 'Mijn naam is Mark Gonzalez Avila, ik ben 22 jaar en woon in Tilburg. Ik studeer ICT aan Fontys, met focus op front-end design en 3D-modellering. Mijn interesse in technologie begon tijdens mijn opleiding ITN in België, waar ik coderen leerde. Ik ben geïnspireerd door videogames, vooral de gedetailleerde omgevingen en karaktermodellen. In de toekomst wil ik me verder ontwikkelen in 3D-modellering en back-end programmering. Wil je meer over mij weten? Bezoek dan mijn <a href="/about" target="_blank" rel="noopener noreferrer">about me</a> page!';

function Home() {
  return ( 
      <div id='content'>
        <Carousel />
        <div className='infoSection'>
          <MultiColorsLeft />
          <InfoCard text={text1} GridPosition='right' Color='yellow'/>
        </div>
        <div className='infoSection'>
          <InfoCard text={text2} GridPosition='left' Color='purple'/>
          <MultiColorsRight/>
        </div>
      </div>
  );
}

export default Home;
