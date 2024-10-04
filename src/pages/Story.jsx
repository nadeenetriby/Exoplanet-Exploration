import BG from '../assets/2.jpg';
import styles from './story.module.css';
import { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { paragraph, nextBtnStyle, challengesBtnStyle, skipBtnStyle } from '../data/data.js';
import Chatbot from './Chatbot.jsx';
import { useNavigate } from "react-router-dom";

export default function Story() {
  const [isShow, setShow] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [index, setIndex] = useState(0);
  const [isShowBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();

  // Create an audio ref to persist the object across renders
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize xthe audio object when the component mounts
    audioRef.current = new Audio('../audio/sound1.mp3');
    audioRef.current.load(); // Load the audio file

    setTimeout(() => {
      setShow(true);
      // Ensure the audio plays only if it can
      audioRef.current.play().catch((error) => {
        console.log("Autoplay blocked: ", error);
      });
    }, 2000);
  }, []); // Empty dependency array ensures this runs once

  function goToChallenge() {
    console.log("in go to challenge");
    navigate("/challenges");
  }

  const handleZoomIn = () => {
    if (index === paragraph.length - 1) {
      setShowBtn(true);
      return;
    }
    setShow(false);
    setZoomIn(true);
    setIndex((old) => old + 1);
    handleTime();
  };

  const handleZoomOut = () => {
    setShow(false);
    setZoomIn(false);
    setTimeout(() => {
      handleZoomIn();
    }, 2000);
  };

  function handleTime(millsec = 3000) {
    setTimeout(() => {
      setShow((old) => !old);
    }, millsec);
  }

  function getID() {
    if (index === 0) return styles.id1;
    else if (index === 1) return styles.id2;
    else if (index === 2) return styles.id3;
    else if (index === 3) return styles.id4;
    else if (index === 4) return styles.id5;
  }

  function getImageClass() {
    return zoomIn ? styles.zoomImage : styles.zoomImageOut;
  }

  const handleAudioPlay = () => {
    // Play audio after user interaction, handle promise rejection if necessary
    audioRef.current.play().catch((error) => {
      console.log("Error playing audio: ", error);
    });
  };

  return (
    <div className={styles.imageContainer}>
      <img src={BG} alt="Sample Image" className={`${getImageClass()} ${styles.image} ${getID()}`} />
      {index !== paragraph.length && <p hidden={!isShow} className={styles.story}>{paragraph[index]}</p>}
      <Button onClick={goToChallenge} sx={skipBtnStyle} variant='contained'>Skip Story</Button>
      {(isShow && index !== paragraph.length) && (
        <Button onClick={() => {
          if (zoomIn) {
            handleZoomOut();
            handleAudioPlay(); // Play audio on zoom out
          } else {
            handleZoomIn();
            handleAudioPlay(); // Play audio on zoom in
          }
        }} sx={nextBtnStyle} variant='contained'>Next</Button>
      )}
      {/* <Chatbot /> */}
      {isShowBtn && <Button onClick={goToChallenge} sx={challengesBtnStyle} variant='contained'>Go to Challenges</Button>}
    </div>
  );
}