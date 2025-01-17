import '../../css/components/About.css';
import chanceImage from '../../assets/images/ChancebulonF.webp'

const AboutInfo = () => {
    return(
        <div id='about'>
            <h2 id='firstName'>Mark</h2>
            <h2 id='lastName'>Gonzalez Avila</h2>

            <img id='profilePic' src={chanceImage} alt="Mark Gonzalez Avila." />

            <div id='summaryBox'>
                <p id='summary' className='aboutText'>
                Mijn naam is Mark Gonzalez Avila, ik ben 22 jaar en woon in Tilburg. Momenteel studeer ik ICT aan Fontys,
                 waar ik me focus op front-end design en 3D-modellering. Mijn interesse in technologie begon tijdens mijn opleiding ITN in België,
                  waar ik de basis van coderen leerde. Ik heb ervaring met verschillende tools en programmeertalen, waaronder Java, HTML, en Figma.
                   Videogames inspireren mij, vooral door de gedetailleerde omgevingen en karaktermodellen. 
                   In de toekomst wil ik mijn vaardigheden verder ontwikkelen in 3D-modellering en back-end programmering.
                </p>
            </div>
        </div>
    )
}
export default AboutInfo;

