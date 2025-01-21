import '../../css/components/ProjectImage.css';
import upendoImage1 from '../../assets/images/ChancebulonRender0000.webp'

const ProjectImage = ({projectImage}) => {

    return(
        <div id='projectImageContainer'>
            <img id='projectImage' src = {projectImage} alt='Upendo' />
        </div>
    )
}
export default ProjectImage;