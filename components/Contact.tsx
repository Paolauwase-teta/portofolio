"use client";

import { Mail, ArrowUpRight, Send, Github } from "lucide-react";

export default function Contact() {
  const contactCards = [
    {
      title: 'Email',
      value: 'paolauwase555@gmail.com',
      href: 'mailto:paolauwase555@gmail.com',
      icon: Mail
    },
    {
      title: 'GitHub',
      value: 'Paolauwase-teta',
      href: 'https://github.com/Paolauwase-teta',
      icon: Github
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-[#000000] selection:bg-[#d9ff00]/30">

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d9ff00]/20 bg-[#d9ff00]/5 mb-8 text-[#d9ff00]">
              <span className="text-[10px] font-bold uppercase tracking-widest">Inquiry</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-light text-white mb-6 tracking-tight leading-none">
              Let&apos;s build the <span className="italic font-serif text-gray-500">future</span>.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
              Ready to transform your vision into a high-performance digital reality? Reach out below.
            </p>
          </div>

          {/* Centered Contact Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target="_blank"
                className="group flex items-center justify-between p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:border-[#d9ff00]/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-white/5 flex items-center justify-center text-white group-hover:bg-[#d9ff00] group-hover:text-black transition-all">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-600 mb-1 uppercase tracking-widest">{card.title}</div>
                    <div className="text-lg font-bold text-white tracking-tight">{card.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#d9ff00] transition-colors" />
              </a>
            ))}
          </div>

          {/* Centered Form */}
          <div className="w-full p-1 bg-white/[0.01] border border-white/5 rounded-[3.5rem]">
            <div className="bg-[#0a0a0a] rounded-[3.2rem] p-8 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
                <div className="group">
                  <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4 ml-2 group-focus-within:text-[#d9ff00] transition-colors">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#111111] border border-white/5 rounded-2xl py-5 px-7 text-white focus:outline-none focus:border-[#d9ff00]/50 transition-all placeholder:text-gray-800"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4 ml-2 group-focus-within:text-[#d9ff00] transition-colors">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-[#111111] border border-white/5 rounded-2xl py-5 px-7 text-white focus:outline-none focus:border-[#d9ff00]/50 transition-all placeholder:text-gray-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="group text-left mb-12">
                <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-4 ml-2 group-focus-within:text-[#d9ff00] transition-colors">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#111111] border border-white/5 rounded-2xl py-5 px-7 text-white focus:outline-none focus:border-[#d9ff00]/50 transition-all placeholder:text-gray-800 resize-none"
                  placeholder="Tell me about your project goals..."
                ></textarea>
              </div>

              <button className="group w-full max-w-sm mx-auto bg-[#d9ff00] text-black py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
