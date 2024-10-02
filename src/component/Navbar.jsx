import "./navbar.module.css";
import icon from "../assets/icon.png";
import Button from "@mui/material/Button";
import styles from "./navbar.module.css";
import NavList from "./NavList";

export default function Navbar() {
  return (
    <div className={styles.nav_container}>
      <img src={icon} alt="" />
      <a id={styles.name} href="">
        Exoplanets Survival
      </a>
      <NavList />

      <Button className={styles.button_nav}>log out</Button>
    </div>
  );
}
