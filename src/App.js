import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { Slider, IconButton, InputLabel, Select, MenuItem } from '@material-ui/core';
//import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function App() {

  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [player, setPlayer] = useState();
  const [step, setStep] = useState(5);

  const menuItems = [];

  for(let i=4;i<=10;i++){
    menuItems.push(<MenuItem value = {i}> {i} minutes </MenuItem>);
  }

  const marks = [];

  for(let i=1;i<=(60/step);i++){
    let x = {
      value: i*60*step,
      label: `${i*step} minutes` 
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
    <div style = {{margin: 20}}>
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

      <InputLabel> Steps </InputLabel>
      <Select
        value = {step}
        onChange = {e => {setStep(e.target.value)}} >
          {menuItems}
      </Select>


    </div>
  );
}

export default App;
