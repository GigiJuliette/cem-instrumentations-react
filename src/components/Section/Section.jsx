import './Section.css';

function Section({ children, title, anchor }) {
  return (
    <section id={anchor} className="glass">
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}
export default Section