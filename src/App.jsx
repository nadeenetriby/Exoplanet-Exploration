import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Planet from "./component/Planet";
import Main from "./pages/Main";
import "./App.css";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import Story from "./pages/Story";
import ChallengesPage from "./pages/ChallengesPage";
import Planet1 from "./Planets_challenge/Planet1";
import Planet2 from "./Planets_challenge/Planet2";
import Planet3 from "./Planets_challenge/Planet3";
function App() {
  const [planets, setPlanet] = useState("first");

  return (
    <BrowserRouter>
      <Background planets={planets} setPlanet={setPlanet} />
      <Routes>
        <Route
          path="/"
          element={<Main planets={planets} setPlanet={setPlanet} />}
        />
        <Route path="/story" element={<Story />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenges/planet1" element={<Planet1 />} />
        <Route path="/challenges/planet2" element={<Planet2 />} />
        <Route path="/challenges/planet3" element={<Planet3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
