"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";

export default function Testimonials() {
    const listRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            name: "Cyizere Happy",
            role: "Founder at 4Ward",
            date: "12 Jan 2024",
            text: "Paola's attention to detail is unmatched. She transformed our concept into a high-performance system that scales beautifully.",
            avatar: "CH"
        },
        {
            name: "John Kelia",
            role: "CTO, TechFlow",
            date: "05 Feb 2024",
            text: "Working with Paola was a game-changer. The architectural integrity of the mobile app she built is world-class.",
            avatar: "JK"
        },
        {
            name: "NIYOBYOSE Isaac Precieux",
            role: "Founder Tech4Impact",
            date: "20 Mar 2024",
            text: "Precision, performance, and passion. That's what you get when you work with Paola. Truly recommended for any high-growth startup.",
            avatar: "ST"
        },
        {
            name: "David Chen",
            role: "Engineering Director",
            date: "10 Apr 2024",
            text: "The speed at which Paola delivers high-quality code is startling. Her grasp of modern frontend architectures is exceptional.",
            avatar: "DC"
        },
        {
            name: "Emma Wilson",
            role: "UX Researcher",
            date: "15 May 2024",
            text: "Paola doesn't just write code; she crafts experiences. The micro-interactions and fluidity she brings to projects are rare.",
            avatar: "EW"
        },
        {
            name: "Michael Ross",
            role: "Founder, Zenith",
            date: "02 Jun 2024",
            text: "If you need a mobile application that feels like a native masterpiece, Paola is the only developer you should call.",
            avatar: "MR"
        }
    ];

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const duration = 40; // Speed of the carousel

        const animation = gsap.to(list, {
            xPercent: -50,
            duration: duration,
            ease: "none",
            repeat: -1
        });

        const handleMouseEnter = () => animation.pause();
        const handleMouseLeave = () => animation.play();

        list.addEventListener("mouseenter", handleMouseEnter);
        list.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animation.kill();
            list.removeEventListener("mouseenter", handleMouseEnter);
            list.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section id="testimonials" className="py-32 bg-black overflow-hidden selection:bg-[#d9ff00]/30">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="flex flex-col mb-20 text-center items-center">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
                        <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight">
                        What our clients <span className="text-gray-500">say about us.</span>
                    </h2>
                </div>

                {/* Carousel Wrapper */}
                <div className="relative group overflow-hidden">
                    <div
                        ref={listRef}
                        className="flex gap-6 w-max pr-6"
                    >
                        {/* Double the cards for seamless loop */}
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="w-[350px] md:w-[400px] bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] flex flex-col group/card hover:border-[#d9ff00]/20 transition-all duration-500 flex-shrink-0">
                                {/* Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-[#d9ff00] text-[#d9ff00]" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-1">
                                    {t.text}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-xs font-bold text-white group-hover/card:border-[#d9ff00]/30 transition-colors">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{t.role}</span>
                                            <span className="text-[9px] text-gray-600 mt-0.5">{t.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Edge Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Stats Section */}
                <div className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-10 py-20 border-t border-white/5">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black text-white mb-2">45+</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Projects Completed</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-white/10">
                        <span className="text-4xl md:text-6xl font-black text-white mb-2">5k+</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Commits pushed</span>
                    </div>
                    <div className="flex flex-col lg:col-span-1 col-span-2 items-center">
                        <span className="text-4xl md:text-6xl font-black text-white mb-2">4.8</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Review Rate</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
