import '../../css/components/Overview.css';
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke [Converted].png'
import chanceImage from '../../assets/images/ChancebulonF.png'
import alienImage from '../../assets/images/MetroidVector.png'

const Overview = () => {
    return(
        <div id ='menu'>
            <div id='projectOverview'>
                <h2 className='projectHeading' id='projectHeadingTop'>CLIENT PROJECT</h2>
                    <div id="projectView">
                        <img id='projectImage' src={astronautImage} alt="An astronaut." />
                        <p id='projectText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                <h2 className='projectHeading' id='projectHeadingBottom'> -&gt; PROJECTVERSLAG</h2>
            </div>

            <div id='projectList'>
                <img id='project1' className='listImage' src={astronautImage} alt="An astronaut." />
                <img id='project2' className='listImage' src={chanceImage} alt="A dice shaped creature." />
                <img id='project3' className='listImage' src={alienImage} alt="An alien." />
            </div>
        </div>
    )
}
export default Overview;