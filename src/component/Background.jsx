import BackgroundImage from "../assets/background3.jpg";

import styles from "./background.module.css";
import Main from "../pages/Main";
import Navbar from "./Navbar";
import Page1_info from "../pages/ChallengesPage";

export default function Background() {
  return (
    <div className={styles.container_img}>
      <img className={styles.img_back} src={BackgroundImage} alt="" />
    </div>
  );
}
