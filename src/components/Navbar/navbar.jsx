// const NavBar = () => {
//     return (
//         <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
//             <img src="/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20" />
//         </nav>
//     );
// };
//
// export default NavBar;

import { useEffect, useRef, useState } from "react";
import { socials } from "../../contexts/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link as RouterLink} from "react-router-dom";


const Navbar = () => {

    const navRef = useRef(null);
    const linkRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const tl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const iconTl = useRef(null);
    const [showBurger, setShowBurger] = useState(true);

    useGSAP(() => {
        gsap.set(navRef.current, {xPercent: 100});
        gsap.set([linkRef.current, contactRef.current], {
            autoAlpha: 0,
            x: 20,
        });
        tl.current = gsap
            .timeline({paused: true}).to(navRef.current,
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                })
            .to(linkRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<"
            )
            .to(
                contactRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "<+0.2"
            );
        iconTl.current = gsap.timeline({paused: true})
            .to(topLineRef.current,
                {
                    rotate: 45,
                    y:3.3,
                    duration: 0.5,
                    ease: "power2.inOut",
                })
            .to(bottomLineRef.current,
                {
                    rotate: -45,
                    y:-3.3,
                    duration:0.5,
                    ease: "power2.inOut",
                },"<")
    },[]) // gsap animation start form here

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrolly = window.scrollY;
            setShowBurger(currentScrolly < lastScrollY || currentScrolly < 10);
            lastScrollY = currentScrolly;
        }
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });
        return () => window.removeEventListener("scroll", handleScroll);
    },[]); // useEffect start from here

    const toggleMenu = () => {
        if (isOpen) {
            tl.current.reverse();
            iconTl.current.reverse();
        } else {
            tl.current.play();
            iconTl.current.play();
        }
        setIsOpen(!isOpen);
    }; // toggleMenu start from here
    return (
        <>
            <nav ref={navRef}
                 className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-amber-950 text-gray-50 py-28 gap-y-10 md:w-1/2 md:left-1/2"
            >
                <div className="flex flex-col text-5xl gap-y-2 md:text-4xl lg:text-6xl">
                    {["", "services", "about", "packages", "contact", "book-now"].map((section, index) => (
                        <div key={index} ref={(el) => linkRef.current[index] = el}>
                            <RouterLink
                                to={`/${section === 'book-now' ? 'book-now' : section}`}
                                className={`hover:text-gray-300/100 cursor-pointer transition-all duration-300 ${
                                    location.pathname === `/${section}` ? 'text-amber-400' : ''
                                }`}
                                onClick={toggleMenu}
                            >
                                {section === '' ? 'home' : section === 'book-now' ? 'book now' : section}
                            </RouterLink>

                        </div>
                    ))}

                </div>

                <div
                    ref={contactRef}
                    className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
                >
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">E-mail</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">
                            phoenixflightcenter@gmail.com
                        </p>
                    </div>
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Social Media</p>
                        <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                                >
                                    {"{ "}
                                    {social.name}
                                    {" }"}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-red-400 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10" onClick={toggleMenu} style={showBurger
                ?{clipPath: "circle(50% at 50% 50%)"}
                :{clipPath: "circle(0% at 50% 50%)"}
            }>

                <span ref={topLineRef}  className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
                <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>

            </div>
        </>

    );
}
export default Navbar
