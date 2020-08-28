import React from 'react';

import './header.scss';
import logo from '../../assets/logo-songbird.png';

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="songbird-logo"></img>
      <div className="total-score">Score: {props.score}</div>
    </div>
  )
}

export default Header;