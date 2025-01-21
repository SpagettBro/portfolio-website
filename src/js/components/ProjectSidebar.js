import '../../css/components/ProjectSidebar.css';

const ProjectSidebar = ({sideHeader, sideText}) => {
    return(
        <div id='projectSidebar'>
            <h2 id='sidebarHeading'>{sideHeader}</h2>

            <p id='sidebarText' dangerouslySetInnerHTML={{ __html: sideText }}>    
                
            </p>
        </div>
    )
}
export default ProjectSidebar;