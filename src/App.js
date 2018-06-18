import React, { Component } from 'react';
import 'toastr/build/toastr.min.css';
import './styles/style.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
        <Header />
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
