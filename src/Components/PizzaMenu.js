import React from 'react';
import Sidebar from './Sidebar';

function PizzaMenu() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

      <div id="page-wrap">
        <h1>My Pizza Restaurant</h1>
        <h2>Checkout our offerings in the side bar</h2>
      </div>
    </div>
  );
}

export default PizzaMenu;
