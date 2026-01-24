"use client";

import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Pack",
      price: "$500",
      desc: "Perfect for single-page applications and MVPs.",
      features: [
        "Landing Page Design",
        "Frontend Implementation",
        "Responsive Setup",
        "Basic Animations",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      name: "Professional Pack",
      price: "$1,500",
      desc: "For growing businesses needing a full digital product.",
      features: [
        "Full Web/Mobile App",
        "Custom UI/UX System",
        "API Integration",
        "Advanced GSAP Animations",
        "SEO Optimization",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Pack",
      price: "Custom",
      desc: "Complex architectures for large-scale operations.",
      features: [
        "Scalable Infrastructure",
        "Multi-platform Ecosystem",
        "Security Audits",
        "Real-time Data Systems",
        "Dedicated Engineering",
        "Unlimited Revisions"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#000000] selection:bg-[#d9ff00]/30">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col mb-20 text-center items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#d9ff00]"></div>
            <span className="text-[10px] font-bold text-[#d9ff00] uppercase tracking-[0.4em]">Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white max-w-2xl leading-tight">
            Transparent pricing for <span className="text-gray-500">elite engineering.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-12 rounded-[3.5rem] border transition-all duration-500 ${plan.popular
                ? 'bg-[#0a0a0a] border-[#d9ff00]/20 shadow-[0_0_40px_rgba(217,255,0,0.05)]'
                : 'bg-[#0a0a0a] border-white/5'
                }`}
            >
              <div className="mb-10">
                <span className="text-5xl font-bold text-white mb-4 block tracking-tighter">
                  {plan.price}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {plan.desc}
                </p>
              </div>

              <button
                className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest mb-12 transition-all flex items-center justify-center gap-3 group ${plan.popular
                  ? 'bg-[#d9ff00] text-black shadow-[0_10px_30px_rgba(217,255,0,0.2)]'
                  : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
              >
                Choose plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#d9ff00]/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#d9ff00]/20">
                      <Check className="w-3 h-3 text-[#d9ff00]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
