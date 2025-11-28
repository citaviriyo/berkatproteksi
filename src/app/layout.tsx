import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berkat Proteksi - Perlindungan Kendaraan",
  description: "Berkat Proteksi menyediakan informasi perlindungan mobil, estimasi premi, dan panduan klaim secara jelas dan mudah dipahami.",
  keywords: ["asuransi mobil","perlindungan kendaraan","estimasi premi","klaim asuransi mobil","Berkat Proteksi"],
  authors: [{ name: "Berkat Proteksi" }],
  
    
  
  openGraph: {
    title: "Berkat Proteksi",
    description: "Layanan perlindungan kendaraan yang aman, mudah, dan terpercaya.",
    url: "https://berkatproteksi.my.id",
    siteName: "Berkat Proteksi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkat Proteksi",
    description: "Solusi perlindungan kendaraan yang praktis dan kompetitif.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
