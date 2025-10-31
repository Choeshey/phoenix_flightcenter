import { useMediaQuery } from "react-responsive";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import footerbopder from "../../assets/footerborder.png"
import insta from "../../assets/insta.svg"
import tiktok from "../../assets/tiktok.svg"
import yt from  "../../assets/yt.svg"
import arrow_btn from "../../assets/arrow_btn.png"
import footerbg from '../../assets/footerbg.png'


const FooterSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const footerImgRef = useRef(null);

    useEffect(() => {
        // Text Animation
        if (titleRef.current) {
            const textTl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            textTl.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power3.out"
                }
            ).fromTo(subtitleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3.5,
                    ease: "power2.out"
                },
                "-=0.6"
            );
        }

        // Image Animation
        if (footerImgRef.current) {
            const imageTl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerImgRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none"
                }
            });

            imageTl.fromTo(footerImgRef.current,
                { x: 2000, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: "power3.out"
                }
            ).to(footerImgRef.current, {
                y: -20,
                duration: 0.3,
                ease: "power2.out"
            }).to(footerImgRef.current, {
                y: 0,
                duration: 1,
                ease: "bounce.inOut",
                repeat: -1,
                yoyo: true
            });
        }
    }, []);

    return (
        <section className="footer-section">
            <img
                src={footerbopder}
                alt="Footer decorative border"
                className="w-full object-cover -translate-y-1"
            />

            <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
                <div className="overflow-hidden z-10">
                    <h1 ref={titleRef} className="general-title text-center text-white py-10">
                        From Ground to Sky<br/>
                        <span ref={subtitleRef} className="font-light text-gray-50">— We Take You Higher</span>
                    </h1>
                </div>

                {isMobile ? (
                    <img
                        ref={footerImgRef}
                        src={footerbg}
                        alt="Footer drink illustration"
                        className="absolute top-30 object-contain"
                    />
                ) : (
                    <img
                    ref={footerImgRef}
                    src={footerbg}
                    alt="Footer drink illustration"
                    className="absolute top-0 object-contain"
                    />
                )}

                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                    <div className="social-btn">
                        <img src={insta} alt="YouTube social media link" />
                    </div>
                    <div className="social-btn">
                        <img src={yt} alt="Instagram social media link" />
                    </div>
                    <div className="social-btn">
                        <img src={tiktok} alt="TikTok social media link" />
                    </div>
                </div>

                <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-white font-paragraph md:text-lg font-medium">
                    <div className="flex items-center md:gap-16 gap-5">
                        <div>
                            <p>Phoenix Flight Center</p>
                        </div>
                        <div>
                            <p>Chug Club</p>
                            <p>Student Marketing</p>
                            <p>Dairy Dealers</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Contacts</p>
                            <p>Tasty Talk</p>
                        </div>
                    </div>

                    <div className="md:max-w-lg text-white">
                        <p>
                            Get Exclusive Early Access and Stay Informed About Product
                            Updates, Events, and More!
                        </p>
                        <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
                            {/* The input field and arrow icon for newsletter signup. */}{" "}
                            {/* A
          border at the bottom for a clean, modern look. */}
                            <img  src={arrow_btn} alt="Submit email arrow icon" className="mx-2" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full placeholder:font-sans placeholder:text-[#999999]"
                            />
                        </div>
                    </div>
                </div>

                <div className="copyright-box px-6 text-white">
                    {/* The final row with copyright and legal links. */}
                    <p>Copyright © 2025 Phoenix Flight Center - All Rights Reserved</p>
                    <div className="flex items-center gap-7">
                        <p>Privacy Policy</p>
                        <p>Terms of Sеrvice</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;