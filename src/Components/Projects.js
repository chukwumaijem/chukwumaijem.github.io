import React from 'react';
import { Card, Icon, Image, Responsive } from 'semantic-ui-react'

import { projects } from '../lib/projects';

const Project = ({ project: { title, image, description, link, github } }) => {
  return (
    <Card color='brown'>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {
          link && <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon size="big" name="internet explorer" />
          </a>
        }
        {
          github && <a href={github} target="_blank" rel="noopener noreferrer">
            <Icon size="big" name="github" />
          </a>
        }
      </Card.Content>
    </Card>
  );
}

const Projects = () => {
  const projectList = projects.map((project, index) =>
    <Project
      key={index}
      project={project}
    />
  );
  return (
    <div>
      <h2>Projects</h2>
      <Responsive as={Card.Group} itemsPerRow={3} minWidth={650}>
        {projectList}
      </Responsive>
      <Responsive as={Card.Group} itemsPerRow={1} maxWidth={649}>
        {projectList}
      </Responsive>
    </div>
  );
};

export default Projects;
