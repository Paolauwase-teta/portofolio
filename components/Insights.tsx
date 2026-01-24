"use client";

import { Smartphone, Monitor, Palette, Wrench, Zap, ShieldCheck, Check } from "lucide-react";

export default function Insights() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications using React Native and Expo.",
      features: ["iOS & Android", "Native Performance", "App Store Deployment"]
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Modern, responsive web applications with cutting-edge React technologies.",
      features: ["Next.js Mastery", "SEO Optimization", "Web Vitals Focused"]
    },
    {
      icon: Palette,
      title: "UI/UX Engineering",
      description: "Pixel-perfect implementation of designs with fluid, complex animations.",
      features: ["Design to Code", "Micro-interactions", "High Fidelity"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-black overflow-hidden selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col mb-20 text-center items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
            <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight">
            Specialized engineering services for <span className="text-gray-500">elite digital products.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] group hover:border-[#d9ff00]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-[#111111] border border-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    <Check className="w-4 h-4 text-[#d9ff00]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
