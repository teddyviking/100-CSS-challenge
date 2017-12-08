import React from 'react';
import { withStateHandlers } from 'recompose';
import './style.css';

const Challenge001 = ({ opened, toggleOpened }) => (
  <div className="day-002 container">
    <div className={opened ? "close-icon" : "menu-icon"} onClick={toggleOpened}>
      <div className="stroke"></div>
      {/* <div className="stroke"></div>
      <div className="stroke"></div> */}
    </div>
  </div>
);

const enhacer = withStateHandlers({ opened: false }, { toggleOpened: ({ opened }) => () => ({ opened: !opened})})


export default enhacer(Challenge001);
