"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#000000] border-t border-white/5 py-24">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Highlighted Name */}
                <div className="mb-16 text-center">
                    <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-none mb-4">
                        PAOLA <span className="text-[#d9ff00]">UWASE</span>
                    </h2>
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.5em]">Senior Digital Engineer & Architect</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-12 mb-20 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                    <a href="#home" className="hover:text-[#d9ff00] transition-colors">Home</a>
                    <a href="#projects" className="hover:text-[#d9ff00] transition-colors">Works</a>
                    <a href="#about" className="hover:text-[#d9ff00] transition-colors">Journey</a>
                    <a href="#skills" className="hover:text-[#d9ff00] transition-colors">Capabilities</a>
                    <a href="#contact" className="hover:text-[#d9ff00] transition-colors">Contact</a>
                </div>

                {/* Bottom Line */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                        © {currentYear} ALL RIGHTS RESERVED
                    </div>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                        <a href="https://github.com/Paolauwase-teta" target="_blank" className="hover:text-white transition-colors">Github</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
