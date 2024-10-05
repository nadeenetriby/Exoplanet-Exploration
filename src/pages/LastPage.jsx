import styles from "./last.module.css";
import BG from "../assets/2.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function LastPage() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/challenges");
  }
  return (
    <div className={styles.container}>
      <h1>Congratulations on completing your mission and finding Dr.Z!</h1>{" "}
      <img src={BG} alt="Sample Image" className={styles.lastimg} />
      <ArrowBackIcon
        onClick={handleBack}
        style={{
          cursor: "pointer",
          width: "100px",
          borderRadius: "3px",
          backgroundColor: "rgb(42, 139, 237)",
          fontSize: 40,
          position: "absolute",
          bottom: "20px",
          left: "50px",
          color: "white",
          zIndex: 2,
        }}
      />
    </div>
  );
}
