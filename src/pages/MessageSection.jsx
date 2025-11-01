import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import paviation3 from "../assets/paviation3.jpg";
import paviation4 from "../assets/paviation4.jpg";
import { useRef } from "react";

const MessageSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const createAnimations = () => {
            try {
                const firstMsgSplit = SplitText.create(".first-message", { type: "words", tags: "span" });
                const secMsgSplit = SplitText.create(".second-message", { type: "words", tags: "span" });
                const paragraphSplit = SplitText.create(".message-content p", { type: "words, lines", linesClass: "paragraph-line" });

                const masterTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse", // Play on enter, reverse on leave
                    }
                });

                // Animate first message words
                masterTl.to(firstMsgSplit.words, {
                    color: "#faeade",
                    ease: "power1.in",
                    stagger: 0.5,
                }, "start");

                // Animate second message words, starting slightly after the first
                masterTl.to(secMsgSplit.words, {
                    color: "#faeade",
                    ease: "power1.in",
                    stagger: 0.5,
                }, "start+=1");

                // Reveal images
                masterTl.to(".msg-text-scroll", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "circ.inOut",
                    duration: 1,
                }, "start+=0.5");

                masterTl.to(".msg-text-scroll2", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "circ.inOut",
                    duration: 1,
                }, "start+=1");

                // Animate paragraph words
                masterTl.from(paragraphSplit.words, {
                    yPercent: 300,
                    rotate: 3,
                    ease: "power1.inOut",
                    duration: 1,
                    stagger: 0.01,
                }, "start+=1.5");

                // Hover effects (kept separate as they are not scroll-dependent)
                const scrollElements = gsap.utils.toArray(".msg-text-scroll, .msg-text-scroll2");
                scrollElements.forEach((element) => {
                    const hoverTl = gsap.timeline({ paused: true });
                    hoverTl.to(element, { scale: 1.05, rotation: 2, duration: 0.3, ease: "power2.out" })
                           .to(element.querySelector('div'), { backgroundColor: "#f5e6d3", duration: 0.3, ease: "power2.out" }, 0);

                    element.addEventListener("mouseenter", () => hoverTl.play());
                    element.addEventListener("mouseleave", () => hoverTl.reverse());
                });

            } catch (error) {
                console.warn("SplitText or GSAP animation failed:", error);
            }
        };

        // Simple delay to wait for font rendering, can be improved with a font loader library
        setTimeout(createAnimations, 100);

    }, { scope: sectionRef });

    return (
        <section id="services" className="message-content" ref={sectionRef}>
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