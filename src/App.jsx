import PerruTourLogo from "./components/PerruTourLogo";
import Footer from "./components/Footer";
import Services from "./components/Services"; 
export default function App() {
  return (
    <>
      <main className="hero">
        <a className="logo" href="/" aria-label="PerruTour - inicio">
          <PerruTourLogo width={250} height={250} color="#2E1C05" />
        </a>
           <Services onSelect={(planId) => console.log("Seleccionaste:", planId)} />
      </main> 
      <Footer />
    </>
  );
}
