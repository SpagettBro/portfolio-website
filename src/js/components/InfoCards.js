import '../../css/components/InfoCards.css';
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke [Converted].png'
import alienImage from '../../assets/images/MetroidVector.png'

const InfoCards = () => {
    return(

        <div>
            <div className ='infoSection'>
                <div className='imageContainer'>
                    <img id='astroImage' src={astronautImage} alt="Drawing of an astronaut in black and white." />
                    <div className='darkRectangle'></div>
                    <div id='yellowRectangle'></div>
                    <div id='purpleRectangle'></div>
                    
                </div>

                <div className='infoTextContainer'>
                    <h2 className='infoTitle' id='titleYellow'>WELCOME</h2>
                    <p className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className ='infoSection'>
                <div className='infoTextContainer'>
                    <h2 className='infoTitle' id='titleBlue'>WELCOME</h2>
                    <p className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className='imageContainer'>
                    <img id='alienImage' src={alienImage} alt="Drawing of a Metroid alien." />
                    <div className='darkRectangle2'></div>
                    <div id='blueRectangle'></div>
                    <div id='orangeRectangle'></div>
                    
                </div>
            </div>
        </div>
        

        
    )
}
export default InfoCards;