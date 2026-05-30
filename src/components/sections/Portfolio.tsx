'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '@/data/content';
import { ArrowUpRight, Sparkles, Layers, MousePointer2, LayoutTemplate } from 'lucide-react';

const dummyImages = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", // 1. Proyek Web
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // 2. Proyek Data
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // 3. Proyek Code
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop", // 4. Laman Berita Online (Layar Laptop)
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", // 5. UI/UX Design (Wireframe & Palet Warna)
];

const techStacks = [
  ["Next.js", "Tailwind", "TypeScript"],
  ["Python", "TensorFlow", "Tableau"],
  ["React", "Node.js", "PostgreSQL"],
  ["PHP", "Laravel", "MySQL"],           // Untuk ID 4 (Portal Berita)
  ["Figma", "Framer", "Adobe XD"],       // Untuk ID 5 (UI/UX Design)
];

const categories = ["Semua", "Web Development", "Data Analytics", "API Integration"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  // Logika Filter yang benar-benar berfungsi
  const filteredPortfolio = siteData.portfolio.filter((item) => 
    activeFilter === "Semua" ? true : item.category === activeFilter
  );

  return (
    <section id="portfolio" className="relative py-32 bg-slate-950 overflow-hidden">
      
      {/* --- EFEK BACKGROUND BERGERAK --- */}
      
      {/* 1. Panning Grid (Grid yang bergeser lambat) */}
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '128px 128px'] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]" 
      />

      {/* 2. Cahaya Pendar Dinamis (Dynamic Ambient Glows) */}
      <motion.div 
        animate={{ 
          x: [0, -70, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-0 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 z-0"
      />
      <motion.div 
        animate={{ 
          x: [0, 70, 0], 
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange-dark/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 z-0"
      />

      {/* 3. Floating Design Elements (Partikel Melayang Khas Portofolio) */}
      <motion.div
        animate={{ y: [-15, 15], rotate: [-10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute top-[20%] right-[10%] text-brand-yellow/20 z-0 pointer-events-none hidden lg:block"
      >
        <LayoutTemplate className="w-24 h-24" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [15, -15], x: [-10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-[30%] left-[8%] text-brand-orange/30 z-0 pointer-events-none hidden lg:block"
      >
        <MousePointer2 className="w-16 h-16 rotate-12" strokeWidth={1.5} />
      </motion.div>


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-orange text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(252,122,11,0.1)]"
            >
              <Layers className="w-4 h-4 text-brand-yellow" />
              Karya Terbaik Kami
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold text-white sm:text-5xl leading-tight drop-shadow-lg"
            >
              Proyek Pilihan yang <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
                Menginspirasi
              </span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-brand-orange-dark hover:to-brand-orange hover:border-transparent transition-all duration-300 font-medium group shadow-lg">
              Lihat Semua Proyek 
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* --- FILTER KATEGORI INTERAKTIF --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category 
                  ? 'bg-gradient-to-r from-brand-orange-dark to-brand-orange border-transparent text-white shadow-[0_0_15px_rgba(252,122,11,0.4)] scale-105' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* --- BENTO GRID PORTOFOLIO (DENGAN ANIMASI FILTER) --- */}
        <motion.div 
          layout // Memungkinkan grid menyesuaikan diri saat item difilter
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                // Kartu pertama DARI HASIL FILTER dibuat lebih lebar
                className={`group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer ${
                  index === 0 && filteredPortfolio.length > 1 ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* 1. Gambar Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  // Memastikan gambar tetap sesuai dengan ID-nya, bukan urutan indeksnya saat difilter
                  style={{ backgroundImage: `url(${dummyImages[(item.id - 1) % dummyImages.length]})` }}
                />
                
                {/* 2. Overlay Hitam Gradasi */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* 3. Badge Kategori di Kiri Atas */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 text-brand-yellow text-xs font-bold tracking-wider uppercase">
                  {item.category}
                </div>

                {/* 4. Floating Glassmorphism Content Box (Di Bawah) */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/10 group-hover:bg-slate-950/60 group-hover:border-brand-orange/50 transition-all duration-500 transform group-hover:-translate-y-2 shadow-2xl">
                    
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-brand-yellow transition-colors">
                        {item.title}
                      </h3>
                      
                      {/* Tombol Panah Membulat */}
                      <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-br group-hover:from-brand-orange-dark group-hover:to-brand-yellow group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Tags Teknologi (Tech Stack) */}
                    <div className="flex flex-wrap gap-2">
                      {techStacks[(item.id - 1) % techStacks.length].map((tech, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}