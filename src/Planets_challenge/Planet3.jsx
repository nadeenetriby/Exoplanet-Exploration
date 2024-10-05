import * as React from "react";
import styles from "./Planet1.module.css";
import image1 from "../assets/PlanetsBackground/PLANET3.jpg";
import StarIcon from "@mui/icons-material/Star";
import Dialog from "./Dialog";

export default function Planet3() {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (indexx) => {
    setOpen(true);
    setIndex(indexx);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} index={index} />
      <img className={styles.img1} src={image1} alt="" />
      <StarIcon
        onClick={() => handleClickOpen(0)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          left: "310px",
          top: "250px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(1)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          left: "635px",
          top: "145px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(2)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "582px",
          top: "240px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(3)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "240px",
          top: "145px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(4)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "40px",
          top: "310px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
