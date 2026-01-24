"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Search, Mail } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);
    const lineRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-content > *", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });

            gsap.from(lineRef.current, {
                drawSVG: 0,
                opacity: 0,
                duration: 2,
                delay: 0.5,
                ease: "power2.inOut"
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black selection:bg-[#d9ff00]/30"
        >
            {/* Background Texture - Subtle Dots */}
            <div className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
                    backgroundSize: '30px 30px'
                }}>
            </div>

            {/* Glowing Arched Line */}
            <div className="absolute top-[15%] w-full flex justify-center pointer-events-none">
                <svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path
                        ref={lineRef}
                        d="M0 400C200 150 1000 150 1200 400"
                        stroke="url(#limeGradient)"
                        strokeWidth="1.5"
                    />
                    <defs>
                        <linearGradient id="limeGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#d9ff00" stopOpacity="0" />
                            <stop offset="0.5" stopColor="#d9ff00" />
                            <stop offset="1" stopColor="#d9ff00" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Extra Glow Orb */}
                <div className="absolute top-[100px] w-[600px] h-[300px] bg-[#d9ff00]/10 blur-[120px] rounded-full translate-y-[-50%]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 hero-content flex flex-col items-center">

                {/* Main Heading */}
                <div className="max-w-4xl text-center mb-12">
                    <h1 className="text-5xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Architecture,<br />the efficient way
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Precision-engineered digital products for high-growth tech companies.
                        We build robust mobile and web systems that scale with your vision.
                    </p>
                </div>

                {/* Email / Search Bar Mockup */}
                <div className="w-full max-w-xl group flex items-center bg-[#111111] border border-white/10 rounded-full p-1.5 focus-within:border-[#d9ff00]/50 transition-all duration-300">
                    <div className="pl-6 flex items-center text-gray-500">
                        <Mail className="w-5 h-5 mr-3" />
                        <span className="text-sm font-medium">hi@paola.dev</span>
                    </div>
                    <div className="ml-auto">
                        <button className="bg-[#d9ff00] text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                            Work with me
                        </button>
                    </div>
                </div>

                {/* Social Proof / Leaders Section */}
                <div className="mt-32 w-full flex flex-col items-center">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-12">Already chosen by the leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 md:h-8 invert" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 md:h-8 invert" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 md:h-8 invert" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-6 md:h-8 invert" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 md:h-8 invert" />
                    </div>
                </div>

            </div>

            {/* Bottom Status Scroll */}
            <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#d9ff00] animate-pulse"></div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Available for hire</span>
            </div>
        </section>
    );
}
