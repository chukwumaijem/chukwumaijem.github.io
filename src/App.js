import React, { Component } from 'react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import './styles/style.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
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