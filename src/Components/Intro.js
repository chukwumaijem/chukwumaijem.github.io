import React from 'react';
import { Container } from 'semantic-ui-react'

const Intro = () =>
  <Container fluid>
    <div className="intro-image">
      <div className="intro-dim">
        <div className="dev-name">Chukwuma Ezumezu</div>
        <p className="dev-detail">
          I'm a fullStack JavaScript developer with more than two years professional experience. I work mostly with the PREN stack (Postgres, React, Express, Node).
        </p>
      </div>
    </div>
  </Container>;

export default Intro;
