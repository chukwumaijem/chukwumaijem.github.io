import React from 'react';

const Header = () =>
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-brand">Software Developer</div>
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="#home">Home</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>;

export default Header;