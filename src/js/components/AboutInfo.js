import '../../css/components/PersonalInfo.css';
import chanceImage from '../../assets/images/ChancebulonF.png'

const AboutInfo = () => {
    return(
        <div id='about'>
            <h2 id='firstName'>Mark</h2>
            <h2 id='lastName'>Gonzalez Avila</h2>

            <img id='profilePic' src={chanceImage} alt="Mark Gonzalez Avila." />

            <div id='summaryBox'>
                <p id='summary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}
export default AboutInfo;

