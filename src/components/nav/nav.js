import React from 'react';

import './nav.scss';

const Nav = (props) => {
  const navList = props.names.map((name, index) => {
    const className = props.activeNav === name ? " active" : '';
    return <li key={index} className={"nav-list__item" + className}>{name}</li>
  });
  return (
    <React.Fragment>
      <ul className="nav-list">
        {navList}
      </ul>
      <div className="total-score">Score: {props.score}</div>
    </React.Fragment>
  )
};

export default Nav;