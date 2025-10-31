import React, { useRef } from 'react';
import './contact.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    );
};

export default Contact;
