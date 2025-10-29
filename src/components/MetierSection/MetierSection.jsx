import Prestations from '../Prestations/Prestations';
import Section from '../Section/Section';
import './metierSection.css';

function MetierSection() {
  return (
    <Section anchor={"metier"} title={"Nos Services"}>
      <Prestations />
    </Section>
  )
}
export default MetierSection