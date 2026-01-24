"use client";

import React from "react";
import { Cpu, Zap, Palette, Boxes, MousePointer2, Smartphone } from "lucide-react";

export default function SkillsCarousel() {
    const skills = [
        { icon: Palette, title: "Visuals", desc: "High-end 3D graphics & UI architecture" },
        { icon: Cpu, title: "AI Core", desc: "Smart personalization & decision systems" },
        { icon: Zap, title: "Speed", desc: "Ultra-fast loading & performance benchmarks" },
        { icon: MousePointer2, title: "UX/UI", desc: "Fluid micro-animations & user behavior" },
        { icon: Boxes, title: "Logic", desc: "Clean backend architecture & APIs" },
        { icon: Smartphone, title: "Mobile", desc: "Touch-optimized precision for apps" },
    ];

    const infiniteSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="relative py-24 bg-[#000000] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-500 mb-8 tracking-[0.4em] uppercase font-bold">
                    STACK ARCHITECTURE
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                    Core <span className="text-gray-500 italic font-serif lowercase">expertise</span>
                </h2>
            </div>

            {/* Infinite Scroll Carousel for Skills */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none"></div>

                <div className="flex gap-8 overflow-hidden py-10">
                    <div className="flex gap-12 animate-scroll-fast hover:pause">
                        {infiniteSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="w-[300px] flex-shrink-0 p-8 glass-card border-white/5 bg-[#050505] hover:border-white/20 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-white/[0.03] rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all">
                                    <skill.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{skill.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 30s linear infinite;
        }
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
