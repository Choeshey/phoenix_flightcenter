import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Packages from "./pages/Packages.jsx";
import Contact from "./pages/Contact.jsx";
import BookNow from "./pages/BookNow.jsx";
import Footer from './components/Footer/Footer.jsx';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import gsap from "gsap";
import { heroData } from "./contexts/index.js";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

// Create a layout component that includes the smooth scrolling wrapper
const Layout = ({ children }) => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <Router basename="/phoenix_flightcenter">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home 
                setPlayStatus={setPlayStatus}
                setHeroCount={setHeroCount}
                heroData={heroData}
                heroCount={heroCount}
                playStatus={playStatus}
              />
              <Footer />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Services />
              <Footer />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
              <Footer />
            </Layout>
          } />
          <Route path="/packages" element={
            <Layout>
              <Packages />
              <Footer />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
              <Footer />
            </Layout>
          } />
          <Route path="/book-now" element={
            <Layout>
              <BookNow />
              <Footer />
            </Layout>
          } />
        </Routes>
      </main>
    </Router>
  )
}

export default App
