import { useState } from 'react'
import './App.css'
import Sections from './components/Sections'

function App() {

  return (
    <>
      <header>
        <h1>CEM Instrumentation <br />Votre partenaire de confiance pour les essais destructifs et contrôles dans le Sud de la France</h1>

      </header>
      <Sections title={"Qui sommes-nous?"}>
      </Sections>

      <Sections title={"Nos Services"}>
      </Sections>

      <Sections title={"Contactez-nous"}>
      </Sections>
    </>
  )
}

export default App
