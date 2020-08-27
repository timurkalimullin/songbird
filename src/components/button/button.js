import React from 'react';

import './button.scss';

const Button = (props) => {
  const { text, onBtnClick } = props;
  const className = props.isStepEnded ? 'btn btn__next btn-success' : 'btn btn__next btn-secondary';
  return (
    <button onClick={() => onBtnClick()} className={className}>{text}</button>
  )
};

export default Button;