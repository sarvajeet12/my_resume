import React from "react";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import InfiniteScrollingText from "./components/common/InfiniteScrollingText";
import CertificateSlider from "./pages/Certificate";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Intro */}
      <Intro />

      {/* Home */}
      <Home />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Infinite Scrolling Text */}
      <InfiniteScrollingText />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Certificate */}
      <CertificateSlider />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
