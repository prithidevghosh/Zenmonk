import React, { useState, useEffect } from 'react';
import "../styles/control.css";

export default function Controls(props) {
    const [toggle, setToggle] = useState(props.clicked);
  
    useEffect(() => {
      setToggle(props.clicked);
    }, [props.clicked]);
  
    const handleToggle = () => {
      setToggle(!toggle);
      let icon = document.getElementsByTagName("i")[1];
  
      toggle
        ? (icon.className = "fa-solid fa-play")
        : (icon.className = "fa-solid fa-pause");
  
      props.setClicked(!toggle);
  
      // Pause the audio when toggling off
      if (!toggle) {
        const audioElement = document.getElementById("audio_element");
        audioElement.pause();
      }
    };
  
    return (
      <div className='control_container'>
        <button><i className="fa-solid fa-backward"></i></button>
        <button onClick={handleToggle} className='middle_button'>
          <i className={toggle ? "fa-solid fa-play" : "fa-solid fa-pause"}></i>
        </button>
        <button><i className="fa-solid fa-forward"></i></button>
      </div>
    );
  }
  