import { useRef } from "react";
import gsap from "gsap";
import { Slides } from "../../contexts";

const Slide = ({ slide }) => {
    const slideRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(slideRef.current, {
            scale: 1.05,
            duration: 0.3,
            zIndex: 10
        });
        gsap.to(imgRef.current, {
            scale: 1.2,
            duration: 0.5
        });
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.3
        });
    };

    const handleMouseLeave = () => {
        gsap.to(slideRef.current, {
            scale: 1,
            duration: 0.3,
            zIndex: 1
        });
        gsap.to(imgRef.current, {
            scale: 1,
            duration: 0.3
        });
        gsap.to(textRef.current, {
            opacity: 0.7,
            duration: 0.3
        });
    };

    return (
        <div
            ref={slideRef}
            className="slide-image relative overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={imgRef}
                src={slide.img}
                alt={slide.title}
                className="slide-image-img w-[560px] h-[560px] object-cover transition-all duration-300"
            />
            <div ref={textRef} className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
                <div className="vertical-text">
                    <h3 className="text-6xl font-bold mb-2">{slide.title}</h3>
                    {slide.destination && <p className="text-sm">{slide.destination}</p>}
                </div>
            </div>
        </div>
    );
};

const SlideGallery = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-6xl font-bold py-10 text-[#dc6868]">Slide Gallery</h1>
            <div className="slide-container">
                <div className="flex items-center justify-center gap-5 overflow-x-auto px-10">
                    {Slides.map((slide, index) => (
                        <Slide key={index} slide={slide} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideGallery;
