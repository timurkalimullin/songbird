import React from 'react';

import './button.scss';

const Button = (props) => {
  const { text, onBtnClick } = props;
  const className = props.isStepEnded ? 'btn btn__next active' : 'btn btn__next';
  return (
    <button onClick={() => onBtnClick()} className={className}>{text}</button>
  )
};

export default Button;