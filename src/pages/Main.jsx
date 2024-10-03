import { div } from "three/webgpu";
import BoxInside from "../component/BoxInside";
import styles from "./main.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const style = {
  borderColor: "yellow",
  color: "yellow",
  marginTop: 15,
};
const style2 = {
  borderColor: "yellow",
  color: "yellow",
  marginTop: 5,
  marginLeft: 120,
};

export default function Main({ planets, setPlanet }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/story");
  }
  return (
    // <div className={styles.boxContainer}>
    //   <div>
    //     <BoxInside planets={planets} setPlanet={setPlanet} />
    //   </div>
    // </div>
    <div className={styles.NamePosition}>
      <Button variant="outlined" sx={style2} onClick={handleClick}>
        Story Telling
      </Button>

      <div className={styles.lineContainer}>
        <hr className={styles.line} />
        <div className={styles.Exo}> Exoplanets</div>
        <hr className={styles.line} />
      </div>
      <div className={styles.explore}>survival</div>

      <Button variant="outlined" sx={style}>
        Start Now
      </Button>
      <BoxInside planets={planets} setPlanet={setPlanet} />
    </div>
  );
}
