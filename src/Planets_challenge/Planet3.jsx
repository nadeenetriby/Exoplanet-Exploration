import * as React from "react";
import styles from "./Planet1.module.css";
import image1 from "../assets/PlanetsBackground/PLANET3.jpg";
import StarIcon from "@mui/icons-material/Star";
import Dialog from "./Dialog";
import Icon from "./Icon";
// import Planet3_stars from "./Planet3-stars";

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
        {/* <Planet3_stars setIndex={setIndex} setOpen={setOpen}></Planet3_stars> */}
    </div>
  );
}
