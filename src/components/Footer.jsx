import PerruTourLogo from "./PerruTourLogo.jsx";

const PHONE = "56912345678";              // WhatsApp sin + ni espacios
const IG_URL = "https://www.instagram.com/";
const MAIL = "contacto@perrutour.cl";



// Formatea +56 9 1234 5678}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">


      <div className="footer__inner">
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PerruTour — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
