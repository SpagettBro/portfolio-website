import '../../css/components/Overview.css';

const Overview = ({ projects, onSelect }) => {
    return (
        <div id="projectList">
          {projects.map((project) => (
            <div
              key={project.id}
              className="listImageContainer"
              onClick={() => onSelect(project)}
            >
              <img
                id={`project${project.id}`}
                className="listImage"
                src={project.image}
                style={{ height: project.listHeight }}
                alt={project.heading}
              />
            </div>
          ))}
        </div>
    )
}
export default Overview;