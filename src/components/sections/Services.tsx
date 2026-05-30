'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/data/content';
import { Code, LineChart, GraduationCap, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code className="w-7 h-7" />;
    case 'LineChart': return <LineChart className="w-7 h-7" />;
    case 'GraduationCap': return <GraduationCap className="w-7 h-7" />;
    case 'PenTool': return <PenTool className="w-7 h-7" />;
    default: return <Code className="w-7 h-7" />;
  }
};

const dummyFeatures = [
  "Optimasi Performa Tinggi",
  "Keamanan Data Terjamin",
  "Dukungan Teknis 24/7"
];

export default function Services() {
  return (
    <section id="services" className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-brand-blue via-[#01123a] to-slate-950">
      
      {/* --- EFEK BACKGROUND ANIMASI --- */}
      
      {/* 1. Pola Titik Berjalan (Flowing Dot Matrix) */}
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:40px_40px] opacity-40 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]" 
      />
      
      {/* 2. Cahaya Berpendar yang Bergerak (Roaming Glows) */}
      <motion.div 
        animate={{ 
          y: [0, 80, 0], 
          x: [0, -50, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange-dark/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, -80, 0], 
          x: [0, 50, 0],
          scale: [1, 1.5, 1], 
          opacity: [0.1, 0.25, 0.1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/50 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* 3. Floating Tech Elements (Elemen Kode Melayang) */}
      <motion.div
        animate={{ y: [-20, 20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] text-6xl font-black text-white/[0.03] z-0 pointer-events-none hidden lg:block select-none"
      >
        {"{ }"}
      </motion.div>
      <motion.div
        animate={{ y: [20, -20], x: [-10, 10], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[8%] text-7xl font-black text-brand-orange/[0.03] z-0 pointer-events-none hidden lg:block select-none"
      >
        {"< />"}
      </motion.div>

      {/* --- KONTEN UTAMA --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-yellow text-sm font-semibold tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Layanan Utama
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight drop-shadow-lg"
          >
            Solusi Nyata untuk <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
              Skala Bisnis Anda
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Kami memadukan kreativitas dan teknologi mutakhir untuk menghasilkan ekosistem digital yang tidak hanya menawan secara visual, tetapi juga berkinerja tinggi.
          </motion.p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] hover:border-brand-orange/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full backdrop-blur-sm"
            >


              {/* Garis Glow Dekoratif di Atas Kartu saat Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-grow">
                {/* Ikon & Judul */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow group-hover:bg-gradient-to-br group-hover:from-brand-orange-dark group-hover:to-brand-yellow group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:rotate-3">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Deskripsi */}
                <p className="text-gray-400 leading-relaxed mb-8 text-base">
                  {service.description}
                </p>

                {/* List Keunggulan */}
                <ul className="space-y-3 mb-8">
                  {dummyFeatures.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange/80 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tombol CTA */}
              <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}