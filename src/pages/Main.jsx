import { div } from "three/webgpu";
import BoxInside from "../component/BoxInside";
import styles from "./main.module.css";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
const style2 = {
  borderColor: "yellow",
  color: "yellow",
  marginTop: 5,
  marginLeft: 120,
  fontFamily: "'CustomFont', sans-serif",
};

export default function Main({ planets, setPlanet }) {
  return (
    // <div className={styles.boxContainer}>
    //   <div>
    //     <BoxInside planets={planets} setPlanet={setPlanet} />
    //   </div>
    // </div>
    <div className={styles.NamePosition}>
      {/* <Button variant="outlined" sx={style2}>
        story
      </Button> */}
      {/* <button>  <FontAwesomeIcon icon={faAngleRight} /></button> */}
      {/* <FontAwesomeIcon icon={faAngleRight} />{" "} */}
      {/* <button onClick={handleClick} className={styles.ButtonLeft}>
        <FontAwesomeIcon icon={faAngleRight} />{" "}
      </button> */}
  
      <div className={styles.lineContainer}>
        <hr className={styles.line} />
        <div className={styles.Exo}> Exoplanets</div>
        <hr className={styles.line} />
      </div>
      <div className={styles.explore}>survival</div>

      <BoxInside planets={planets} setPlanet={setPlanet} />
    </div>
  );
}
