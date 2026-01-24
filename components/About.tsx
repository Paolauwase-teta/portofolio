"use client";

import React from "react";
import { Smartphone, Monitor } from "lucide-react";

export default function About() {
  const experiences = [
    {
      year: "2022",
      title: "The Foundation",
      tech: "HTML, CSS, JavaScript",
      desc: "Started my journey by mastering the building blocks of the web, focusing on semantic structures and modern styling techniques."
    },
    {
      year: "2023",
      title: "Frontend Mastery",
      tech: "React, Next.js, Tailwind",
      desc: "Dove deep into component-based architecture and server-side rendering to build high-performance, SEO-friendly applications."
    },
    {
      year: "2024",
      title: "Mobile Revolution",
      tech: "React Native, Flutter",
      desc: "Expanded my skillset to cross-platform mobile development, delivering seamless native experiences for iOS and Android."
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#000000] overflow-hidden selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Centered Header */}
        <div className="text-center mb-32 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 bg-[#d9ff00]/10 border border-[#d9ff00]/20 rounded-full text-[10px] text-[#d9ff00] mb-8 tracking-[0.4em] uppercase font-bold">
            JOURNEY
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight leading-tight">
            Crafting Digital <span className="italic font-serif text-gray-500">Excellence</span> <br />
            Across Every <span className="underline decoration-[#d9ff00]/30 underline-offset-[12px]">Screen</span>.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            As a specialized <span className="text-white">Frontend & Mobile Developer</span>, I bridge the gap between complex logic and intuitive design. My journey is defined by a relentless pursuit of performance and user-centric architecture.
          </p>
        </div>

        {/* Journey Timeline - Premium Styled */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:flex md:border-l-0 md:justify-between mb-32">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-0 md:w-1/3 md:px-8 group">
              {/* Dot for timeline */}
              <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 top-0 w-[11px] h-[11px] rounded-full bg-[#d9ff00] shadow-[0_0_15px_rgba(217,255,0,0.4)] z-20 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content */}
              <div className="pl-8 md:pl-0 md:mt-12 md:text-center transition-all duration-500 group-hover:translate-y-[-10px]">
                <span className="block text-sm font-bold text-[#d9ff00] mb-2 tracking-widest">{exp.year}</span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{exp.title}</h3>
                <span className="inline-block px-3 py-1 bg-white/5 rounded-md text-[10px] text-gray-400 mb-4 border border-white/10 font-mono">
                  {exp.tech}
                </span>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              {/* Horizontal line for desktop */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute top-[5px] left-[calc(50%+6px)] right-[-50%] h-[1px] bg-gradient-to-r from-[#d9ff00]/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Expertise Cards - Bento Style Inspired */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-[#d9ff00]/20 transition-all duration-700">
            <div className="w-14 h-14 bg-[#d9ff00]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#d9ff00]/20">
              <Monitor className="w-7 h-7 text-[#d9ff00]" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Frontend Development</h4>
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              Expertise in building scalable, responsive web applications using React and Next.js. I focus on core web vitals and accessible UI patterns.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <span>TypeScript</span> • <span>Next.js</span> • <span>Tailwind</span> • <span>GSAP</span>
            </div>
          </div>

          <div className="group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:border-[#d9ff00]/20 transition-all duration-700">
            <div className="w-14 h-14 bg-[#d9ff00]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#d9ff00]/20">
              <Smartphone className="w-7 h-7 text-[#d9ff00]" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Mobile Development</h4>
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              Specialized in creating native-feel mobile applications for iOS and Android. High-performance gestures and smooth animations are standard.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <span>React Native</span> • <span>Expo</span> • <span>NativeWind</span> • <span>Reanimated</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
