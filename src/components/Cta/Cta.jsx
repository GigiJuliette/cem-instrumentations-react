import './cta.css';

function Cta({ as = "button", href, type = "button", ctaContent }) {
  if (as === "a") {
    return (
      <a href={href} className="cta">
        {ctaContent}
      </a>
    );
  }

  return (
    <button type={type} className="cta">
      {ctaContent}
    </button>
  );
}

export default Cta;