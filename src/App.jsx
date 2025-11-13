import PerruTourLogo from "./components/PerruTourLogo";
import Footer from "./components/Footer";
import Services from "./components/Services"; 
import DogSlide from "./components/DogSlide";
export default function App() {
  return (
    <>
      <main className="hero flex flex-col">
        <a className="logo" href="/" aria-label="PerruTour - inicio">
          <PerruTourLogo width={250} height={250} color="#2E1C05" />
        </a>
          <div className="imageDog"></div>
           <Services onSelect={(planId) => console.log("Seleccionaste:", planId)} />
      <DogSlide />

      </main> 
      <Footer />
    </>
  );
}
