import '../../css/components/PersonalInfo.css';
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import whatsappIcon from '../../assets/svgs/whatsapp.svg'
import atIcon from '../../assets/svgs/at.svg'
import instagramIcon from '../../assets/svgs/instagram.svg'

const AboutSkills = () => {
    return(
        <div id='skills'>
            <h2 id='skillsHeading'>VAARDIGHEDEN</h2>

            <p id='skillsText' className='aboutText'>    
                Ervaring met:
                <ul id='skillsText' className='aboutText'>
                    <li>de talen Nederlands en Engels</li>
                    <li>het programmeren in C++/C#/Java/JS/HTML</li>
                    <li>SQL queries</li>
                    <li>ontwerpen in Figma en XD</li>
                    <li>het samenwerken volgens SCRUM</li>
                    <li>de talen Nederlands en Engels</li>
                    <li>de talen Nederlands en Engels</li>
                </ul>
                
            </p>

            <div id='iconRow'>
                <img className='icons' src={linkedinIcon} alt="linkedin icon" />
                <img className='icons' src={whatsappIcon} alt="whatsapp icon" />
                <img className='icons' src={atIcon} alt="email at icon" />
                <img className='icons' src={instagramIcon} alt="instagram icon" />
            </div>
        </div>
    )
}
export default AboutSkills;