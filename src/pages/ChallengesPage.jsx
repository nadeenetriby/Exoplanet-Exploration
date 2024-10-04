import Button from "@mui/material/Button";
import background from '../assets/ChallengesBackground/1.jpg'
import styles from './Challenges_page.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

+-
function goToQuestions() {
  console.log("in go to questions");
  navigate("/challenges");
}


const planet = [
  {
    name: "Kepler-56b",
    id: styles.planet1
  },
  {
    name: "Kepler-56c",
    id: styles.planet2
  },
  {
    name: "Kepler-56d",
    id: styles.planet3
  }
]

export default function ChallengesPage() {
  return (
  <div>
  <img src={background} alt="challenges background" />
  {planet.map((item) => (
    <p id={item.id}>{item.name}</p>
  ))}
  </div>    
  );
}
