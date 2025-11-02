import './Section.css';

function Section({ children, title, anchor }) {
  return (
    <section id={anchor}>
      {title && <h4>{title}</h4>}
      {children}
    </section>
  )
}
export default Section