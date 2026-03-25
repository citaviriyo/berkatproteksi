"use client";

import { Phone, CheckCircle, Clock, Star, Wrench, TrendingUp, Users, AlertCircle, ChevronRight, MessageCircle, ShieldCheck, Mail } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

export default function BerkatProteksi() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOrbY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroCardY = useTransform(scrollY, [0, 500], [0, -24]);
  const heroGridY = useTransform(scrollY, [0, 600], [0, 70]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const selector = ".hero-main-card, .premium-pricing-card, .premium-button, .premium-badge";
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const handleMove = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const pointerEvent = event as PointerEvent;
      const rect = target.getBoundingClientRect();
      const x = ((pointerEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((pointerEvent.clientY - rect.top) / rect.height) * 100;

      target.style.setProperty("--pointer-x", `${x}%`);
      target.style.setProperty("--pointer-y", `${y}%`);
    };

    const handleLeave = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--pointer-x", "50%");
      target.style.setProperty("--pointer-y", "50%");
    };

    elements.forEach((element) => {
      element.style.setProperty("--pointer-x", "50%");
      element.style.setProperty("--pointer-y", "50%");
      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", handleLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("pointermove", handleMove);
        element.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const revealUp = {
    hidden: { opacity: 0, y: 38, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const revealLeft = {
    hidden: { opacity: 0, x: -42, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const revealRight = {
    hidden: { opacity: 0, x: 42, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const riderCards = [
    {
      title: "Banjir",
      description: "Perlindungan khusus untuk kerusakan akibat banjir atau genangan air.",
      theme: "flood",
      illustration: (
        <div className="service-illustration service-illustration-flood" aria-hidden="true">
          <div className="rain rain-1" />
          <div className="rain rain-2" />
          <div className="rain rain-3" />
          <div className="rain rain-4" />
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />
          <div className="car-silhouette" />
        </div>
      ),
    },
    {
      title: "Huru-Hara",
      description: "Perlindungan dari kerusakan akibat kerusuhan atau huru-hara massa.",
      theme: "riot",
      illustration: (
        <div className="service-illustration service-illustration-riot" aria-hidden="true">
          <div className="smoke smoke-1" />
          <div className="smoke smoke-2" />
          <div className="flame flame-1" />
          <div className="flame flame-2" />
          <div className="flame flame-3" />
          <div className="shard shard-1" />
          <div className="shard shard-2" />
          <div className="shard shard-3" />
          <div className="barrier" />
        </div>
      ),
    },
    {
      title: "Gempa Bumi",
      description: "Perlindungan untuk kerusakan akibat gempa bumi dan tsunami.",
      theme: "earthquake",
      illustration: (
        <div className="service-illustration service-illustration-earthquake" aria-hidden="true">
          <div className="quake-hill" />
          <div className="quake-line quake-line-1" />
          <div className="quake-line quake-line-2" />
          <div className="quake-line quake-line-3" />
          <div className="house-block" />
          <div className="dust dust-1" />
          <div className="dust dust-2" />
        </div>
      ),
    },
    {
      title: "Tanggung Jawab Hukum Pihak Ketiga (TJH)",
      description: "Perlindungan atas tanggung jawab hukum terhadap kerusakan harta benda atau cedera badan pihak ketiga yang disebabkan oleh kendaraan Anda, sesuai ketentuan polis.",
      theme: "liability",
      illustration: (
        <div className="service-illustration service-illustration-liability" aria-hidden="true">
          <div className="shield-ring" />
          <div className="shield-core" />
          <div className="person person-left" />
          <div className="person person-right" />
          <div className="link-beam" />
        </div>
      ),
    },
    {
      title: "Kecelakaan Diri (PA)",
      description: "Perlindungan untuk pengemudi dan penumpang akibat kecelakaan.",
      theme: "accident",
      illustration: (
        <div className="service-illustration service-illustration-accident" aria-hidden="true">
          <div className="crash-spark spark-1" />
          <div className="crash-spark spark-2" />
          <div className="crash-spark spark-3" />
          <div className="car-wreck car-wreck-left" />
          <div className="car-wreck car-wreck-right" />
          <div className="impact-core" />
        </div>
      ),
    },
    {
      title: "Fasilitas Bengkel Resmi",
      description: "Perlindungan tambahan yang memberikan akses perbaikan kendaraan di bengkel resmi sesuai ketentuan dan jaringan bengkel dalam polis Anda.",
      theme: "workshop",
      illustration: (
        <div className="service-illustration service-illustration-workshop" aria-hidden="true">
          <div className="gear gear-1" />
          <div className="gear gear-2" />
          <div className="wrench-shape" />
          <div className="tool-line tool-line-1" />
          <div className="tool-line tool-line-2" />
        </div>
      ),
    },
  ];

  return (
    <div className="premium-page min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={revealUp}
        className="premium-hero-section premium-section-light relative overflow-hidden"
      >
        <div className="hero-mesh" aria-hidden="true" />
        <motion.div className="hero-blob hero-blob-1" style={{ y: heroOrbY }} />
        <motion.div className="hero-blob hero-blob-2" style={{ y: heroGridY }} />
        <motion.div className="hero-blob hero-blob-3" style={{ y: heroCardY }} />
        <motion.div className="hero-blob hero-blob-4" style={{ y: heroOrbY }} />
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="hero-particle"
              style={
                {
                  "--delay": `${index * 0.45}s`,
                  "--left": `${8 + index * 7}%`,
                  "--size": `${10 + (index % 4) * 6}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={revealUp}
              style={{ y: heroCardY }}
              className="hero-main-card premium-glass-card rounded-[2rem] p-8 md:p-14"
            >
              <div className="hero-card-glow" aria-hidden="true" />
              <div className="hero-card-edge" aria-hidden="true" />
              <div className="text-center">
                <div className="flex justify-center mb-7">
                  <motion.div
                    whileHover={{ scale: 1.06, rotate: 2 }}
                    className="hero-logo-shell bg-yellow-100/80 p-6 rounded-full shadow-lg backdrop-blur-md"
                  >
                    <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-20 h-20 object-cover rounded-full shadow-md" />
                  </motion.div>
                </div>
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-7 leading-tight">
                  Lindungi Mobil Anda dengan Tenang Bersama <span className="text-yellow-600">Berkat Proteksi</span>
                </h1>
                <p className="hero-subtitle text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Dapatkan perlindungan kendaraan dengan pendampingan, kemudahan proses, bantuan klaim, akses bengkel resmi, dan premi yang kompetitif.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <motion.a
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/6287838817889" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="premium-button premium-button-primary hero-cta-button text-white font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 floating-icon" />
                    Cek Premi Sekarang
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/6287838817889" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="premium-button premium-button-secondary hero-cta-button text-yellow-700 font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5 floating-icon" />
                    Konsultasi Gratis
                  </motion.a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span className="hero-chip flex items-center gap-2 px-5 py-3 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-yellow-600 floating-icon" />
                    Online 24/7
                  </span>
                  <span className="hero-chip flex items-center gap-2 px-5 py-3 rounded-full shadow-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600 floating-icon" />
                    Respon Cepat
                  </span>
                  <span className="hero-chip flex items-center gap-2 px-5 py-3 rounded-full shadow-sm">
                    <Star className="w-4 h-4 text-yellow-600 floating-icon" />
                    Fokus pada kenyamanan dan kemudahan Anda
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="section-divider section-divider-light" aria-hidden="true" />
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealLeft}
        className="premium-section-gradient relative py-24"
      >
        <div className="section-orb section-orb-left" aria-hidden="true" />
        <div className="section-orb section-orb-soft section-orb-soft-right" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Tentang Berkat Proteksi
            </h2>
            <p className="section-intro text-lg text-gray-700 text-center mb-14 leading-relaxed">
              Berkat Proteksi adalah brand layanan pemasaran dan konsultasi asuransi kendaraan yang membantu Anda mendapatkan perlindungan mobil yang sesuai kebutuhan. Kami membantu menjelaskan manfaat perlindungan, memberikan rekomendasi yang sesuai profil risiko, dan mendampingi proses mulai dari pengecekan premi hingga bantuan administrasi klaim.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div whileHover={{ scale: 1.06, y: -8, rotate: -1.2 }} transition={{ duration: 0.45, delay: 0.02 }} className="premium-soft-card premium-card text-center p-7 rounded-[1.6rem]">
                <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3 floating-icon" />
                <h3 className="font-semibold text-gray-900 mb-2">Penjelasan Manfaat</h3>
                <p className="text-sm text-gray-600">Bahasa yang mudah dipahami</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -8, rotate: 1.2 }} transition={{ duration: 0.45, delay: 0.08 }} className="premium-soft-card premium-card text-center p-7 rounded-[1.6rem]">
                <div className="bg-yellow-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rekomendasi Tepat</h3>
                <p className="text-sm text-gray-600">Perlindungan yang sesuai kebutuhan</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -8, rotate: -1.2 }} transition={{ duration: 0.45, delay: 0.14 }} className="premium-soft-card premium-card text-center p-7 rounded-[1.6rem]">
                <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3 floating-icon" />
                <h3 className="font-semibold text-gray-900 mb-2">Pendampingan Penuh</h3>
                <p className="text-sm text-gray-600">Dari awal hingga klaim</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -8, rotate: 1.2 }} transition={{ duration: 0.45, delay: 0.2 }} className="premium-soft-card premium-card text-center p-7 rounded-[1.6rem]">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3 floating-icon" />
                <h3 className="font-semibold text-gray-900 mb-2">Layanan Terbaik</h3>
                <p className="text-sm text-gray-600">Transparan, responsif, dan ramah</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="section-divider section-divider-angle" aria-hidden="true" />
      </motion.section>

      {/* Services Section 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealRight}
        className="premium-section-dark relative py-24"
      >
        <div className="section-orb section-orb-right" aria-hidden="true" />
        <div className="section-orb section-orb-soft section-orb-soft-left" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Kenapa Pilih Berkat Proteksi?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: -1 }} transition={{ duration: 0.45, delay: 0.02 }} className="premium-glass-card premium-card premium-card-dark p-8 rounded-[1.75rem]">
              <div className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <AlertCircle className="w-8 h-8 text-yellow-300 floating-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Pendampingan Klaim yang Sederhana</h3>
              <p className="text-white/80">Kami membantu mengarahkan proses klaim sesuai ketentuan polis agar Anda tidak bingung saat terjadi musibah.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: 1 }} transition={{ duration: 0.45, delay: 0.08 }} className="premium-glass-card premium-card premium-card-dark p-8 rounded-[1.75rem]">
              <div className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <Wrench className="w-8 h-8 text-yellow-300 floating-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Akses Bengkel Resmi & Rekanan</h3>
              <p className="text-white/80">Kami menginformasikan bengkel resmi dan bengkel rekanan yang tersedia sesuai polis Anda.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: -1 }} transition={{ duration: 0.45, delay: 0.14 }} className="premium-glass-card premium-card premium-card-dark p-8 rounded-[1.75rem]">
              <div className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <TrendingUp className="w-8 h-8 text-yellow-300 floating-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Premi Kompetitif</h3>
              <p className="text-white/80">Kami membantu menemukan ilustrasi premi yang kompetitif, fleksibel, dan sesuai anggaran Anda.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: 1 }} transition={{ duration: 0.45, delay: 0.2 }} className="premium-glass-card premium-card premium-card-dark p-8 rounded-[1.75rem]">
              <div className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <Users className="w-8 h-8 text-yellow-300 floating-icon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dipercaya Banyak Pemilik Kendaraan</h3>
              <p className="text-white/80">Hadir untuk pemilik kendaraan yang ingin mengurus perlindungan dengan lebih tenang dan terarah.</p>
            </motion.div>
          </div>
        </div>
        <div className="section-divider section-divider-dark" aria-hidden="true" />
      </motion.section>

      {/* Services Section 2 - Jenis Perlindungan */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealLeft}
        className="premium-section-light relative py-24"
      >
        <div className="section-orb section-orb-center" aria-hidden="true" />
        <div className="section-orb section-orb-soft section-orb-soft-right" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Jenis Asuransi Mobil
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: -0.8 }} transition={{ duration: 0.45, delay: 0.03 }} className="premium-soft-card premium-card premium-card-feature p-8 rounded-[1.9rem] border border-white/70">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/85 p-3 rounded-full shadow-lg backdrop-blur-md">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">All Risk (Komprehensif)</h3>
              </div>
              <p className="text-gray-700 mb-6">Perlindungan menyeluruh untuk berbagai jenis kerusakan kendaraan, baik ringan maupun berat, hingga kehilangan total. Ideal untuk Anda yang ingin memastikan kendaraan tetap aman dan terlindungi dalam berbagai situasi.</p>
              <div className="bg-white/80 p-4 rounded-xl mb-6 backdrop-blur-md border border-white/70">
                <h4 className="font-semibold text-gray-900 mb-3">Melindungi (sesuai polis):</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Lecet & penyok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Tabrakan ringan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Tabrakan berat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Kerusakan berat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Kehilangan total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Pencurian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Kebakaran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Terbalik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 floating-icon" />
                    <span className="text-gray-700">Bencana alam</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -10, rotate: 0.8 }} transition={{ duration: 0.45, delay: 0.1 }} className="premium-soft-card premium-soft-card-cool premium-card premium-card-feature p-8 rounded-[1.9rem] border border-white/70">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/85 p-3 rounded-full shadow-lg backdrop-blur-md">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">TLO (Total Loss Only)</h3>
              </div>
              <p className="text-gray-700 mb-6">Perlindungan untuk kerusakan berat tertentu dan kehilangan total kendaraan.</p>
              <div className="bg-white/80 p-4 rounded-xl mb-6 backdrop-blur-md border border-white/70">
                <h4 className="font-semibold text-gray-900 mb-3">Melindungi (sesuai polis):</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 floating-icon" />
                    <span className="text-gray-700">Kerusakan {">"} persentase tertentu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 floating-icon" />
                    <span className="text-gray-700">Kehilangan total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 floating-icon" />
                    <span className="text-gray-700">Premi lebih ekonomis</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <motion.div whileHover={{ scale: 1.03, y: -4 }} className="premium-soft-card premium-card p-6 rounded-[1.65rem] border border-white/70">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-6 h-6 text-yellow-600 floating-icon" />
                <h4 className="font-bold text-gray-900">Tips Cerdas:</h4>
              </div>
              <p className="text-gray-700">
                Pertimbangkan rider: banjir, huru-hara, gempa bumi, dan TJH — tergantung ketersediaan polis perusahaan asuransi.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="section-divider section-divider-light" aria-hidden="true" />
      </motion.section>

      {/* Pilihan Perluasan (Rider Opsional) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealRight}
        className="premium-section-gradient relative py-24"
      >
        <div className="section-orb section-orb-soft section-orb-soft-left" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Pilihan Perluasan (Rider Opsional)
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.02, y: -4 }} className="premium-soft-card premium-card p-8 rounded-[1.75rem] mb-10 border border-white/70">
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Tambahkan perlindungan ekstra untuk kendaraan Anda dengan pilihan perluasan berikut:
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riderCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ scale: 1.06, y: -10, rotate: card.theme === "riot" || card.theme === "accident" ? -0.9 : 0.9 }}
                  transition={{ duration: 0.45 }}
                  className={`service-story-card service-story-card-${card.theme} p-6 md:p-7 rounded-[1.35rem] border`}
                >
                  <div className="service-story-glow" aria-hidden="true" />
                  <div className="service-story-media">
                    {card.illustration}
                  </div>
                  <div className="service-story-copy">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="service-badge">
                        {card.title === "Fasilitas Bengkel Resmi" ? (
                          <Wrench className="w-5 h-5" />
                        ) : card.title === "Tanggung Jawab Hukum Pihak Ketiga (TJH)" ? (
                          <ShieldCheck className="w-5 h-5" />
                        ) : card.title === "Kecelakaan Diri (PA)" ? (
                          <Users className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white drop-shadow-sm">{card.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-divider section-divider-angle" aria-hidden="true" />
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealLeft}
        className="premium-section-dark relative py-24"
      >
        <div className="section-orb section-orb-left" aria-hidden="true" />
        <div className="pricing-spotlight" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Pilihan Paket Asuransi
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div whileHover={{ scale: 1.04, y: -8, rotate: -0.8 }} className="premium-pricing-card premium-pricing-card-side p-8 md:p-9 rounded-[1.9rem] border">
              <div className="text-center mb-6">
                <div className="bg-white/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-md">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">TLO</h3>
                <p className="text-white/70">Perlindungan Dasar</p>
              </div>
              <div className="mb-8">
                <div className="pricing-price pricing-price-side text-white mb-4">Mulai dari Rp 500rb/thn</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Kerusakan berat sesuai polis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Kehilangan total</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Bantuan administrasi klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-button premium-button-muted pricing-button w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 floating-icon" />
                Pilih Paket
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06, y: -12 }} className="premium-pricing-card premium-pricing-card-featured p-8 md:p-10 rounded-[2rem] border relative md:scale-[1.09]">
              <div className="premium-pricing-glow" aria-hidden="true" />
              <div className="absolute left-1/2 top-0 z-20 premium-badge premium-badge-floating text-white px-4 py-2 rounded-full text-xs font-semibold tracking-[0.14em] uppercase">
                Paling Populer
              </div>
              <div className="text-center mb-6">
                <div className="bg-white/18 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-md">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Comprehensive</h3>
                <p className="text-white/75">Perlindungan Komprehensif</p>
              </div>
              <div className="mb-8">
                <div className="pricing-price pricing-price-featured text-white mb-4">Mulai dari Rp 2.5jt/thn</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-200 floating-icon" />
                  <span className="text-white/85">Semua perlindungan TLO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-200 floating-icon" />
                  <span className="text-white/85">Kerusakan ringan & berat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-200 floating-icon" />
                  <span className="text-white/85">Pencurian & kebakaran</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-200 floating-icon" />
                  <span className="text-white/85">Bantuan administrasi klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-button premium-button-primary pricing-button w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 floating-icon" />
                Pilih Paket
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -8, rotate: 0.8 }} className="premium-pricing-card premium-pricing-card-side p-8 md:p-9 rounded-[1.9rem] border">
              <div className="text-center mb-6">
                <div className="bg-white/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-md">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">All Risk</h3>
                <p className="text-white/70">Perlindungan Maksimal</p>
              </div>
              <div className="mb-8">
                <div className="pricing-price pricing-price-side text-white mb-4">Mulai dari Rp 3.5jt/thn</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Semua perlindungan Comprehensive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Perluasan banjir</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Perluasan huru-hara</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Bencana alam</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Tanggung jawab hukum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300 floating-icon" />
                  <span className="text-white/80">Prioritas klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-button premium-button-muted pricing-button w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 floating-icon" />
                Pilih Paket
              </a>
            </motion.div>
          </div>
        </div>
        <div className="section-divider section-divider-dark" aria-hidden="true" />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={revealRight}
        className="premium-section-gradient relative py-24"
      >
        <div className="section-orb section-orb-soft section-orb-soft-right" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Apa saja jenis asuransi mobil yang tersedia?",
                  answer: "Kami menawarkan dua jenis utama: TLO (Total Loss Only) untuk perlindungan dasar dengan premi lebih terjangkau, dan All Risk (Komprehensif) untuk perlindungan penuh dari berbagai risiko kerusakan."
                },
                {
                  question: "Bagaimana cara mengajukan klaim asuransi?",
                  answer: "Kami akan membantu proses klaim Anda. Hubungi kami segera setelah kejadian, kami akan bantu menguruskan dokumen yang diperlukan dan mengarahkan ke bengkel yang tepat sesuai polis Anda."
                },
                {
                  question: "Berapa lama proses klaim biasanya?",
                  answer: "Proses klaim biasanya 3-7 hari kerja tergantung kompleksitas kasus dan kelengkapan dokumen. Kami akan bantu mempercepat prosesnya."
                },
                {
                  question: "Apa saja dokumen yang diperlukan untuk klaim?",
                  answer: "Dokumen yang biasa diperlukan: fotokopi polis, SIM pengemudi, STNK, formulir klaim, foto kerusakan, dan laporan polisi (jika ada)."
                }
              ].map((faq, index) => (
                <motion.div key={index} whileHover={{ scale: 1.015, x: index % 2 === 0 ? -3 : 3 }} className={`premium-soft-card premium-card premium-faq-item rounded-[1.35rem] ${expandedFaq === index ? 'premium-faq-item-open' : ''}`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/35 transition-colors duration-300 rounded-[1.35rem]"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className={`faq-chevron-shell ${expandedFaq === index ? 'faq-chevron-shell-open' : ''}`}>
                      <ChevronRight className={`w-4 h-4 faq-chevron ${expandedFaq === index ? 'faq-chevron-open' : ''}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="premium-footer text-white py-16">
        <div className="footer-divider-glow" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 items-start">
            <div className="footer-column">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="footer-brand text-xl font-bold">Berkat Proteksi</h3>
              </div>
              <p className="footer-copy text-gray-400">Layanan konsultasi dan pemasaran asuransi kendaraan terpercaya.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-semibold mb-4">Layanan</h4>
              <ul className="footer-list text-gray-400">
                <li>All Risk</li>
                <li>TLO</li>
                <li>Perluasan</li>
                <li>Konsultasi</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-semibold mb-4">Hubungi Kami</h4>
              <ul className="footer-list text-gray-400">
                <li className="footer-contact-item">
                  <Phone className="footer-icon w-4 h-4" />
                  <span className="whitespace-nowrap">WhatsApp: +62 878-3881-7889</span>
                </li>
                <li className="footer-contact-item footer-contact-item-start">
                  <Mail className="footer-icon w-4 h-4" />
                  <span>Email: info@berkatproteksi.my.id</span>
                </li>
                <li className="footer-contact-item">
                  <MessageCircle className="footer-icon w-4 h-4" />
                  <span>Fast response di jam kerja</span>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-semibold mb-4">Jam Operasional</h4>
              <ul className="footer-list text-gray-400">
                <li>Senin - Jumat: 08:00 - 21:00</li>
                <li>Sabtu: 08:00 - 18:00</li>
                <li>Minggu: 09:00 - 17:00</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Berkat Proteksi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
