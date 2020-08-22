import React, { createRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';
class Player extends React.Component {
  player = createRef();
  render() {
    return (
      <AudioPlayer
        autoPlay
        src={this.props.src}
        showSkipControls={false}
        autoPlayAfterSrcChange={false}
        autoPlay={false}
      />
    )
  }
}

export default Player;