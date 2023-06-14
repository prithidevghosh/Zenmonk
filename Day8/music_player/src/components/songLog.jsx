import React, { createContext, useState } from 'react';
import "../styles/songLog.css";
import { tracks } from '../data/tracks';
import Controls from './controls';
import SongDisplay from './songDisplay';
import Video from './video';


export default function SongLog() {

  const [clicked, setClicked] = useState(true);
  const[song,setSong]=useState("");
  function playAudio(song) {
    setSong(song.name);
    setClicked(!clicked);
    const audioEl = document.getElementById(`audio_${song.id}`);
    clicked == true ? audioEl.play() : audioEl.pause();
  }


  return (
    <>
      <Controls clicked={clicked} setClicked={setClicked} />
      <Video/>
      <SongDisplay song={song}/>
      <div className='songLog_container'>
        {tracks.map((song) => (
          <div onClick={(e) => playAudio(song)} className='song' key={song.id}>
            <audio src={song.src} id={`audio_${song.id}`} className="audio_log" />
            <p>{song.name}</p>

            {/* <button onClick={(e) => pauseAudio(e, song)} >pause</button> */}
            <i className="fa-regular fa-star"></i>
          </div>
        ))}
      </div>
    </>

  );
}
