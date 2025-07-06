"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// 页面过渡动画组件
export default function PageTransition({ children }) {
  const pathname = usePathname();
  
  // 简单的淡入淡出效果，适合企业网站的专业形象
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ 
          type: "tween", // 使用简单的补间动画
          ease: "easeInOut", 
          duration: 0.3 // 较短的持续时间，确保快速但不生硬
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 