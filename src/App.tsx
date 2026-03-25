import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import WhatAreNanomaterials from "./components/sections/WhatAreNanomaterials";
import TypesOfNanomaterials from "./components/sections/TypesOfNanomaterials";
import EnergyApplications from "./components/sections/EnergyApplications";
import MedicalApplications from "./components/sections/MedicalApplications";
import EnvironmentalApplications from "./components/sections/EnvironmentalApplications";
import FutureOfNanotechnology from "./components/sections/FutureOfNanotechnology";
import Quiz from "./components/sections/Quiz";
import References from "./components/sections/References";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-nano-dark text-white font-sans selection:bg-nano-purple/30 selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <Navbar />
          
          <main className="relative z-10">
            <Home />
            <WhatAreNanomaterials />
            <TypesOfNanomaterials />
            <EnergyApplications />
            <MedicalApplications />
            <EnvironmentalApplications />
            <FutureOfNanotechnology />
            <Quiz />
            <References />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
