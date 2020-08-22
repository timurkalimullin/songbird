import React from 'react';

import './item-list.scss';

const ItemList = (props) => {
  const itemList = props.names.map((el, i) => {
    const className = el.checked === 'right' ? 'item-list__item right' :
      el.checked === 'wrong' ? 'item-list__item wrong' : 'item-list__item';
    return (<li key={i}
      onClick={() => props.onItemSelected(i)}
      className={className}>
      <span>{"\u2022"}</span>{el.name}
    </li>)
  });
  return (
    <ul className="item-list">
      {itemList}
    </ul>
  )
};

export default ItemList;