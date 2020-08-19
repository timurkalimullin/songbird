import React from 'react';

import './bird-list.scss';

const BirdList = (props) => {
  const birdList = props.names.map((el, i) => {
    const className = el.checked === 'right' ? 'bird-list__item right' :
      el.checked === 'wrong' ? 'bird-list__item wrong' : 'bird-list__item';
    return (<li key={i}
      onClick={() => props.onBirdSelected(i)}
      className={className}>
      {el.name}
    </li>)
  })
  return (
    <ul className="bird-list">
      {birdList}
    </ul>
  )
}

export default BirdList;