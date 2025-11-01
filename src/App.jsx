import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import cemLogo from "./assets/cem-logo.svg";
import HeroSection from "./components/HeroSection/HeroSection";
import Glassmorphism from "./components/Glassmorphism/Glassmorphism";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import MetierSection from "./components/MetierSection/MetierSection";
import Form from "./components/ContactSection/Form";

function App() {
  return (
    <>
      <Glassmorphism />
      <ParticlesBackground bgColor="#141012" linksColor="#ee8f0b" />
      <img className="cemLogo" src={cemLogo} alt="CEM Instrumentations logo" />
      <NavBar />
      <main>
        <HeroSection />
        <MetierSection />
        <Form />
      </main>
    </>
  );
}

export default App;
