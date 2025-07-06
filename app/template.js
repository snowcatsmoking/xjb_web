"use client";

import { motion } from "framer-motion";

// 页面模板组件，用于处理页面切换效果
export default function Template({ children }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ 
        type: "tween", 
        ease: "easeOut", 
        duration: 0.7 
      }}
    >
      {children}
    </motion.main>
  );
} 