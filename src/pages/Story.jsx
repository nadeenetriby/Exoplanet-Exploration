import BG from '../assets/2.jpg';
import styles from './story.module.css';
import { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { paragraph, nextBtnStyle, challengesBtnStyle, skipBtnStyle } from '../data/data.js';
import Chatbot from './Chatbot.jsx';
import { useNavigate } from "react-router-dom";

// Centralized audio files
const audioFiles = [
  '../audio/sound1.mp3',
  '../audio/sound2.mp3',
  '../audio/sound3.mp3',
  '../audio/sound4.mp3',
  '../audio/sound5.mp3'
];

export default function Story() {
  const [isShow, setShow] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [index, setIndex] = useState(0);
  const [isShowBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();
  
  // Create an audio ref to persist the object across renders
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3500);
    playAudio(0); // Play the first audio when the component mounts
  }, []); 

  function goToChallenge() {
    console.log("Navigating to challenges");
    navigate("/challenges");
  }

  const handleZoomIn = () => {
    if (index === paragraph.length - 1) {
      setShowBtn(true);
      return;
    }
    setShow(false); // Hide the content before zooming in
    setZoomIn(true);
    setIndex((old) => old + 1);
    handleTime(() => {
      setShow(true); // Show the content again after zooming in
      playAudio(index + 1); // Play the audio after zoom-in completes
    }, 2000); // Adjust this delay to match your zoom-in effect's duration
  };

  const playAudio = (index) => {
    if (audioRef.current) {
      audioRef.current.src = audioFiles[index]; // Set the new audio source
      audioRef.current.play().catch(error => {
        console.error("Error playing audio: ", error); // Handle audio playback error
      });
    }
  };

  const handleZoomOut = () => {
    setShow(false); // Hide the content before zooming out
    setZoomIn(false);
    setTimeout(() => {
      handleZoomIn(); // Trigger zoom in after zooming out completes
    }, 2000); // Adjust this delay to match your zoom-out effect's duration
  };

  function handleTime(callback, millsec = 3000) {
    setTimeout(() => {
      callback(); // Call the provided callback function after the timeout
    }, millsec);
  }

  function getID() {
    switch (index) {
      case 0: return styles.id1;
      case 1: return styles.id2;
      case 2: return styles.id3;
      case 3: return styles.id4;
      case 4: return styles.id5;
      default: return ''; // Fallback if index exceeds the number of styles
    }
  }

  function getImageClass() {
    return zoomIn ? styles.zoomImage : styles.zoomImageOut;
  }

  const handleParagraph = () => {
    if (index < paragraph.length) {
      return <p hidden={!isShow} className={styles.story}>{paragraph[index]}</p>;
    }
    return null; // Changed from undefined to null for clarity
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <img src={BG} alt="Sample Image" className={`${getImageClass()} ${styles.image} ${getID()}` } />
        {handleParagraph()}
        <Button onClick={goToChallenge} sx={skipBtnStyle} variant='contained'>Skip Story</Button>
        {(isShow && index < paragraph.length) && (
          <Button onClick={() => {
            if (zoomIn) {
              handleZoomOut();
            } else {
              handleZoomIn();
            }
          }} sx={nextBtnStyle} variant='contained'>Next</Button>
        )}
        {/* <Chatbot /> */}
        {isShowBtn && <Button onClick={goToChallenge} sx={challengesBtnStyle} variant='contained'>Go to Challenges</Button>}
      </div>
      <audio ref={audioRef} /> {/* Hidden audio player */}
    </>
  );
}