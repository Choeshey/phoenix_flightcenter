import { useEffect } from 'react';
import Hero from "../components/Hero/hero.jsx";
import MessageSection from "./MessageSection.jsx";
import Testimonial from "./Testimonial.jsx";
import SlideGallery from "../components/Gallery/SlideGallery.jsx";

const Home = ({ setPlayStatus, setHeroCount, heroData, heroCount, playStatus }) => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroData={heroData}
        heroCount={heroCount}
        playStatus={playStatus}
      />
      <MessageSection />
      <Testimonial />
      <SlideGallery />
    </>
  );
};

export default Home;
