'use client';

import { motion } from 'framer-motion';
import { siteData } from '@/data/content';
import { ArrowRight, Sparkles, Plus, Circle } from 'lucide-react'; 

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-blue px-6 py-24 text-center">
      
      {/* 1. GRID BERJALAN (Infinite Panning Grid) */}
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '64px 64px'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-50 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_80%,transparent_100%)]" 
      />

      {/* 2. CAHAYA BERKELILING (Aggressive Floating Orbs) */}
      {/* Cahaya Oranye (Bergerak Luas) */}
      <motion.div 
        animate={{ 
          y: [0, -150, 50, 0],
          x: [0, 150, -100, 0],
          scale: [1, 1.4, 0.9, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange-dark/30 rounded-full blur-[100px] pointer-events-none z-0"
      />
      
      {/* Cahaya Kuning (Berlawanan Arah) */}
      <motion.div 
        animate={{ 
          y: [0, 100, -150, 0],
          x: [0, -150, 150, 0],
          scale: [1, 1.2, 1.6, 1],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 3. PARTIKEL GEOMETRIS MELAYANG (Visual Kedalaman 3D) */}
      {/* Ikon Plus Berputar Kiri Atas */}
      <motion.div
        animate={{ y: [-20, 20], rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        className="absolute top-[25%] left-[15%] text-brand-orange/40 z-0 pointer-events-none hidden md:block"
      >
        <Plus className="w-12 h-12" />
      </motion.div>

      {/* Ikon Lingkaran Kanan Bawah */}
      <motion.div
        animate={{ y: [30, -30], x: [-20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-[30%] right-[15%] text-brand-yellow/30 z-0 pointer-events-none hidden md:block"
      >
        <Circle className="w-10 h-10" />
      </motion.div>

      {/* Titik Cahaya Bintang Berkedip (Pulsing Star) */}
      <motion.div
        animate={{ scale: [1, 2, 1], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] right-[25%] w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_20px_#FF9F03] z-0 pointer-events-none"
      />

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-brand-orange/30 bg-white/5 backdrop-blur-md text-brand-yellow text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(252,122,11,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
          {siteData.hero.highlight}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-7xl text-white drop-shadow-2xl"
        >
          {siteData.hero.title.split('untuk')[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-dark via-brand-orange to-brand-yellow drop-shadow-sm">
            untuk {siteData.hero.title.split('untuk')[1]}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg leading-8 text-gray-300 max-w-3xl mx-auto drop-shadow-md"
        >
          {siteData.hero.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#contact" className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-orange-dark to-brand-orange px-8 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(252,122,11,0.5)] hover:shadow-[0_0_40px_rgba(255,159,3,0.8)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
            {siteData.hero.cta1}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="group rounded-full px-8 py-4 text-sm font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto shadow-lg">
            {siteData.hero.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}