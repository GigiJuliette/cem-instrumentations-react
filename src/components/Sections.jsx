import './sections.css';

function Sections({ childrens, title }) {
  return (
    <section>
      <h3>{title}</h3>
      {childrens}
    </section>
  )
}
export default Sections