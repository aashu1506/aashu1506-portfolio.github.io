"use client";
import React from 'react';
import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Transform for first text (0% - center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Transform for second text (30% - left)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [100, 0, -100]);

  // Transform for third text (60% - right)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [100, 0, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      
      {/* 0% -> My Name. Creative Developer. (center) */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }} 
        className="absolute text-center w-full px-4"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference">
          Ayush.
        </h1>
        <p className="text-xl md:text-3xl font-medium text-white/90 mt-4 mix-blend-difference">
          Creative Developer.
        </p>
      </motion.div>

      {/* 30% -> I build digital experiences. (left) */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }} 
        className="absolute left-[5%] md:left-[10%] text-left max-w-2xl px-4"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight drop-shadow-2xl">
          I build digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">experiences.</span>
        </h2>
      </motion.div>

      {/* 60% -> Bridging design and engineering. (right) */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }} 
        className="absolute right-[5%] md:right-[10%] text-right max-w-2xl px-4"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight drop-shadow-2xl">
          Bridging <span className="italic text-white/80">design</span> <br/>
          and engineering.
        </h2>
      </motion.div>
    </div>
  );
}
