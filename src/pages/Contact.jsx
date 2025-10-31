import React, { useRef } from 'react';
import './contact.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom";
import logo2 from "../assets/logo2.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const title = section.querySelector(".contact-title");
        const form = section.querySelector(".contact-form");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });

        tl.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "expo.out"
        })
        .from(form, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "expo.out"
        }, "-=0.8");
    }, []);

    return (
        <div className="min-h-screen px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#faeade] to-[#faeade]  text-black">
            {/* Header with Logo */}
            <header className="py-6">
                <div className="container mx-auto px-4">
                    <Link to="/" className="inline-block transition-transform hover:scale-105">
                        <img
                            src={logo2}
                            alt="Phoenix Flight Center"
                            className="h-16 w-auto md:h-20"
                        />
                    </Link>
                </div>
            </header>
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-subtitle">Have a question or want to learn more? We'd love to hear from you.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" placeholder="Your Message" rows="6" required></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
            </div>
    );
};

export default Contact;
