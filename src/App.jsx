import { useRef, useEffect, useState } from "react";
import Model3Page from "./pages/Model3Page";
import Navbar from "./components/Navbar";
import ModelSPage from "./pages/ModelSPage";
import ModelXPage from "./pages/ModelXPage";
import SolarPanelPage from "./pages/SolarPanelsPage";
import SolarRoofPage from "./pages/SolarRoofPage";

import TeslaLogo from "/tesla.svg";
import "./App.css";
import useIntersection from "./Hooks/useIntersection";

function App() {
  const ref = useRef();
  const isVisible = useIntersection(ref, 1);

  return (
    <div className="w-screen h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth relative no-scrollbar">
      <Navbar logo={TeslaLogo} isVisible={isVisible} />
      <Model3Page />
      <ModelSPage />
      <ModelXPage />
      <SolarPanelPage />
      <SolarRoofPage elementRef={ref} />
    </div>
  );
}

export default App;
