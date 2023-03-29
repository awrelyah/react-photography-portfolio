import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioSection from "./PortfolioSection";
import ContactForm from "./ContactForm";
import { useRef } from "react";
import Footer from "./Footer";

function App() {

  const portfolioRef = useRef(null);
  const mainRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className="App">
      <Header  mainRef={mainRef} contactRef={contactRef} portfolioRef={portfolioRef} />
      <PortfolioSection portfolioRef={portfolioRef} />
      <ContactForm  contactRef={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
