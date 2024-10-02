import ButtonRight from "./ButtonRight";
import styles from "./boxInside.module.css";
import Planet from "./Planet";
import ButtonLeft from "./ButtonLeft";

export default function BoxInside({ planets, setPlanet }) {
  return (
    <div>
      <div className={styles.boxInsides}>
        <ButtonRight setPlanet={setPlanet} currentPlanet={planets} />
        <div className={styles.planetNameContainer}>
          <Planet planets={planets} setPlanet={setPlanet} />
          <div className={styles.planetName}>{planets}</div>
        </div>
        <ButtonLeft setPlanet={setPlanet} currentPlanet={planets} />
      </div>
    </div>
  );
}
