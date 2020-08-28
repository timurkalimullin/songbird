import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';
class Player extends React.Component {
  render() {
    return (
      <ReactAudioPlayer
        autoPlay
        src={this.props.src}
        showSkipControls={false}
        autoPlay={false}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        ref={this.props.audioRef}
      />
    )
  }
}

export default Player;