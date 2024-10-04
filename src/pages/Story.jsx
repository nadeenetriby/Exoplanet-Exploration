import BG from "../assets/2.jpg";
import styles from "./story.module.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { paragraph } from "../data/data.js";
import Chatbot from "./Chatbot.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  width: 150,
  top: 50,
  left: 1300,
  backgroundColor: "#4e1363",
};

export default function Story() {
  const [isShow, setShow] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  function handlePlaces() {
    navigate("/challenge1");
  }

  const handleZoomIn = () => {
    if (index == paragraph.length - 1) {
      handlZoomout();
      return;
    }
    setShow(false);
    setZoomIn(true);
    setIndex((old) => old + 1);
    handleTime();
  };
  const handlZoomout = () => {
    setShow(false);
    setZoomIn(false);
    setTimeout(() => {
      if (index === paragraph.length - 1) {
        handlePlaces();

        return;
      } else {
        handleZoomIn(); // Proceed to the next paragraph
      }
    }, 2000);
  };
  function handleTime(millsec = 3500) {
    setTimeout(() => {
      setShow((old) => !old);
    }, millsec);
  }
  function getID() {
    if (index == 0) return styles.id1;
    else if (index == 1) return styles.id2;
    else if (index == 2) return styles.id3;
    else if (index == 3) return styles.id4;
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3500);
  }, []);

  function getIamageClass() {
    return zoomIn ? styles.zoomImage : styles.zoomImageOut;
  }

  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          src={BG}
          alt="Sample Image"
          className={`${getIamageClass()} ${styles.image} ${getID()}`}
        />
        {index != paragraph.length && (
          <p hidden={!isShow} className={styles.story}>
            {paragraph[index]}
          </p>
        )}
        {isShow && index != paragraph.length && (
          <Button
            onClick={() => {
              if (zoomIn) {
                handlZoomout();
              } else {
                handleZoomIn();
              }
            }}
            sx={style}
            variant="contained"
          >
            {" "}
            Next
          </Button>
        )}

        <Chatbot />
      </div>
    </div>
  );
}
