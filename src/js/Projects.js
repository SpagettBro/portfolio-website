import React, { useState } from "react";
import '../css/Global.css';
import OverviewInfo from './components/OverviewInfo';
import OverviewList from './components/OverviewList';
import AIMImage from '../assets/svgs/AIM-Today-01.svg'
import chanceImage from '../assets/images/ChancebulonF.webp'
import upendoImage from '../assets/svgs/Upendo.svg'

function Projects() {

  const projects = [
    {
      id: 1,
      heading: "CLIENT PROJECT: Upendo",
      image: upendoImage,
      overviewHeight: '20vh',
      listHeight: '8vh',
      text: "Het eerste client project voor 2ManyDots. In dit project ontwerp en programmeer ik samen in een groep een website op basis van een gekregen brand guide. Doorheen het project leer ik ook op een agile manier te werken doormiddel van de scrum methode.",
      link: "/upendo",
    },
    {
      id: 2,
      heading: "CLIENT PROJECT: AIM-Today",
      image: AIMImage,
      overviewHeight: '40vh',
      listHeight: '14vh',
      text: "Het tweede client project voor 2ManyDots. Tijdens dit project leer ik om een nieuws website te ontwerpen en programmeren op basis van interviews met de doelgroep. Ook leer ik de inhoud van website te vullen door StoryBloks te implementeren.",
      link: "/aim-today",
    },
    {
      id: 3,
      heading: "CLIENT PROJECT: CHANCEBULON",
      image: chanceImage,
      overviewHeight: '35vh',
      listHeight: '14vh',
      text: "Het persoonlijke project van semester 2 a.k.a. Project X. In dit project ging ik te werk in Cinema4D om een animatie te creëren geïnspireerd door 1 van mijn favoriete games.",
      link: "/chancebulon",
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
