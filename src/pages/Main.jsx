import BoxInside from "../component/BoxInside";
import styles from "./main.module.css";

export default function Main({ planets, setPlanet }) {
  return (
    <div className={styles.boxContainer}>
      <div >
        <BoxInside planets={planets} setPlanet={setPlanet} />
      </div>
    </div>
  );
}
