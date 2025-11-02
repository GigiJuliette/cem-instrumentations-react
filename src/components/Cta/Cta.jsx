import './cta.css';

function Cta({ type, href, children }) {
  if (type === "a") {
    return (
      <a href={href} className="cta glass">
        {children}
      </a>
    );
  }
  if (type === "input") {
    return (
      <input type={"button"} className="cta glass">
        {children}
      </input>
    );
  }
  if (type === "button") {
    return (
      <button type={"buttons"} className="cta glass">
        {children}
      </button>
    );
  }
}

export default Cta;