import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './styles/style.css';

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
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    );
  }
}

export default App;
