import ButtonRight from "./ButtonRight";
import styles from "./boxInside.module.css";
import Planet from "./Planet";
import ButtonLeft from "./ButtonLeft";
import PlanetInfo1 from "../planets/PlaneInfo1";
import PlanetInfo2 from "../planets/PlanetInfor2";
import PlanetInfo3 from "../planets/PlanetInfo3";


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
  return (
    <div>
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
      <div className="SectionContainer">
        <section className={styles.planetSection} id="first_planet">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            minima autem. Nulla pariatur nobis quidem totam ab ducimus esse quo
            facilis numquam eligendi iusto ut culpa illum ipsum, earum
            voluptate.
          </p>
          <PlanetInfo1 planets={planets} />
        </section>
        {/* ------------------------------------------------ */}
        <section className={styles.planetSection2} id="second_planet">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            minima autem. Nulla pariatur nobis quidem totam ab ducimus esse quo
            facilis numquam eligendi iusto ut culpa illum ipsum, earum
            voluptate.
          </p>
          <PlanetInfo2 planets={planets} />
        </section>
        {/* ------------------------------------------------ */}

        <section className={styles.planetSection3} id="third_planet">
        <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            minima autem. Nulla pariatur nobis quidem totam ab ducimus esse quo
            facilis numquam eligendi iusto ut culpa illum ipsum, earum
            voluptate.
          </p>
          <PlanetInfo3 planets={planets} />
        </section>
      </div>
    </div>
  );
}
