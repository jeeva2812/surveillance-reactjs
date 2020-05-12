import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function App() {

  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [player, setPlayer] = useState();

  const marks = [];

  for(let i=1;i<=12;i++){
    let x = {
      value: i*60*5,
      label: `${i*5} minutes` 
    };
    marks.push(x);
  }

  const handleSeekChange = (event, newValue) => {
    setPlayed(newValue)
    player.seekTo(newValue,'seconds')
  }

  const handlePlay = () => {
    setPlaying(true)
  }

  const handlePause = () => {
    setPlaying(false)
  }

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleProgress = state => {
    setPlayed(state.playedSeconds)
  }

  const getTime = x => {
    return `${Math.round(x/60)}`
  }

  const ref = player => {
    setPlayer(player)
  }

  return (
    <div className="App">
      <ReactPlayer 
        ref = {ref}
        url= './assets/test.mp4'
        playing = {playing}
        onPlay={handlePlay}
        onPause={handlePause}
        onProgress= {handleProgress}
         />

      <IconButton onClick={handlePlayPause}>{playing ? <PauseIcon />  : <PlayArrowIcon />}</IconButton>

      <Slider
        value={played}
        max = {3600}
        onChange = {handleSeekChange}
        valueLabelDisplay = "auto"
        valueLabelFormat = {getTime}
        marks = {marks}
      />

    </div>
  );
}

export default App;
