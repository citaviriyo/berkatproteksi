"use client";

import { Shield, Phone, CheckCircle, Clock, Star, Award, Wrench, TrendingUp, Users, Car, AlertCircle, HelpCircle, MessageCircle, MapPin, ShieldCheck, Droplets, Flame, Home } from 'lucide-react';
import { useState } from 'react';

export default function BerkatProteksi() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 to-amber-100/30"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-yellow-100 p-6 rounded-full shadow-lg">
                    <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-20 h-20 object-cover rounded-full shadow-md" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Lindungi Mobil Anda dengan Tenang Bersama <span className="text-yellow-600">Berkat Proteksi</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Dapatkan perlindungan kendaraan dengan pendampingan, kemudahan proses, bantuan klaim, akses bengkel resmi, dan premi yang kompetitif.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="https://wa.me/6287838817889" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cek Premi Sekarang
                  </a>
                  <a 
                    href="https://wa.me/6287838817889" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 text-yellow-600 border-2 border-yellow-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Konsultasi Gratis
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    Online 24/7
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full shadow-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    Respon Cepat
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full shadow-sm">
                    <Star className="w-4 h-4 text-yellow-600" />
                    Fokus pada kenyamanan dan kemudahan Anda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Tentang Berkat Proteksi
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              Berkat Proteksi adalah brand layanan pemasaran dan konsultasi asuransi kendaraan yang membantu Anda mendapatkan perlindungan mobil yang sesuai kebutuhan. Kami membantu menjelaskan manfaat perlindungan, memberikan rekomendasi yang sesuai profil risiko, dan mendampingi proses mulai dari pengecekan premi hingga bantuan administrasi klaim.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Penjelasan Manfaat</h3>
                <p className="text-sm text-gray-600">Bahasa yang mudah dipahami</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-yellow-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rekomendasi Tepat</h3>
                <p className="text-sm text-gray-600">Perlindungan yang sesuai kebutuhan</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Pendampingan Penuh</h3>
                <p className="text-sm text-gray-600">Dari awal hingga klaim</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Layanan Terbaik</h3>
                <p className="text-sm text-gray-600">Transparan, responsif, dan ramah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section 1 */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Kenapa Pilih Berkat Proteksi?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pendampingan Klaim yang Sederhana</h3>
              <p className="text-gray-700">Kami membantu mengarahkan proses klaim sesuai ketentuan polis agar Anda tidak bingung saat terjadi musibah.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akses Bengkel Resmi & Rekanan</h3>
              <p className="text-gray-700">Kami menginformasikan bengkel resmi dan bengkel rekanan yang tersedia sesuai polis Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premi Kompetitif</h3>
              <p className="text-gray-700">Kami membantu menemukan ilustrasi premi yang kompetitif, fleksibel, dan sesuai anggaran Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dipercaya Banyak Pemilik Kendaraan</h3>
              <p className="text-gray-700">Hadir untuk pemilik kendaraan yang ingin mengurus perlindungan dengan lebih tenang dan terarah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section 2 - Jenis Perlindungan */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Jenis Asuransi Mobil
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-3 rounded-full">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">All Risk (Komprehensif)</h3>
              </div>
              <p className="text-gray-700 mb-6">Perlindungan menyeluruh untuk berbagai jenis kerusakan kendaraan, baik ringan maupun berat, hingga kehilangan total. Ideal untuk Anda yang ingin memastikan kendaraan tetap aman dan terlindungi dalam berbagai situasi.</p>
              <div className="bg-white p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Melindungi (sesuai polis):</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Lecet & penyok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Tabrakan ringan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Tabrakan berat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Kerusakan berat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Kehilangan total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Pencurian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Kebakaran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Terbalik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Bencana alam</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-3 rounded-full">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">TLO (Total Loss Only)</h3>
              </div>
              <p className="text-gray-700 mb-6">Perlindungan untuk kerusakan berat tertentu dan kehilangan total kendaraan.</p>
              <div className="bg-white p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Melindungi (sesuai polis):</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Kerusakan {">"} persentase tertentu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Kehilangan total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Premi lebih ekonomis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-6 h-6 text-yellow-600" />
                <h4 className="font-bold text-gray-900">Tips Cerdas:</h4>
              </div>
              <p className="text-gray-700">
                Pertimbangkan rider: banjir, huru-hara, gempa bumi, dan TJH — tergantung ketersediaan polis perusahaan asuransi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilihan Perluasan (Rider Opsional) */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Pilihan Perluasan (Rider Opsional)
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-2xl shadow-lg mb-8">
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Tambahkan perlindungan ekstra untuk kendaraan Anda dengan pilihan perluasan berikut:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Droplets className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Banjir</h3>
                </div>
                <p className="text-gray-700">Perlindungan khusus untuk kerusakan akibat banjir atau genangan air.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Huru-Hara</h3>
                </div>
                <p className="text-gray-700">Perlindungan dari kerusakan akibat kerusuhan atau huru-hara massa.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Home className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Gempa Bumi</h3>
                </div>
                <p className="text-gray-700">Perlindungan untuk kerusakan akibat gempa bumi dan tsunami.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Tanggung Jawab Hukum Pihak Ketiga (TJH)</h3>
                </div>
                <p className="text-gray-700">Perlindungan atas tanggung jawab hukum terhadap kerusakan harta benda atau cedera badan pihak ketiga yang disebabkan oleh kendaraan Anda, sesuai ketentuan polis.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Kecelakaan Diri (PA)</h3>
                </div>
                <p className="text-gray-700">Perlindungan untuk pengemudi dan penumpang akibat kecelakaan.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Wrench className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Fasilitas Bengkel Resmi</h3>
                </div>
                <p className="text-gray-700">Perlindungan tambahan yang memberikan akses perbaikan kendaraan di bengkel resmi sesuai ketentuan dan jaringan bengkel dalam polis Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Pilihan Paket Asuransi
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">TLO</h3>
                <p className="text-gray-600">Perlindungan Dasar</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">Mulai dari Rp 500rb/thn</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Kerusakan berat sesuai polis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Kehilangan total</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Bantuan administrasi klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Pilih Paket
              </a>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Paling Populer
              </div>
              <div className="text-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive</h3>
                <p className="text-gray-600">Perlindungan Komprehensif</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">Mulai dari Rp 2.5jt/thn</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Semua perlindungan TLO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Kerusakan ringan & berat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Pencurian & kebakaran</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Bantuan administrasi klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Pilih Paket
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">All Risk</h3>
                <p className="text-gray-600">Perlindungan Maksimal</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">Mulai dari Rp 3.5jt/thn</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Semua perlindungan Comprehensive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Perluasan banjir</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Perluasan huru-hara</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Bencana alam</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Tanggung jawab hukum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Prioritas klaim</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/6287838817889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
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
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <HelpCircle className={`w-5 h-5 text-yellow-600 transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <img src="/logo-berkatproteksi.jpg" alt="Berkat Proteksi Logo" className="w-8 h-8 object-cover rounded-full shadow-sm" />
                </div>
                <h3 className="text-xl font-bold">Berkat Proteksi</h3>
              </div>
              <p className="text-gray-400">Layanan konsultasi dan pemasaran asuransi kendaraan terpercaya.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>All Risk</li>
                <li>TLO</li>
                <li>Perluasan</li>
                <li>Konsultasi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp: +62 878-3881-7889
                </li>
                  Email: info@berkatproteksi.my.id
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Fast response di jam kerja
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Jumat: 08:00 - 21:00</li>
                <li>Sabtu: 08:00 - 18:00</li>
                <li>Minggu: 09:00 - 17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Berkat Proteksi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
