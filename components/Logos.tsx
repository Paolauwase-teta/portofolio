"use client";

import {
  Atom, Smartphone, Layers, Type,
  FileJson, Palette, Code, Flame,
  GitBranch, PenTool
} from "lucide-react";

export default function Logos() {
  const technologies = [
    { name: 'React', icon: Atom },
    { name: 'ReactNative', icon: Smartphone },
    { name: 'Next.js', icon: Layers },
    { name: 'TypeScript', icon: Type },
    { name: 'JavaScript', icon: FileJson },
    { name: 'Tailwind', icon: Palette },
    { name: 'Node.js', icon: Code },
    { name: 'Firebase', icon: Flame },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: PenTool }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">
            TRUSTED TECHNOLOGIES
          </p>
          <h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
            Architected with modern <span className="text-gray-500 italic font-serif">standards</span>
          </h3>
        </div>

        {/* Tech Badges Carousel - Properly Centered Container */}
        <div className="relative max-w-6xl mx-auto overflow-hidden group">
          <div className="flex gap-8 py-10">
            <div className="flex gap-8 animate-scroll group-hover:pause">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="px-10 py-6 flex items-center gap-5 whitespace-nowrap bg-white/[0.01] border border-white/[0.05] rounded-[1.5rem] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 cursor-pointer"
                >
                  <tech.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                  <span className="font-bold text-[10px] text-gray-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Edge Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 16px)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
