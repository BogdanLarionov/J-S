import "../../style.css";
import AboutUs from "../AboutUs";
import Contacts from "../Contacts";
import Nav from "../Nav";
import Services from "../Services";
import Footer from "../Footer";
import { useState } from "react";

// https://olegtesla.github.io/

function App() {
  const [menuActive, setMenuActive] = useState(true);
  return (
    <div>
      <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
