import image1 from "../assets/PlanetsBackground/PLANET1.jpg";
import Paragraph1 from "./Paragraph1";
import styles from "./Planet1.module.css";
export default function Planet1() {
  return (
    <div>
      <img className={styles.img1} src={image1} alt="" />
      <Paragraph1 />
    </div>
  );
}
