"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        {
            q: "Can I use your template for commercial purposes?",
            a: "Yes, all our architectural patterns and codebases are built for high-performance commercial use cases. We focus on scalability and production-readiness."
        },
        {
            q: "How do I contact the technical support?",
            a: "You can reach out via the contact form below or email hi@paola.dev directly for priority engineering support."
        },
        {
            q: "Is there a get started trial period?",
            a: "We offer intensive architecture consultations where we deep-dive into your project requirements before any long-term commitment."
        },
        {
            q: "What technologies do you specialize in?",
            a: "We are experts in Next.js, React Native, TypeScript, and high-performance cloud architectures. We build for the future."
        }
    ];

    return (
        <section className="py-32 bg-black overflow-hidden selection:bg-[#d9ff00]/30">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
                        <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Help Center</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium text-white">
                        We&apos;ve got the <span className="text-gray-500 italic">answers.</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-[#0a0a0a] border-[#d9ff00]/20' : 'bg-transparent border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-8 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-[#d9ff00]' : 'text-white'}`}>
                                    {item.q}
                                </span>
                                <div className={`flex-none w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#d9ff00] text-black rotate-180' : 'bg-white/5 text-white'
                                    }`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-8 text-gray-400 text-sm leading-relaxed max-w-2xl">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
