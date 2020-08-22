import React from 'react';

import './header.scss';

const Header = (props) => {
  const headerList = props.names.map((name, index) => {
    const className = props.activeHeader === name ? " active" : '';
    return <li key={index} className={"header-list__item" + className}>{name}</li>
  });
  return (
    <React.Fragment>
      <ul className="header-list">
        {headerList}
      </ul>
      <div className="total-score">Score: {props.score}</div>
    </React.Fragment>
  )
}

export default Header;