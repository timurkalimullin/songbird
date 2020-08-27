import React from 'react';

import './current-item-info.scss';
import Player from '../player/player';

class CurrentItemInfo extends React.Component {
  render() {
    const { rightItem, audioRef } = this.props;
    return (
      <div className="current-item-info">
        <img src={rightItem.image} alt="right-item"></img>
        <div className="current-item-info__wrapper">
          <h2 className="current-item-info__title">{rightItem.name}</h2>
          <Player src={rightItem.audio} audioRef={audioRef} />
        </div>
      </div>
    )
  }
}

export default CurrentItemInfo;