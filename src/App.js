import React, { useState } from 'react';
import ReactPlayer from 'react-player'

function App() {

  const [playing, setPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const [player, setPlayer] = useState()


  const handleSeekMouseDown = e => {
    //this.setState({ seeking: true })
  }

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleSeekMouseUp = e => {
    //this.setState({ seeking: false })
    player.seekTo(parseFloat(e.target.value))
  }

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const ref = x => {
    setPlayer(x)
  }

  return (
    <div className="App">
      <ReactPlayer 
        ref = {ref}
        url='./assets/test.mp4' 
        playing = {playing}
         />

      <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>

      <input
        type='range' min={0} max={1} step={0.083333}
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />

    </div>
  );
}

export default App;
