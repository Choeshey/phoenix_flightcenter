import React, { useState, useEffect, useRef } from 'react';
import './testimonial.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {testimonials} from "../contexts/index.js";


const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <svg key={i} className={`star ${i < rating ? 'filled' : ''}`} viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        );
    }
    return <div className="star-rating">{stars}</div>;
};

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds
    };

    const resetAutoplay = () => {
        clearInterval(intervalRef.current);
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
        resetAutoplay();
    };

    useGSAP(() => {
        const elements = gsap.utils.toArray('.testimonial-card');
        
        elements.forEach((element, i) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play none none none",
                    scrub: 0.5,
                    invalidateOnRefresh: true
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.1
            });
        });
        
        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="testimonial-section" ref={sectionRef}>
            <div className="testimonial-container">
                <h2 className="testimonial-title">"What Our Clients Say"</h2>
                <div className="testimonial-slider-viewport">
                    <div className="testimonial-slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-author-info">
                                        <img src={testimonial.img} alt={testimonial.name} className="testimonial-author-img" />
                                        <div className="testimonial-author-details">
                                            <p className="author-name">{testimonial.name}</p>
                                            <p className="author-title">{testimonial.title}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="testimonial-dots-container">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonial-dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
