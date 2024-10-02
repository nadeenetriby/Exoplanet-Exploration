import styles from "./buttonleft.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default function ButtonLeft({ setPlanet, currentPlanet }) {
  function handleClick() {
    const newPlanet =
      currentPlanet === "first"
        ? "second"
        : currentPlanet === "second"
        ? "third"
        : "first";
    setPlanet(newPlanet);
  }
  return (
    <div>
      <button onClick={handleClick} className={styles.ButtonLeft}>
        <FontAwesomeIcon icon={faAngleRight} />{" "}
      </button>
    </div>
  );
}
