import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
      <Menu>
        <a href="/" className="class-item">
          Home
        </a>
        <a href="/salads" className="class-item">
          Salads
        </a>
        <a href="/pizzas" className="class-item">
          Pizzas
        </a>
        <a href="/sides" className="class-item">
          Sides
        </a>
        <a href="/desserts" className="class-item">
          Desserts
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="/">
          Settings
        </a> */}
      </Menu>
    </div>
  );
}

export default Sidebar;
