import React from 'react';
import koshin from '../images/koshin.png';
import syncStore from '../images//book-review.png';
import serviceApi from '../images/book-api.png';
import ludo from '../images/ludo.png';
import timer from '../images/timer.png';
import weatherApp from '../images//weather-app.png';

const projects = [
  {
    title: 'Koshin',
    description: 'A Github client that generates reports using the description of closed PR\'s on a repo.',
    image: koshin,
    link: 'https://koshin.herokuapp.com/'
  },
  {
    title: 'SyncStore',
    description: 'A book review app. Displays a list of books that on click, navigates to show more details on the book.',
    image: syncStore,
    link: 'https://sync-store.herokuapp.com/'
  },
  {
    title: 'Service API',
    description: 'The backend for the SyncStore app. Built with Node.js, Express and MongoDB.',
    image: serviceApi,
    link: 'https://anselm-api.herokuapp.com/'
  },
  {
    title: 'Ludo Game',
    description: 'A ludo game. Built originally on Electron and adapted for web.',
    image: ludo,
    link: ''
  },
  {
    title: 'Timer',
    description: 'A simple digital count down clock. Useful for recording speech/event duration. Provides a summary.',
    image: timer,
    link: 'https://timemaster-staging.herokuapp.com/'
  },
  {
    title: 'Weather App',
    description: 'A Preact weather app. Display the of a city selected from the drop down menu.',
    image: weatherApp,
    link: 'https://infinite-stream-45190.herokuapp.com/'
  },

];

const Project = ({ project: { title, image, description, link } }) => {
  const id = title.split(' ')[0];

  return (
    <div
      className="col-md-4 col-xs-12 col-sm-6"
      style={{ paddingTop: '10px' }}
    >
      <img
        src={image}
        style={{ width: '100%', height: '300px' }}
        alt={title}
      />
      <div id={`${id}`} className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
        {link && <p className="preview"><a href={link} target="_blank">View Website here</a></p>}
      </div>
    </div>)
}

const Projects = () =>
  <div id="projects" className="col-md-12 sub-header">
    <h2>Latest Projects</h2>
    {
      projects.map((project, index) =>
        <Project
          key={index}
          project={project}
        />
      )
    }
  </div>;

export default Projects;
