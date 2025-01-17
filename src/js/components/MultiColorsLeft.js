import '../../css/components/InfoCards.css';
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke-_Converted_.webp'

const MultiColorsLeft = () => {
    return(
        <div className='imageContainer'>
            <img id='astroImage' src={astronautImage} alt="Drawing of an astronaut in black and white." />
            <div className='darkRectangle'></div>
            <div id='yellowRectangle'></div>
            <div id='purpleRectangle'></div>
        </div>
    )
}
export default MultiColorsLeft;

