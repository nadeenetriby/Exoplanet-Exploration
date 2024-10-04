import { useNavigate } from "react-router-dom";
import styles from "./navlist.module.css";
import Page1_info from "../pages/ChallengesPage";
const navList = ["Main", "explore story", "quiz", "ranking", "account"];

export default function NavList() {
  const navigate = useNavigate();
  function handleClick(item, index) {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/info");
        break;
      default:
        navigate("/");
        break;
    }
  }
  return (
    <div>
      <ul className={styles.nav_list}>
        {navList.map((item, index) => (
          <li
            key={index}
            className={styles.ListContainer}
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
