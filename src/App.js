import "./App.css";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Splash from "./Components/Splash";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navigation />
      <Splash />
      <Portfolio />
      <About />
      <Skills />
      <Testimonials />
    </>
  );
}

export default App;
