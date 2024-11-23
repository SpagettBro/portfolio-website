import '../../css/components/PersonalInfo.css';
import chanceImage from '../../assets/images/ChancebulonF.png'
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import whatsappIcon from '../../assets/svgs/whatsapp.svg'
import atIcon from '../../assets/svgs/at.svg'
import instagramIcon from '../../assets/svgs/instagram.svg'

const PersonalInfo = () => {
    return(
        <div id='personalInfo'>
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
            <div id='skills'>
                <h2 id='skillsHeading'>VAARDIGHEDEN</h2>

                <p id='skillsText'>    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    
                </p>

                <div id='iconRow'>
                    <img className='icons' src={linkedinIcon} alt="linkedin icon" />
                    <img className='icons' src={whatsappIcon} alt="whatsapp icon" />
                    <img className='icons' src={atIcon} alt="email at icon" />
                    <img className='icons' src={instagramIcon} alt="instagram icon" />
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;