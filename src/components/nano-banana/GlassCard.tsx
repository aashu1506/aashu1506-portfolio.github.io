"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
        transition-colors duration-500
        hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
        group
        ${className}
      `}
    >
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
