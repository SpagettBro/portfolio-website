import React, { useState } from "react";
import '../css/Global.css';
import OverviewInfo from './components/OverviewInfo';
import OverviewList from './components/OverviewList';
import astronautImage from '../assets/images/CSMAstronautWhiteStroke [Converted].png'
import chanceImage from '../assets/images/ChancebulonF.png'
import alienImage from '../assets/images/MetroidVector.png'

function Projects() {

  const projects = [
    {
      id: 1,
      heading: "CLIENT PROJECT: ASTRONAUT",
      image: astronautImage,
      text: "Explore the universe with our astronaut project. Lorem ipsum dolor sit amet...",
      link: "/upendo",
    },
    {
      id: 2,
      heading: "CLIENT PROJECT: CHANCEBULON",
      image: chanceImage,
      text: "Dive into the world of Chancebulon, a dice-shaped creature. Lorem ipsum dolor sit amet...",
      link: "/aim-today",
    },
    {
      id: 3,
      heading: "CLIENT PROJECT: METROID ALIEN",
      image: alienImage,
      text: "Discover the mysteries of the alien world. Lorem ipsum dolor sit amet...",
      link: "/personalproject",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="content">
      <OverviewInfo project={selectedProject} />
      <OverviewList projects={projects} onSelect={setSelectedProject} />
    </div>
  );
}

export default Projects;
