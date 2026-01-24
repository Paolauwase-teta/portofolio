"use client";

import { ArrowUpRight, Zap, Shield, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-black overflow-hidden selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* The Mega Card */}
        <div className="relative bg-[#d9ff00] rounded-[4rem] p-12 md:p-24 overflow-hidden group">
          {/* Background Texture for the card */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(black 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <p className="text-black font-bold text-sm uppercase tracking-[0.3em] mb-8">Ready to evolve?</p>
              <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter mb-10">
                Elevate the way you build products.
              </h2>
            </div>

            <div className="flex-none">
              <a
                href="#contact"
                className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-black flex items-center justify-center group/btn hover:scale-105 transition-all duration-700 shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[#d9ff00] text-xl md:text-3xl font-black uppercase tracking-tighter group-hover:mb-2 transition-all">Visit site</span>
                  <ArrowUpRight className="text-[#d9ff00] w-8 h-8 md:w-12 md:h-12 opacity-0 group-hover:opacity-100 transition-all font-light" />
                </div>
              </a>
            </div>
          </div>

          {/* Floating Icons for flare */}
          <div className="absolute top-10 right-10 text-black/20">
            <Sparkles className="w-20 h-20" />
          </div>
          <div className="absolute bottom-10 left-10 text-black/20">
            <Zap className="w-20 h-20" />
          </div>
        </div>

        {/* Footer Stats/Links */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-20 gap-y-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#d9ff00]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#d9ff00]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Secure Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#d9ff00]" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Modern Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
}
