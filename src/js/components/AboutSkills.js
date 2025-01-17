import '../../css/components/About.css';
import linkedinIcon from '../../assets/svgs/linkedin.svg'
import atIcon from '../../assets/svgs/at.svg'

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
                <img className='icons' src={atIcon} alt="email at icon" />
            </div>
        </div>
    )
}
export default AboutSkills;