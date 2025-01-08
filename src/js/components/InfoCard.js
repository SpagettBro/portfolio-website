import '../../css/components/InfoCard.css';

const InfoCard = ({GridPosition, Color}) => {
    // console.log("GridPosition: ", GridPosition);
    // console.log("Color: ", Color);
    return(
        <div className='infoTextContainer'>
            <h2 className={`infoTitle ${Color}`} >WELCOME</h2>
            <p className={`infoText ${GridPosition}`} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}
export default InfoCard;