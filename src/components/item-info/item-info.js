import React from 'react';
import Player from '../player/player';

import './item-info.scss';

const ItemInfo = ({ image, audio, name, species, description }) => {
  return (
    <React.Fragment>
      <div className="item-info__wrapper">
        <img src={image} className="item-info__img" alt="some img"></img>
        <div className="inner-wrapper">
          <h2 className="item-info__title">{name}</h2>
          <p className="item-info__lat">{species}</p>
        </div>
      </div>
      <Player src={audio} />
      <p className="item-info__desc">{description}</p>
    </React.Fragment>
  )
};

export default ItemInfo;