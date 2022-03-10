import "./App.css";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Splash from "./Components/Splash";
import Testimonials from "./Components/Testimonials";
import { React, useEffect, useState } from "react";

import ContactFooter from "./Components/ContactFooter";

function App() {
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
