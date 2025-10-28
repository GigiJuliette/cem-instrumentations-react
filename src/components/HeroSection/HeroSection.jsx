import Cta from "../Cta/Cta";
import Glassmorphism from "../Glassmorphism/Glassmorphism";
import Specialities from "./Specialities";
import './heroSection.css';

function HeroSection() {
  return (
    <>
      <h1>CEM Instrumentations <br />Votre partenaire de confiance pour les essais destructifs et contrôles dans le Sud de la France</h1>
      <Specialities />
      <Cta ctaContent={"Contactez-nous"} as="a" href="" />
    </>
  )
}
export default HeroSection