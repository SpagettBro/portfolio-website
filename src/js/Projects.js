import React, { useState } from "react";
import '../css/Global.css';
import OverviewInfo from './components/OverviewInfo';
import OverviewList from './components/OverviewList';
import AIMImage from '../assets/svgs/AIM-Today-01.svg'
import chanceImage from '../assets/images/ChancebulonF.png'
import upendoImage from '../assets/svgs/Upendo.svg'

function Projects() {

  const projects = [
    {
      id: 1,
      heading: "CLIENT PROJECT: Upendo",
      image: upendoImage,
      overviewHeight: '20vh',
      listHeight: '8vh',
      text: "Discover the mysteries of the alien world. Lorem ipsum dolor sit amet...",
      link: "/personalproject",
      
    },
    {
      id: 2,
      heading: "CLIENT PROJECT: AIM-Today",
      image: AIMImage,
      overviewHeight: '40vh',
      listHeight: '14vh',
      text: "Explore the universe with our astronaut project. Lorem ipsum dolor sit amet...",
      link: "/upendo",
    },
    {
      id: 3,
      heading: "CLIENT PROJECT: CHANCEBULON",
      image: chanceImage,
      overviewHeight: '35vh',
      listHeight: '14vh',
      text: "Dive into the world of Chancebulon, a dice-shaped creature. Lorem ipsum dolor sit amet...",
      link: "/aim-today",
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
