"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 判断链接是否为当前页面
  const isActive = (path) => {
    return pathname === path;
  };

  // 生成导航链接样式
  const getLinkClass = (path) => {
    return isActive(path) 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" 
      : "text-gray-700 font-medium hover:text-blue-600 transition-colors";
  };

  // 生成移动端导航链接样式
  const getMobileLinkClass = (path) => {
    return isActive(path)
      ? "text-blue-600 font-bold py-2"
      : "text-gray-700 py-2 hover:text-blue-600 transition-colors";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 公司Logo和名称 */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md overflow-hidden relative">
            <Image 
              src="/images/playpicture.png" 
              alt="新吉波Logo" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="text-lg font-semibold text-gray-800 hidden md:block">
            新吉波船舶科技有限公司
          </div>
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={getLinkClass('/')}>
            首页
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            关于我们
          </Link>
          <Link href="/certificates" className={getLinkClass('/certificates')}>
            资格证书
          </Link>
          <Link href="/products" className={getLinkClass('/products')}>
            产品介绍
          </Link>
          <Link href="/contact" className={getLinkClass('/contact')}>
            联系我们
          </Link>
        </nav>

        {/* 移动端菜单按钮 */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="菜单"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
            />
          </svg>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link 
              href="/" 
              className={getMobileLinkClass('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className={getMobileLinkClass('/about')}
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
            <Link 
              href="/certificates" 
              className={getMobileLinkClass('/certificates')}
              onClick={() => setIsMenuOpen(false)}
            >
              资格证书
            </Link>
            <Link 
              href="/products" 
              className={getMobileLinkClass('/products')}
              onClick={() => setIsMenuOpen(false)}
            >
              产品介绍
            </Link>
            <Link 
              href="/contact" 
              className={getMobileLinkClass('/contact')}
              onClick={() => setIsMenuOpen(false)}
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 