'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/data/content';
import { Trophy, Users, Briefcase, Clock, Sparkles, Hexagon, CircleDashed } from 'lucide-react';

const getStatIcon = (index: number) => {
  switch (index) {
    case 0: return <Briefcase className="w-6 h-6" />;
    case 1: return <Users className="w-6 h-6" />;
    case 2: return <Trophy className="w-6 h-6" />;
    case 3: return <Clock className="w-6 h-6" />;
    default: return <Sparkles className="w-6 h-6" />;
  }
};

export default function About() {
  return (
    // Background utama tetap slate-950 agar menyatu mulus dengan Services & Portfolio
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* --- EFEK BACKGROUND BERGERAK --- */}
      
      {/* 1. Rising Tech Grid (Grid yang bergerak naik perlahan) */}
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '0px -64px'] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)]"
      />
      
      {/* 2. Orbiting Ambient Lights (Cahaya yang berkeliling lambat) */}
      <motion.div 
        animate={{ 
          x: [0, 60, 0, -60, 0],
          y: [0, 40, 80, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-blue/25 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/4 z-0" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -50, 0, 50, 0],
          y: [0, -40, -80, -40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange-dark/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0" 
      />

      {/* 3. Floating Geometric Nodes (Elemen Geometris Melayang) */}
      <motion.div
        animate={{ y: [-20, 20], rotate: [0, 90] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        className="absolute top-[15%] right-[10%] text-brand-yellow/10 z-0 pointer-events-none hidden lg:block"
      >
        <Hexagon className="w-32 h-32" strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{ y: [20, -20], rotate: [0, -180] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        className="absolute bottom-[20%] left-[5%] text-brand-blue/30 z-0 pointer-events-none hidden lg:block"
      >
        <CircleDashed className="w-40 h-40" strokeWidth={1} />
      </motion.div>


      {/* --- KONTEN UTAMA --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- KOLOM KIRI: TEKS NARASI --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-orange text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(252,122,11,0.1)]"
            >
              <Sparkles className="w-4 h-4 text-brand-yellow animate-pulse" />
              {siteData.about.title}
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight drop-shadow-md"
            >
              Membangun Fondasi <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
                Masa Depan Digital
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {siteData.about.description}
            </motion.p>

            {/* Garis pemisah estetis (Energy Line) */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[2px] w-full max-w-sm bg-white/5 origin-left overflow-hidden rounded-full"
            >
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-brand-orange to-transparent"
              />
            </motion.div>
          </div>

          {/* --- KOLOM KANAN: GRID STATISTIK --- */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {siteData.about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-orange/30 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
              >
                {/* Efek Garis Glow di atas kartu saat hover */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col gap-4">
                  {/* Ikon dengan animasi rotasi/scale saat hover */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:text-brand-yellow group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-md">
                    {getStatIcon(index)}
                  </div>
                  
                  <div>
                    {/* Angka Statistik */}
                    <div className="text-4xl sm:text-5xl font-black text-white mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    {/* Label Statistik */}
                    <div className="text-sm sm:text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}