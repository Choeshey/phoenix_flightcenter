import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import paviation3 from "../assets/paviation3.jpg"
import paviation4 from "../assets/paviation4.jpg"


const MessageSection = () => {
    useGSAP(() => {
        // Font loading check before SplitText
        const fontCheck = () => {
            // Check if Font Loading API is supported
            if (document.fonts && document.fonts.check) {
                return document.fonts.check('16px Antonio') || document.fonts.check('16px ProximaNova');
            }
            // Fallback for browsers without Font Loading API
            return true;
        };

        // Wait for fonts to load with timeout
        const initializeSplitText = (timeoutCount = 0) => {
            if (fontCheck()) {
                createAnimations();
            } else if (timeoutCount < 20) { // Max 2 seconds (20 * 100ms)
                setTimeout(() => initializeSplitText(timeoutCount + 1), 100);
            } else {
                // Fallback: create animations anyway after timeout
                console.warn("Fonts not loaded after timeout, creating animations with fallback");
                createAnimations();
            }
        };

        const createAnimations = () => {
            try {
                const firstMsgSplit = SplitText.create(".first-message", {
                    type: "words",
                });
                const secMsgSplit = SplitText.create(".second-message", {
                    type: "words",
                });
                const paragraphSplit = SplitText.create(".message-content p", {
                    type: "words, lines",
                    linesClass: "paragraph-line",
                });

                gsap.to(firstMsgSplit.words, {
                    color: "#faeade",
                    ease: "power1.in",
                    stagger: 1,
                    scrollTrigger: {
                        trigger: ".message-content",
                        start: "top center",
                        end: "30% center",
                        scrub: true,
                    },
                });
                gsap.to(secMsgSplit.words, {
                    color: "#faeade",
                    ease: "power1.in",
                    stagger: 1,
                    scrollTrigger: {
                        trigger: ".second-message",
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                });

                const revealTl = gsap.timeline({
                    delay: 1,
                    scrollTrigger: {
                        trigger: ".msg-text-scroll",
                        start: "top 60%",
                    },
                });
                revealTl.to(".msg-text-scroll", {
                    duration: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "circ.inOut",
                });
                revealTl.to(".msg-text-scroll2", {
                    duration: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "circ.inOut",
                });

                const paragraphTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".message-content p",
                        start: "top center",
                    },
                });
                paragraphTl.from(paragraphSplit.words, {
                    yPercent: 300,
                    rotate: 3,
                    ease: "power1.inOut",
                    duration: 1,
                    stagger: 0.01,
                });

                // Hover effects for scroll elements
                const scrollElements = gsap.utils.toArray(".msg-text-scroll, .msg-text-scroll2");
                scrollElements.forEach((element) => {
                    const hoverTl = gsap.timeline({ paused: true });

                    hoverTl.to(element, {
                        scale: 1.05,
                        rotation: 2,
                        duration: 0.3,
                        ease: "power2.out"
                    }).to(element.querySelector('div'), {
                        backgroundColor: "#f5e6d3",
                        duration: 0.3,
                        ease: "power2.out"
                    }, 0);

                    element.addEventListener("mouseenter", () => hoverTl.play());
                    element.addEventListener("mouseleave", () => hoverTl.reverse());
                });
            } catch (error) {
                console.warn("SplitText initialization failed:", error);
            }
        };

        // Start checking for fonts
        initializeSplitText();
    });

    return (
        <section id="services" className="message-content" >
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">Fly worry-free with
                            safety at every altitude</h1>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="msg-text-scroll cursor-pointer transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="bg-[#faeade] md:pb-5 pb-3 px-5 pt-5">
                                <img src={paviation3} alt="paviation1" className="w-[300px] "/>
                                <h2 className="text-[#dc6868]">Elevate</h2>
                            </div>
                        </div>
                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="msg-text-scroll2 cursor-pointer transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="bg-[#faeade] md:pb-5 pb-3 px-5 pt-5">
                                <img src={paviation4} alt="paviation1" className="w-[300px] "/>
                                <h2 className="text-[#dc6868]">Let's Fly</h2>
                            </div>
                        </div>

                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>
                                From a thorough onground safety briefing for our clients and pre-flight equipment check to our commitment to only working with UPL licensed pilots, your safety is our key priority. All our ultralight aircrafts are equipped with hand glide landing capability, getting you back on ground securely along with MAGNUM 450 safety parachute emergency rescue system too.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;