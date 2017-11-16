import React from 'react';

const headerPadding = '100px';
const NavLink = ({ icon, id }) =>
  <li>
    <a href={`#${id.toLowerCase()}`} className="nav-item"><i className={`glyphicon glyphicon-${icon}`} style={{ marginRight: '5px' }}></i>{id}</a>
  </li>;

const Header = () =>
  <div className="navbar navbar-custom navbar-fixed-top header-color">
    <div className="container-fluid" style={{ paddingLeft: headerPadding, paddingRight: headerPadding }}>
      <div className="navbar-brand">Software Developer</div>
      <ul className="nav navbar-nav navbar-right">
        <NavLink id="Home" icon="home" />
        <NavLink id="Works" icon="briefcase" />
        <NavLink id="Contact" icon="phone-alt" />
      </ul>
    </div>
  </div>;

export default Header;