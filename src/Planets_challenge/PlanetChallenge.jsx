import image1 from "../assets/PlanetsBackground/PLANET1.jpg";
import image2 from "../assets/PlanetsBackground/PLANET2.jpg";
import image3 from "../assets/PlanetsBackground/PLANET3.jpg";
import Paragraph1 from "./Paragraph1";
import styles from "./planetStyle.module.css";
import { useLocation } from 'react-router-dom';
import Dialog from "./Dialog";
import { useEffect, useState, useContext } from "react";
import Planet_stars from "./Planet_stars";

const question = {

    "Kepler-56b":[
    "Kepler-56 b is a planet that weighs about 22 times more than Earth! Imagine if you weighed 100 pounds on Earth. On Kepler-56 b, thanks to its stronger gravity, how much would you weigh?",
    "Kepler-56 b spins rapidly and orbits its star in just 10.5 days. How do you think the planet's short orbit affects the length of its day? If the planet rotates quickly, would you get dizzy watching the sun rise and set multiple times in a single Earth day?",
    "Kepler-56 b is approximately 913 light-years away from Earth. Now, if you were to hop on a jet traveling at 600 mph, how long do you think it would take you to reach this distant exoplanet?",
    "A day on Kepler-56 b might last longer or shorter than what we’re used to on Earth. Since the planet is so close to its star, how do you think the day length compares to Earth? Would it spin slower or faster, and what effect would this have on weather or life?",
    '"Kepler-56 b is classified as Neptune-like. Neptune-like planets are similar in composition to Neptune and Uranus in our solar system, which have thick atmospheres filled with hydrogen, helium, and methane. What would it be like on the surface of such a planet?',
    "Imagine a year on Kepler-56 b! Its orbit takes it around its star in just 10.5 Earth days, and it’s much closer to its star than Earth is to the Sun—at just 0.1 AU. If Kepler-56 b is this close to a red giant, what might life be like? Would it have longer winters, shorter summers, or maybe no seasons at all?",
  
    ],
    "Kepler-56c":
    ["Kepler-56 c orbits its star at 0.17 AU. Imagine Earth being that close to the Sun! If we swapped places with Kepler-56 c, how long would our year be? And what sort of weather would Earth have in such an orbit?",
    "Kepler-56 c weighs about 0.57 times as much as Jupiter, which is already 318 times more massive than Earth. So, how many Earths would it take to match Kepler-56 c’s mass?",
    "Kepler-56 c is also 913 light-years away. Let’s say we use Voyager 1, traveling at about 38,000 mph, to reach this gas giant. How long would it take?",
    "Kepler-56 c orbits its star a bit farther out than Kepler-56 b but still relatively close. Based on its distance, how do you think the length of a day on this planet compares to Earth? Would the planet’s rotation speed be affected, making its days shorter or longer?",
    "Kepler-56 c is a gas giant, much like Jupiter in our solar system. Gas giants are planets that are mostly made of gases, without a solid ground beneath their atmospheres. How might this affect life on Kepler-56 c",
    "Kepler-56 c orbits its star at a distance of 0.17 AU, which is still much closer to the star than Earth is to the Sun. Imagine if Earth were placed that close to the Sun. How would the intense proximity affect the climate or the length of a year on Earth?"
  
    ],
    "Kepler-56d":[
    "Now consider Kepler-56 d, far out at 2.16 AU from its red giant star. That’s over twice as far from its star as Earth is from the Sun. If Earth orbited that far from the Sun, how would the length of our year change? Would we still see the same seasons, or would life change completely?",
    "Kepler-56 d is a true giant, weighing 5.61 times more than Jupiter. If you could magically transport a car that weighs 2,000 pounds on Earth to Kepler-56 d, what would its weight feel like?",
    "Kepler-56 d is the farthest of its planetary siblings, still 913 light-years from Earth. Using the fastest possible method—traveling at the speed of light—how long do you think it would take to get there?",
    "Kepler-56 d is much farther from its star at 2.16 AU, which could have a big effect on its day length. Given its distance and size, how do you think its day compares to Earth’s? Would the rotation speed be faster or slower, and how would this impact its temperature or atmosphere?",
    '"Kepler-56 d, like its sibling Kepler-56 c, is a gas giant. But with a mass 5.61 times that of Jupiter, it is an absolute giant among giants! What challenges would you face if you tried to visit Kepler-56 d?',
    "Kepler-56 d orbits much farther away from its star, at 2.16 AU, over 2 times the distance from Earth to the Sun. If Earth were at this distance, how would the seasons and the length of one year change? Would we still experience the same kind of climate?",
  
    ]
  }

export default function PlanetChallenge(){
    // const { doneChallenge, setDoneChallenge } = useContext(StatsContext);

    
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const { state } = location;

  
    const handleClose = () => {
      setOpen(false);
    };

    function getSrc(){
        if(state?.img === image1) return image1
        else if(state?.img === image2) return image2
        else if(state?.img === image3) return image3
        return 
    }
    return(
    <>
    {console.log("name in dialog",state?.name)}
    <Dialog open={open} onClose={handleClose} list={question[state?.name][index]} />
    <img className={styles.img1} src={getSrc()} alt="" />
    <Planet_stars setIndex={setIndex} setOpen={setOpen}></Planet_stars>
    </>
    )
}