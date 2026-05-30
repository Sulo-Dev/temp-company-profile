// src/data/content.ts

export const siteData = {
  hero: {
    title: "Transformasi Digital untuk Masa Depan",
    highlight: "YourCompaniesName Solutions",
    description: "Kami menghadirkan solusi teknologi mutakhir, mulai dari pengembangan web hingga analisis data, untuk mendorong pertumbuhan bisnis Anda ke level selanjutnya.",
    cta1: "Mulai Proyek",
    cta2: "Pelajari Layanan Kami",
  },
  about: {
    title: "Mengenal Kami",
    description: "Didirikan dengan semangat inovasi, kami adalah tim ahli yang berdedikasi menciptakan ekosistem digital yang efisien dan memukau secara visual. Kami percaya bahwa setiap baris kode harus membawa dampak nyata.",
    stats: [
      { label: "Proyek Selesai", value: "120+" },
      { label: "Klien Puas", value: "85+" },
      { label: "Penghargaan", value: "15" },
      { label: "Tahun Pengalaman", value: "5+" },
    ]
  },
  services: [
    {
      id: 1,
      title: "Web & System Development",
      description: "Pembuatan aplikasi berbasis web yang responsif, cepat, dan aman menggunakan teknologi modern seperti Next.js dan React.",
      icon: "Code", 
    },
    {
      id: 2,
      title: "Data Analytics & Modeling",
      description: "Mengolah data mentah menjadi wawasan bisnis yang berharga melalui visualisasi dan pemodelan statistik tingkat lanjut.",
      icon: "LineChart",
    },
    {
      id: 3,
      title: "Learning Management System",
      description: "Membangun platform e-learning yang interaktif dan mudah dikelola untuk institusi pendidikan maupun pelatihan korporat.",
      icon: "GraduationCap",
    },
    {
      id: 4,
      title: "UI/UX & Creative Design",
      description: "Merancang antarmuka pengguna yang estetis dan intuitif, memastikan pengalaman pengguna yang tak terlupakan.",
      icon: "PenTool",
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "Sistem Informasi Akademik Terpadu",
      category: "Pengembangan Website",
      image: "/dummy-1.jpg", // Nanti kita bisa pakai placeholder gambar
    },
    {
      id: 2,
      title: "Aplikasi Pemesanan Makanan",
      category: "API Integration",
      image: "/dummy-2.jpg",
    },
    {
      id: 3,
      title: "Dashboard Analitik Retail",
      category: "Data Analytics",
      image: "/dummy-3.jpg",
    },
    {
      id: 4,
      title: "Laman Berita Online",
      category: "Pengembangan Mobile",
      image: "/dummy-3.jpg",
    },
    {
      id: 5,
      title: "Perancangan UI Aplikasi",
      category: "UI/UX Design",
      image: "/dummy-3.jpg",
    }
  ],
  contact: {
    address: "Jl. Perintis Kemerdekaan, Makassar, Sulawesi Selatan",
    email: "yourcompaniesname@solutions.com",
    phone: "+62 812 3456 7890",
    workingHours: "Senin - Jumat, 09:00 - 17:00 WITA"
  }
};