import Button from "@mui/material/Button";
import background from "../assets/ChallengesBackground/1.jpg";
import styles from "./Challenges_page.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Planet1 from "../Planets_challenge/Planet1";
import { StatsContext } from "../component/StatsContext";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const planet = [
  {
    name: "Kepler-56b",
    id: styles.plant1,
    route: "planet1",
    img:'/src/assets/PlanetsBackground/PLANET1.jpg'
  },
  {
    name: "Kepler-56c",
    id: styles.plant2,
    route: "planet2",
    img:'/src/assets/PlanetsBackground/PLANET2.jpg'
  },
  {
    name: "Kepler-56d",
    id: styles.plant3,
    route: "planet3",
    img:'/src/assets/PlanetsBackground/PLANET3.jpg'
  },
];

export default function ChallengesPage() {

  // const [doneChallenge, setDoneChallenge] = useState(0)
  // const navigate = useNavigate();
  // const dynamicState = {
  //   doneChallenge:doneChallenge,
  //   // func: setDoneChallenge
  // };
  // const { doneChallenge } = useContext(StatsContext);

  const navigate = useNavigate();
  const handleClick = (item) => {
    const stats={
      img: item.img,
      name: item.name
    }
    navigate(`${item.route}`, {state: stats });
  };
  function handleLast(){
    navigate("/lastpage");
  }
  return (
    <div>
      <img className={styles.img} src={background} alt="challenges background" />
      {planet.map((item) => (
        <p className={styles.p}  key={item.name} onClick={() => handleClick(item)} id={item.id}>
          {item.name}
        </p>
      ))}
      {/* {console.log("done challenge in chalenge page", doneChallenge)} */}
      <ArrowForwardIcon
      onClick={handleLast}
        style={{
          cursor:"pointer",
        width:"100px",
          borderRadius: "3px",
          backgroundColor: "rgb(42, 139, 237)",
          fontSize: 40,
          position: "absolute",
          bottom: "20px",
          right: "50px",
          color: "white",
        }}
      />
      <Outlet />
    </div>
  );
}
