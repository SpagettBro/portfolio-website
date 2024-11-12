import '../../css/components/Carousel.css';
import tvImage from '../../assets/images/CSMTVtemplate.png'
import leftArrow from '../../assets/images/LeftArrow.png'
import rightArrow from '../../assets/images/RightArrow.png'
import projectXImage from '../../assets/images/ChancebulonF.png'

const Carousel = () => {
    return(
        <div id ='carousel'>
            
            <img className='arrows' src = {leftArrow} alt='left arrow' />

            <img id='tvImage' src = {tvImage} alt='Blank tv screen template.' />
            <div id='whiteBackground'></div>
            <img id='projectXImage'  src= {projectXImage} alt="Project X image." />

            <img className='arrows' src = {rightArrow} alt='right arrow' />

        </div>
    )
}
export default Carousel; 