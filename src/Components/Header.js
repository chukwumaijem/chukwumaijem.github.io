import React from 'react';

const NavLink = ({ icon, id }) =>
  <li>
    <a href={`#${id.toLowerCase()}`} className="nav-item"><i className={`glyphicon glyphicon-${icon}`} style={{ marginRight: '5px' }}></i>{id}</a>
  </li>;

const Header = () =>
  <nav className="navbar navbar-custom navbar-fixed-top header-bg-color">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar button-collape"></span>
          <span className="icon-bar button-collape"></span>
          <span className="icon-bar button-collape"></span>
        </button>
        <span className="navbar-brand">Software Developer</span>
      </div>
      <div className="navbar-collapse collapse" id="navbar">
        <ul className="nav navbar-nav navbar-right">
          <NavLink id="Home" icon="home" />
          <NavLink id="Works" icon="briefcase" />
          <NavLink id="Contact" icon="phone-alt" />
        </ul>
      </div>
    </div>
  </nav>;

export default Header;