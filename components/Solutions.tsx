"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Eye, Laptop, User, Home, Hospital, ArrowUpRight, } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const containerRef = useRef(null);


  const projects = [
    {
      title: "ALMA Agriculture",
      category: "Agriculture & Logistics",
      desc: "Smart platform designed to reduce food spoilage and post-harvest loss by optimizing storage and logistics for local farmers.",
      image: "/projects/alma.png",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      title: "SmartQueue",
      category: "Healthcare & Notifications",
      desc: "Hospital queue notification system built with Angular that alerts users via SMS or app when they are next in line, reducing waiting time and missed appointments.",
      image: "/projects/smartqueue.png",
      icon: <Hospital className="w-5 h-5" />
    },
    {
      title: "School Management System",
      category: "EdTech & Web",
      desc: "A school management platform that allows students and staff to efficiently view and track academic progress and administrative records.",
      image: "/projects/school.png",
      icon: <Laptop className="w-4 h-4" />
    },
    {
      title: "Python Data Sorter",
      category: "Data Processing",
      desc: "A Python-based application designed to organize, sort, and process large datasets efficiently for analytical and reporting purposes.",
      image: "/projects/python.png",
      icon: <Laptop className="w-4 h-4" />
    },
    {
      title: "Asivate AI",
      category: "Assistive Tech",
      desc: "Mobile app developed in a hackathon to assist disabled individuals with spatial navigation and object recognition, promoting inclusion in society.",
      image: "/projects/asivate.png",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Real Estate Platform",
      category: "Web & Frontend",
      desc: "React-based application built to learn frontend fundamentals, allowing users to browse and filter property listings efficiently.",
      image: "/projects/realestate.png",
      icon: <Home className="w-4 h-4" />
    },
    {
      title: "Paola Portfolio",
      category: "Personal Brand",
      desc: "Premium, high-fidelity portfolio website built with Next.js and Tailwind CSS, showcasing my frontend and mobile development projects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=60",
      icon: <User className="w-4 h-4" />
    }
  ];



  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card: any) => {
        gsap.fromTo(card,
          {
            scale: 0.8,
            opacity: 0,
            y: 50
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 20%",
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative py-32 bg-[#000000] overflow-hidden selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
            <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight">
            Top-notch designs, <span className="text-gray-500">delivered at your doorstep.</span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:border-[#d9ff00]/20"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                />

                <div className="absolute top-6 left-6">
                  <div className="px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3 transition-all duration-500 group-hover:border-[#d9ff00]/30">
                    <div className="text-[#d9ff00]">{project.icon}</div>
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#d9ff00] transition-colors mb-4 uppercase">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-bold text-[#d9ff00] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  View Project <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Link */}
        <div className="mt-20 flex justify-center">
          <a href="https://github.com/Paolauwase-teta" target="_blank" className="group flex items-center gap-6 px-10 py-5 bg-[#0a0a0a] border border-white/5 rounded-full hover:border-[#d9ff00]/30 transition-all duration-500">
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.4em] uppercase group-hover:text-white">Explore Full Archive</span>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d9ff00] transition-all">
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
