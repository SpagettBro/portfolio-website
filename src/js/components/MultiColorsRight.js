import '../../css/components/InfoCards.css';
import alienImage from '../../assets/images/MetroidVector.png'

const MultiColorsRight = () => {
    return(
        <div className='imageContainer'>
            <img id='alienImage' src={alienImage} alt="Drawing of a Metroid alien." />
            <div className='darkRectangle2'></div>
            <div id='blueRectangle'></div>
            <div id='orangeRectangle'></div>
            
        </div>
    )
}
export default MultiColorsRight;