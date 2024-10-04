import Button from "@mui/material/Button";
import background from '../assets/challenges_bg.jpg'
import styles from './Challenges_page.module.css'

export default function ChallengesPage() {
  return (
  <div>
  <img src={background} alt="" />
  <p id={styles.planet1}>Kepler-56b</p>
  <p id={styles.planet2}>Kepler-56c</p>
  <p id={styles.planet3}>Kepler-56d</p>
  </div>    
  );
}
