import BG from '../assets/2.jpg'
import styles from './story.module.css'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import {paragraph} from '../data/data.js'

const style = {
  position: "absolute", 
  width: 150,
  top: 650,
  left: 1300,
  backgroundColor: "#4e1363"
}
import Page1_info from "./Page1_info";


export default function Story() {
  const [isShow, setShow] = useState(false)
  const [zoomIn, setZoomIn] = useState(true)
  const [index, setIndex] = useState(0)
  
  const handleZoomIn = ()=>{
    if(index == paragraph.length-1)
      return
    setShow(false)
    setZoomIn(true)
    setIndex((old) => old+1)
    handleTime()
  }
  const handlZoomout = () =>{
    setShow(false)
    setZoomIn(false)
    setTimeout(() => {
      handleZoomIn();
    }, 2000);

  }
  function handleTime(millsec = 3500) {
    setTimeout(() => {
      setShow((old) => !old)
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
    }, 3500);
  }, [])

  function getIamageClass (){
    return zoomIn ? styles.zoomImage : styles.zoomImageOut
  }

  return (
    <>
     <div className={styles.imageContainer}>
        <img src={BG} alt="Sample Image"  className={`${getIamageClass()} ${styles.image } ${getID()}`}/>
      {index!=paragraph.length &&< p hidden={(!isShow)} className={styles.story}>{paragraph[index]}</p>}
      {(isShow &&index!=paragraph.length) && <Button onClick={() => {
        if(zoomIn){
          handlZoomout()
        }else{
          handleZoomIn()
        }
      }} sx={style} variant='contained'> Next</Button> }
    </div>
    </>
  )
}