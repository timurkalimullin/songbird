import React from 'react';

import './item-list.scss';

const ItemList = (props) => {
  const itemList = props.names.map((el, i) => {
    const className = el.checked === 'right' ? 'list-group-item right' :
      el.checked === 'wrong' ? 'list-group-item wrong' : 'list-group-item';
    return (<li key={i}
      onClick={() => props.onItemSelected(i)}
      className={className}>
      <span></span>{el.name}
    </li>)
  });
  return (
    <ul className="list-group col-md-6">
      {itemList}
    </ul>
  )
};

export default ItemList;