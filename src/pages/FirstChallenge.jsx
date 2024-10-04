import Button from "@mui/material/Button";
import image from "../assets/2.jpg";
import styles from "./firstChallenge.module.css";
import BG from "../assets/2.jpg";
import Chatbot from "./Chatbot";

export default function FirstChallenge() {
  return (
    <div>
      <div>
        <div className={styles.imgcontainer}>
          <img src={BG} alt="Sample Image" />
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
