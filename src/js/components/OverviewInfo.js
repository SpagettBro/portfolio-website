import '../../css/components/Overview.css';
import {Link} from "react-router-dom";

const Overview = ({ project}) => {
    return (
        <div id="projectOverview">
          <h2 className="projectHeading" id="projectHeadingTop">
            {project.heading}
          </h2>
            <div id='overviewImageContainer'>
              <img id="overviewImage" src={project.image} style={{ height: project.overviewHeight }} alt={project.heading} />
            </div>
            <div id='projectTextContainer'>
              <p id="projectText">{project.text}</p>
            </div>
          <Link to={project.link}>
            <h2 className="projectHeading" id="projectHeadingBottom">
              -&gt; PROJECTVERSLAG
            </h2>
          </Link>
        </div>
    ) 
}
export default Overview;