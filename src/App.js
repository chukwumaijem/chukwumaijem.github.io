import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Works />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;