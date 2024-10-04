import Button from "@mui/material/Button";
import background from "../assets/ChallengesBackground/1.jpg";
import styles from "./Challenges_page.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Planet1 from "../Planets_challenge/Planet1";

const planet = [
  {
    name: "Kepler-56b",
    id: styles.planet1,
    route: "planet1",
  },
  {
    name: "Kepler-56c",
    id: styles.planet2,
    route: "planet2",
  },
  {
    name: "Kepler-56d",
    id: styles.planet3,
    route: "planet3",
  },
];

export default function ChallengesPage() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(`/challenges/${route}`);
  };
  return (
    <div>
      <img src={background} alt="challenges background" />
      {planet.map((item) => (
        <p  key={item.name} onClick={() => handleClick(item.route)} id={item.id}>
          {item.name}
        </p>
      ))}
      <Outlet />
    </div>
  );
}
