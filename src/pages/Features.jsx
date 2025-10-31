import React, { useRef } from 'react';
import './features.css';
import { features } from "../contexts/index.js";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const title = section.querySelector("h2");
        const paragraph = section.querySelector("p");
        const cards = section.querySelectorAll(".feature-card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                toggleActions: "play none none none"
            }
        });

        tl.from(title, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "expo.out"
        })
        .from(paragraph, {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "expo.out"
        }, "-=1")
        .from(cards, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "expo.out"
        }, "-=0.8");
    }, []);

    return (
        <section className="features" ref={sectionRef}>
            <div className="features-container">
                <div className="features-header">
                    <h2>Why Choose Phoenix Flight Center?</h2>
                    <p>Fly worry-free with safety at every altitude</p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
