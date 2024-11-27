import '../../css/components/Overview.css';
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke [Converted].png'
import chanceImage from '../../assets/images/ChancebulonF.png'
import alienImage from '../../assets/images/MetroidVector.png'

const Overview = () => {
    return(
        <div id='projectList'>
            <img id='project1' className='listImage' src={astronautImage} alt="An astronaut." />
            <img id='project2' className='listImage' src={chanceImage} alt="A dice shaped creature." />
            <img id='project3' className='listImage' src={alienImage} alt="An alien." />
        </div>
    )
}
export default Overview;