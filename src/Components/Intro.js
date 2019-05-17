import React from 'react';
import { Container } from 'semantic-ui-react'

const Intro = () =>
  <Container fluid>
    <div className="intro-image">
      <div className="intro-dim">
        <div className="dev-name">Chukwuma Ezumezu</div>
        <p className="dev-detail">
          I'm a fullStack JavaScript developer with three years professional development experience.
          I work mostly with the (P/M)ERN stack (PostgreSQL/MongoDB, React, Express, Node).
        </p>
      </div>
    </div>
  </Container>;

export default Intro;
