'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// 基础动画属性类型
interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// 向上淡入效果
export const FadeUp = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 向下淡入效果
export const FadeDown = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 向左淡入效果
export const FadeLeft = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 向右淡入效果
export const FadeRight = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 缩放进入效果
export const ScaleIn = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.5, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 悬浮动画
export const Float = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 滚动出现动画（需要在视口中才会触发）
export const ScrollReveal = ({ children, className = '', delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 交错动画（用于列表项）
export const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.15 
}: Omit<AnimationProps, 'delay'> & { staggerDelay?: number }) => (
  <motion.div
    initial="hidden"
    animate="show"
    className={className}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// 交错子项
export const StaggerItem = ({ children, className = '' }: Omit<AnimationProps, 'delay'>) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] 
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 简单淡入
export function FadeIn({ children, className = '', delay = 0, duration = 0.5 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 项目卡片专用动画
export function AnimatedCard({ children, className = '', delay = 0, duration = 0.5 }: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      {children}
    </motion.div>
  );
}

// 悬停动画
interface HoverAnimationProps extends AnimationProps {
  scale?: number;
}

export function HoverScale({ children, className = '', scale = 1.05 }: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
} 