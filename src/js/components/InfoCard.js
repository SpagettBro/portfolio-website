import '../../css/components/InfoCard.css';

const InfoCard = ({text, GridPosition, Color}) => {
    // console.log("GridPosition: ", GridPosition);
    // console.log("Color: ", Color);
    return(
        <div className='infoTextContainer'>
            <h2 className={`infoTitle ${Color}`} >WELCOME</h2>
            <p id='paragraphText' className={`infoText ${GridPosition}`} 
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    )
}
export default InfoCard;