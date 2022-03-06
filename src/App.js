import "./App.css";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Splash from "./Components/Splash";
import Testimonials from "./Components/Testimonials";
import { React, useEffect, useRef, useState } from "react";

import ContactFooter from "./Components/ContactFooter";

function App() {
  const [isOnScreen, setIsOnScreen] = useState({
    splashOn: false,
    portOn: false,
    aboutOn: false,
    skillsOn: false,
    testimonialsOn: false,
  });
  console.log(isOnScreen.splashOn);
  return (
    <div>
      <Navigation />
      <Splash />
      <Portfolio />
      <About />
      <Skills />
      <Testimonials />
      <ContactFooter />
    </div>
  );
}

export default App;
