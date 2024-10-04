import BG from '../assets/2.jpg'
import styles from './story.module.css'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import {paragraph, nextBtnStyle, challengesBtnStyle, skipBtnStyle} from '../data/data.js';
import Chatbot from './Chatbot.jsx';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { useNavigate } from "react-router-dom";





export default function Story() {
  const [isShow, setShow] = useState(false)
  const [zoomIn, setZoomIn] = useState(true)
  const [index, setIndex] = useState(0)
  const [isShowBtn, setShowBtn] = useState(false)
  const navigate = useNavigate();
  

  function goToChallenge() {
    console.log("in go to challenge");
    navigate("/challenges");
  }

  const handleZoomIn = () => {
    if (index === paragraph.length - 1) {
      setShowBtn(true);
      return;
    }
    setShow(false)
    setZoomIn(true)
    setIndex((old) => old+1)
    handleTime()
  }
  const handlZoomout = () =>{
    setShow(false)
    setZoomIn(false)
    setTimeout(() => {
      if (index === paragraph.length - 1) {
        handlePlaces();

        return;
      } else {
        handleZoomIn(); // Proceed to the next paragraph
      }
    }, 2000);
  }
  function handleTime(millsec = 3000) {
    setTimeout(() => {
      setShow((old) => !old);
    }, millsec);
  }
  function getID(){
    if (index == 0)
      return styles.id1
    else if(index == 1)
      return styles.id2
    else if(index == 2)
      return styles.id3
    else if(index == 3)
      return styles.id4
  }

  useEffect(() =>{
    setTimeout(() => {
      setShow(true)
    }, 2000);
  }, [])

  function getIamageClass (){
    return zoomIn ? styles.zoomImage : styles.zoomImageOut
  }

  const handleAudioPlay = () => {
    // Play audio after user interaction, handle promise rejection if necessary
    audioRef.current.play().catch((error) => {
      console.log("Error playing audio: ", error);
    });
  };

  return (
     <div className={styles.imageContainer}>
        <img src={BG} alt="Sample Image"  className={`${getIamageClass()} ${styles.image } ${getID()}`}/>
      {index!=paragraph.length &&< p hidden={(!isShow)} className={styles.story}>{paragraph[index]}</p>}
      <Button onClick={goToChallenge} sx={skipBtnStyle} variant='conntained'>skip stroy</Button>
      {(isShow &&index!=paragraph.length) && <Button onClick={() => {
        if(zoomIn){
          handlZoomout()
        }else{
          handleZoomIn()
        }
      }} sx={nextBtnStyle} variant='contained'> Next</Button> }
    <Chatbot />
    {isShowBtn && <Button onClick={goToChallenge} sx={challengesBtnStyle} variant='conntained'>go to challenges</Button>}
    </div>
  );
}
