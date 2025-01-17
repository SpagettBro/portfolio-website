import '../../css/components/InfoCards.css';
import alienImage from '../../assets/images/MetroidVector.webp'

const MultiColorsRight = () => {
    return(
        <div className='imageContainer'>
            <img id='alienImage' src={alienImage} alt="Drawing of a Metroid alien." />
            <div className='darkRectangle2'></div>
            <div id='yellowRectangle2'></div>
            <div id='purpleRectangle2'></div>
            
        </div>
    )
}
export default MultiColorsRight;