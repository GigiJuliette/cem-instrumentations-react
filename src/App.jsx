import { useState } from 'react'

import './App.css';
import Cta from './components/Cta/Cta';
import Section from './components/Section/Section';
import Specialities from './components/HeroSection/Specialities';
import NavBar from './components/NavBar/NavBar';
import cemLogo from './assets/cem-logo.svg';
import HeroSection from './components/HeroSection/HeroSection';
import Glassmorphism from './components/Glassmorphism/Glassmorphism';
import ParticlesBackground from './components/ParticlesBackground';

function App() {

  return (
    <>
      <ParticlesBackground bgColor="#141012" linksColor="#ee8f0b" />
      <img className="cemLogo" src={cemLogo} alt="CEM Instrumentations logo" />
      <NavBar />
      <main>
        <Section anchor="hero">
          <HeroSection />
        </Section>
        <Section anchor="about" title={"Qui sommes-nous?"}>
          <Glassmorphism />
        </Section>
        <Section anchor="metier" title={"Nos Services"}>
        </Section>
        <Section anchor="contact" title={"Contactez-nous"}>
        </Section>
      </main>
    </>
  )
}

export default App
