import Cta from "../Cta/Cta";
import Section from "../Section/Section";
import Specialities from "./Specialities";
import './heroSection.css';

function HeroSection() {
  return (
    <>
      <Section anchor={"hero"}>
        <h1>CEM Instrumentations 
          <div className="line"></div>
          Votre partenaire de confiance pour les essais destructifs et contrôles dans le Sud de la France</h1>
        <Specialities />
        <Cta type="a" href="#contact" >Contactez-nous</Cta>
      </Section>

    </>
  )
}
export default HeroSection