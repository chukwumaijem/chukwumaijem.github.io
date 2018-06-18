import React from 'react';
import { Container } from 'semantic-ui-react'

const Intro = () =>
  <Container fluid>
    <div id="home" className="intro-image">
      <div className="intro-dim">
        <div className="dev-name">Chukwuma Ezumezu</div>
        <p className="dev-detail">
          FullStack JavaScript developer. My core stack is PREN (Postgres, React, Express, Node), but my experience doesn't end there. I've worked with NoSQL databases(MongoDB, RethinkDb, firebase), some frontend frameworks(Meteor, Angular), and a few other languages(Swift, Python).
        </p>
      </div>
    </div>
  </Container>;

export default Intro;
