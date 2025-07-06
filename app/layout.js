import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "新吉波船舶科技有限公司 - 专注船舶技术创新",
  description: "新吉波船舶科技有限公司是一家专注于船舶技术研发与创新的企业，致力于为海洋工程和航运业提供先进的技术解决方案。",
  icons: {
    icon: '/images/playpicture.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
