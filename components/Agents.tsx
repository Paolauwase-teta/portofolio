"use client";

import { Cpu, Zap, Infinity, Globe } from "lucide-react";

export default function Agents() {
    const agentFeatures = [
        {
            icon: Cpu,
            title: "Autonomic Systems",
            description: "Agents that monitor, detect, and self-heal your digital infrastructure 24/7."
        },
        {
            icon: Infinity,
            title: "Infinite Scalability",
            description: "Elastic architecture that grows with your user base without manual intervention."
        },
        {
            icon: Zap,
            title: "Real-time Matrix",
            description: "Sub-millisecond latency for data processing across global edge nodes."
        },
        {
            icon: Globe,
            title: "Global Mesh",
            description: "Distributed intelligence that lives everywhere and nowhere simultaneously."
        }
    ];

    return (
        <section className="relative py-48 overflow-hidden bg-[#050505]">
            {/* Background visual element - Central Node with Radiating Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none">
                <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent"></div>
                {/* Recreating the node visual with CSS */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-[2rem] bg-white/[0.01] flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Section Header */}
                <div className="mb-32 flex flex-col items-center">
                    <div className="inline-block px-4 py-2 border border-white/5 bg-white/[0.02] rounded-full text-[9px] text-white/40 mb-8 tracking-[0.4em] uppercase font-bold">
                        THE ARCHITECTURE
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-10 tracking-tighter leading-none">
                        Core <span className="opacity-15 italic font-light">Ecology.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
                        Our systems aren&apos;t just code; they are living ecosystems designed to
                        protect and amplify your brand while you focus on the vision.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {agentFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-10 bg-white/[0.01] border border-white/[0.05] rounded-[2.5rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700 text-left relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <div className="w-14 h-14 bg-white/[0.05] rounded-2xl flex items-center justify-center text-white mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
