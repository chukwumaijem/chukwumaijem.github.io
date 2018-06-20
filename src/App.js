import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Segment.Group>
          <Segment id="about"><Intro /></Segment>
          <Segment id="projects" textAlign="center" padded="very" tertiary><Projects /></Segment>
          <Segment id="contact"><Contact /></Segment>
        </Segment.Group>
        <Footer />
      </Container>
    );
  }
}

export default App;
