import ButtonRight from "./ButtonRight";
import styles from "./boxInside.module.css";
import Planet from "./Planet";
import ButtonLeft from "./ButtonLeft";
import PlanetInfo1 from "../planets/PlaneInfo1";
import PlanetInfo2 from "../planets/PlanetInfor2";
import PlanetInfo3 from "../planets/PlanetInfo3";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const style2 = {
  borderColor: "rgb(191, 103, 211)",
  color: "rgb(191, 103, 211)",
  margin: "60px auto",
  display: "flex",
  fontFamily: "'CustomFont', sans-serif",
};

export default function BoxInside({ planets, setPlanet }) {
  function handleClick(planets) {
    if (planets === "first") {
      const planet_1 = document.getElementById("first_planet");
      planet_1.scrollIntoView({ behavior: "smooth" });
    } else if (planets === "second") {
      const planet_1 = document.getElementById("second_planet");
      planet_1.scrollIntoView({ behavior: "smooth" });
    } else {
      const planet_1 = document.getElementById("third_planet");
      planet_1.scrollIntoView({ behavior: "smooth" });
    }
  }
  const navigate = useNavigate();

  function handleClicks() {
    navigate("/story");
  }

  return (
    <div>
      <div>
        <Box>
          <SimpleTreeView>
            <TreeItem
              itemId="grid"
              label="PLANETS"
              style={{ fontFamily: "'CustomFont'important!" }}
              sx={{
                marginTop: "-470px",
                color: "white",
                position: "absolute",
                right: "-205px",
                textAlign: "center",
                width: "1510px", // Set width to full viewport width
                border: "2px solid rgb(191, 103, 211)",
                borderRadius: "5px",
                fontFamily: "'CustomFont', sans-serif", // Corrected to fontFamily
              }}
              className={styles.font}
            >
              <TreeItem
                itemId="grid-community"
                label="planet1"
                sx={{ fontStyle: "'CustomFont', sans-serif" }}
                onClick={() => handleClick("first")}
              />
              <TreeItem
                itemId="grid-pro"
                label="planet2"
                sx={{ fontStyle: "'CustomFont', sans-serif" }}
                onClick={() => handleClick("second")}
              />
              <TreeItem
                itemId="grid-premium"
                label="planet3"
                sx={{ fontStyle: "'CustomFont', sans-serif" }}
                onClick={() => handleClick("third")}
              />
            </TreeItem>
          </SimpleTreeView>
        </Box>
      </div>
      {/* <div className={styles.boxInsides}>
        <ButtonRight setPlanet={setPlanet} currentPlanet={planets} />
        <div className={styles.planetNameContainer}>
          <Planet planets={planets} setPlanet={setPlanet} />
          <div
            onClick={() => handleClick(planets)}
            className={styles.planetName}
          >
            {planets}
          </div>
        </div>
        <ButtonLeft setPlanet={setPlanet} currentPlanet={planets} />
      </div> */}
      {/* <Button variant="outlined" onClick={() => handleClick(planets)} sx={style}>
        Start Now
      </Button> */}
      <Button variant="outlined" sx={style2} onClick={handleClicks}>
        Story Telling
      </Button>
      <br /> <br /> <br />
      <div id="first_planet" className={styles.SectionContainer}>
        <section className={styles.planetSection}>
          <div>
            <h1>Kepler-56b</h1>
            <p>
              The closest planet to the star. It is a gas giant, meaning it is
              composed mostly of gases like hydrogen and helium, and it's much
              larger than Earth. Kepler-56b orbits the star very quickly,
              completing a full orbit in just about 10.5 days. Because it's so
              close to the star, the planet is extremely hot. Scientists
              discovered this planet when they noticed the star's light dimming
              slightly as Kepler-56b passed in front of it—a method known as the
              "transit" method. Eventually, this planet will be consumed by the
              star as it continues to grow larger.
            </p>
          </div>
          <PlanetInfo1 planets={planets} />
        </section>
        {/* ------------------------------------------------ */}
        <section className={styles.planetSection2} id="second_planet">
          <div>
            <h1>Kepler-56c</h1>
            <p>
              The second planet in the system. Like Kepler-56b, it is also a gas
              giant, but it orbits the star more slowly, taking around 21.4 days
              to complete one orbit. Kepler-56c shares a similar fate with
              Kepler-56b because it too will likely be swallowed by the
              expanding red giant star in the future. The interesting thing
              about Kepler-56b and Kepler-56c is that their orbits are not
              aligned with the star's rotation, something that is very unusual
              for multi-planet systems.
            </p>
          </div>
          <PlanetInfo2 planets={planets} />
        </section>
        {/* ------------------------------------------------ */}
        <section className={styles.planetSection3} id="third_planet">
          <div>
            <h1>Kepler-56b</h1>
            <p>
              It is a bit more mysterious. It is much farther away from the star
              and does not pass in front of the star from our point of view, so
              it wasn't discovered using the transit method like the other two
              planets. Instead, scientists figured out it was there because of
              the way it pulls on the other planets and the star. Kepler-56d’s
              gravitational influence is likely the reason why the orbits of the
              two inner planets are tilted. Although we don’t know as much about
              Kepler-56d, it plays an important role in the overall dynamics of
              this unique planetary system.
            </p>
          </div>
          <PlanetInfo3 planets={planets} />
        </section>
      </div>
    </div>
  );
}
