import BG from '../assets/2.jpg'
import styles from './story.module.css'
import { useState } from 'react'
import Button from '@mui/material/Button';

const style = {
  position: "absolute", 
}

const paragraph = ['1', '2', '3', '4', '5', '6', '7']
const id = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']


export default function Story() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isShow, setShow] = useState(undefined)
  const [zoomIn, setZoomIn] = useState(true)
  const [index, setIndex] = useState(0)
  
  const handleAnimation = () => {
    
    // Remove and then re-add the animation class to restart the animation
    setIsAnimating(false); 
    setTimeout(() => {
      setIsAnimating(true);
    }, 0);
  };
  

  function handleTime() {
    console.log("index ->" ,index);
    console.log("isShow ->" ,isShow);
    console.log("zoomIN ->" ,zoomIn);

    // Your animation code here
    setTimeout(() => {
      // Code to be executed after 3 seconds
      console.log('Animation finished!');
      setShow((old) => !old)
      // Call a function or perform an action here
    }, 3500); // 3000ms = 3 seconds
  }
  function getID(){
    if (index == 0)
      return styles.id1
    else if(index == 1)
      return styles.id2

  }
   handleTime();
  return (
    <>
     <div className={styles.imageContainer}>
        <img   src={BG} alt="Sample Image" className={zoomIn ? styles.zoomImage : styles.zoomImageOut}/>
      {/* <p hidden={!isShow} id='p1' className={styles.story1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam unde pariatur illum aliquid itaque. Illo quidem atque eum amet fugiat sit unde adipisci deleniti, nulla voluptatem nobis, similique ipsum!</p> */}
      {index!=paragraph.length &&< p hidden={(!isShow)} id={getID()} className={styles.story}>{paragraph[index]}</p>}
      {(isShow &&index!=paragraph.length) && <Button onClick={() => {
        setShow(old => !old)
        setZoomIn(old=> !old)
        console.log("zsoom in on click",zoomIn);
        setIndex((old) => old+1)
        handleTime()
      }} sx={style} variant='contained'> Next</Button> }
    </div>
    </>
  )
}