"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Smartphone, Layout, Cpu, Globe, ArrowRight, BarChart3, Settings, Users, Link2 } from "lucide-react";
import gsap from "gsap";

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-32 bg-black overflow-hidden selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header Section */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
            <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight">
            We resolve complex engineering problems through <span className="text-gray-500">modern architectural procedures.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-full md:h-[700px]">

          {/* Card 1: Main Feature (Large) */}
          <div className="bento-item md:col-span-3 md:row-span-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all duration-500">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d9ff00]/10 flex items-center justify-center text-[#d9ff00] mb-8">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost effective solution</h3>
              <p className="text-gray-500 text-sm max-w-xs">Maximize performance while minimizing infrastructure overhead for your projects.</p>
            </div>
            {/* Visual: Mini Chart Representation */}
            <div className="mt-8 flex items-end gap-1 h-20">
              {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#d9ff00]/20 to-[#d9ff00] rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Card 2: Medium Feature */}
          <div className="bento-item md:col-span-3 md:row-span-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all duration-500">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="px-3 py-1 bg-[#d9ff00] rounded-full text-[9px] font-black text-black">BETA</div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Latest Model</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tailor-made design</h3>
              <p className="text-gray-500 text-sm max-w-xs">Custom UI components designed to align perfectly with your brand identity.</p>
            </div>
            {/* Visual: Mini Mockup */}
            <div className="mt-8 bg-[#111111] rounded-2xl p-4 border border-white/5 relative overflow-hidden h-24">
              <div className="w-full h-2 bg-white/5 rounded-full mb-2"></div>
              <div className="w-1/2 h-2 bg-white/5 rounded-full mb-4"></div>
              <div className="absolute right-[-10px] bottom-[-10px] w-20 h-20 bg-[#d9ff00]/20 blur-2xl rounded-full"></div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#d9ff00]/10 border border-[#d9ff00]/20"></div>
                <div className="w-8 h-8 rounded-lg bg-white/5"></div>
                <div className="w-8 h-8 rounded-lg bg-white/5"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Wide/Thin Bottom Feature */}
          <div className="bento-item md:col-span-4 md:row-span-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 group hover:border-[#d9ff00]/20 transition-all duration-500">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Workflow integration</h3>
              <p className="text-gray-500 text-sm mb-8">Seamlessly connect with your existing tools and deployment pipelines.</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Link2 className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-none hidden md:block">
              <div className="w-40 h-40 rounded-full border border-dashed border-white/10 flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full bg-[#d9ff00]/5 border border-[#d9ff00]/20 flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-[#d9ff00]" />
                </div>
                {/* Floating icons */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                <div className="absolute bottom-4 left-0 w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Small Square Feature */}
          <div className="bento-item md:col-span-2 md:row-span-1 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-[#d9ff00]/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Collaborate in real-time</h3>
            <div className="flex -space-x-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-black bg-[#d9ff00] flex items-center justify-center text-black font-bold text-sm">
                +12
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-[#d9ff00] uppercase tracking-widest">
              Active now <div className="w-1.5 h-1.5 rounded-full bg-[#d9ff00] animate-pulse"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
