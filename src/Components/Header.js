import React from 'react';
import { Menu, Icon, Responsive } from 'semantic-ui-react';

const Header = () =>
  <Responsive minWidth={550}>
    <Menu fixed="top">
      <Menu.Menu position="right" size="huge">
        <Menu.Item name='home'>
          <a href="#about">
            <span className="menu-item">
              About Me <Icon name='home' />
            </span>
          </a>
        </Menu.Item>

        <Menu.Item name='briefcase'>
          <a href="#projects">
            <span className="menu-item">
              Projects <Icon name='briefcase' />
            </span>
          </a>
        </Menu.Item>

        <Menu.Item name='phone-alt'>
          <a href="#contact">
            <span className="menu-item">
              Contact <Icon name='phone' />
            </span>
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Responsive>;

export default Header;
