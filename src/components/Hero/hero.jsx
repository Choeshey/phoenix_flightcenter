import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./hero.css"
import arrow_btn from "../../assets/arrow_btn.png"
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"
import logo2 from "../../assets/logo2.png"
import paviation from "../../assets/paviation.mp4"
import paviation0 from "../../assets/paviation0.png"
import paviation6 from "../../assets/paviation6.png"
import paviation3 from "../../assets/paviation3.png"
import paviation4 from "../../assets/paviation4.png"
import paviation5 from "../../assets/paviation5.png"
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Slider = ({playStatus, heroCount}) => {
    if (playStatus) {
        return (
            <div className="video-mask-container">
                <video className="background masked-video" autoPlay loop muted>
                    <source src={paviation} type="video/mp4"/>
                </video>
            </div>
        )
    } else if (heroCount===0)
    {
        return <img src={paviation0} className="background" alt="background"/>
    } else if (heroCount===1)
    {
        return <img src={paviation6} className="background" alt="background"/>
    } else if (heroCount===2)
    {
        return <img src={paviation3} className="background" alt="background"/>
    } else if (heroCount===3)
    {
        return <img src={paviation4} className="background" alt="background"/>
    } else if (heroCount===4)
    {
        return <img src={paviation5} className="background" alt="background"/>
    }
}

const Hero = ({heroCount,setHeroCount,heroData, setPlayStatus, playStatus}) => {
    const heroRef = useRef(null);
    
    useGSAP(() => {
        const hero = heroRef.current;
        const logo = hero.querySelector(".w-24");
        const heroText = hero.querySelector(".hero-text");
        const exploreBtn = hero.querySelector(".hero-explore");
        const dotPlay = hero.querySelector(".hero-dot-play");

        const tl = gsap.timeline();

        tl.from(logo, { opacity: 0, y: -30, duration: 1.2, ease: 'expo.out' })
          .from(heroText, { opacity: 0, y: 40, duration: 1.2, ease: 'expo.out' }, "-=1")
          .from(exploreBtn, { opacity: 0, y: 40, duration: 1.2, ease: 'expo.out' }, "-=1")
          .from(dotPlay, { opacity: 0, y: 40, duration: 1.2, ease: 'expo.out' }, "-=1");

    }, [heroCount]);

    const handleDotClick = (index) => {
        setHeroCount(index);
        setPlayStatus(false);
    }

    return (
        <div className="hero" ref={heroRef}>
            <Slider playStatus={playStatus} heroCount={heroCount} />
            <div className="hero-foreground">
                <div className="hero-content-wrapper">
                    <div className="w-24">
                        <img src={logo2} alt="logo2"/>
                    </div>
                    <div className="hero-text">
                        <p>{heroData[heroCount].text1}</p>
                        <p>{heroData[heroCount].text2}</p>
                    </div>
<Link 
                    to="/book-now" 
                    className="hero-explore"
                >
                    <p>Book Now</p>
                    <img src={arrow_btn} alt="arrow_btn"/>
                </Link>
                </div>
                <div className="hero-dot-play">
                    <ul className="hero-dots">
                        <li onClick={()=>handleDotClick(0)} className={`hero-dot ${heroCount === 0 ? "active" : ""}`}></li>
                        <li onClick={()=>handleDotClick(1)} className={`hero-dot ${heroCount === 1 ? "active" : ""}`}></li>
                        <li onClick={()=>handleDotClick(2)} className={`hero-dot ${heroCount === 2 ? "active" : ""}`}></li>
                        <li onClick={()=>handleDotClick(3)} className={`hero-dot ${heroCount === 3 ? "active" : ""}`}></li>
                        <li onClick={()=>handleDotClick(4)} className={`hero-dot ${heroCount === 4 ? "active" : ""}`}></li>
                    </ul>
                    <div className="hero-play">
                        <img src={playStatus?pause_icon:play_icon} alt="play_icon" className="play_icon" onClick={()=>setPlayStatus(!playStatus)}/>
                        <p className="text-white font-light text-sm">See the Video </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
