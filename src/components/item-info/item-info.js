import React from 'react';
import Player from '../player/player';

import './item-info.scss';

const ItemInfo = ({ image, audio, name, species, description }) => {
  return (
    <div className="item-info">
      <img src={image} className="item-info__img" alt="some img"></img>
      <div className="item-info__wrapper">
        <h2 className="item-info__title">{name}</h2>
        <p className="item-info__lat">{species}</p>
        <Player src={audio} />
      </div>
      <p className="item-info__desc">{description}</p>
    </div>
  )
};

export default ItemInfo;