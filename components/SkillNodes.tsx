"use client";

import React from "react";
import { Cpu, Zap, Palette, Boxes, MousePointer2, Smartphone } from "lucide-react";

const skills = [
    { icon: Palette, title: "Bold Visuals", desc: "High-end 3D graphics & UI", color: "purple" },
    { icon: Cpu, title: "AI-Driven", desc: "Smart personalization systems", color: "blue" },
    { icon: Zap, title: "Performance", desc: "Ultra-fast loading systems", color: "orange" },
    { icon: MousePointer2, title: "Smooth UX", desc: "Fluid micro-animations", color: "pink" },
    { icon: Boxes, title: "Scalable Logic", desc: "Clean backend architecture", color: "emerald" },
    { icon: Smartphone, title: "Mobile Ready", desc: "Touch-optimized precision", color: "cyan" },
];

export default function SkillNodes() {
    return (
        <section id="skills" className="relative py-24 bg-[#000000] overflow-hidden">
            <div className="container mx-auto px-6 relative flex flex-col items-center">

                {/* Spider Web Layout - Desktop */}
                <div className="hidden lg:flex relative w-[900px] h-[600px] items-center justify-center">

                    {/* Central Node */}
                    <div className="relative z-30 group">
                        <div className="absolute inset-0 bg-purple-500/20 blur-[60px] group-hover:bg-purple-500/30 transition-all"></div>
                        <div className="relative p-12 glass-card border-purple-500/20 bg-black/40 backdrop-blur-2xl text-center">
                            <h3 className="text-sm font-bold tracking-[0.3em] text-purple-400 uppercase mb-4">The Stack</h3>
                            <h2 className="text-3xl font-bold text-white tracking-tighter leading-tight">
                                CORE<br />EXPERTISE<br /><span className="text-gray-500">2026</span>
                            </h2>
                        </div>
                    </div>

                    {/* Radiating Nodes */}
                    {/* Top Left */}
                    <div className="absolute top-[5%] left-[10%] z-40">
                        <SkillBox item={skills[0]} />
                        <ConnectionLine className="top-full left-full -rotate-[25deg] origin-top-left w-[200px]" />
                    </div>

                    {/* Top Right */}
                    <div className="absolute top-[5%] right-[10%] z-40">
                        <SkillBox item={skills[1]} />
                        <ConnectionLine className="top-full right-full rotate-[25deg] origin-top-right w-[200px]" />
                    </div>

                    {/* Mid Left */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[0%] z-40">
                        <SkillBox item={skills[2]} />
                        <ConnectionLine className="top-1/2 left-full -translate-y-1/2 w-[180px]" />
                    </div>

                    {/* Mid Right */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-[0%] z-40">
                        <SkillBox item={skills[3]} />
                        <ConnectionLine className="top-1/2 right-full -translate-y-1/2 w-[180px]" />
                    </div>

                    {/* Bottom Left */}
                    <div className="absolute bottom-[5%] left-[10%] z-40">
                        <SkillBox item={skills[4]} />
                        <ConnectionLine className="bottom-full left-full rotate-[25deg] origin-bottom-left w-[200px]" />
                    </div>

                    {/* Bottom Right */}
                    <div className="absolute bottom-[5%] right-[10%] z-40">
                        <SkillBox item={skills[5]} />
                        <ConnectionLine className="bottom-full right-full -rotate-[25deg] origin-bottom-right w-[200px]" />
                    </div>
                </div>

                {/* Mobile Layout - Simple Grid */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Core Expertise</h2>
                        <p className="text-gray-500">Mastering the future of digital experiences.</p>
                    </div>
                    {skills.map((s, i) => (
                        <div key={i} className="p-8 glass-card bg-white/[0.02]">
                            <s.icon className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-sm text-gray-500">{s.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function SkillBox({ item }: { item: any }) {
    return (
        <div className="px-8 py-6 glass-card border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition-all group w-[240px]">
            <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-[15px]">{item.title}</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
        </div>
    );
}

function ConnectionLine({ className }: { className?: string }) {
    return (
        <div className={`absolute h-[1px] bg-gradient-to-r from-white/10 to-transparent pointer-events-none ${className}`}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20"></div>
        </div>
    );
}
