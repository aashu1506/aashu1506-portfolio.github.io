"use client";
import React from 'react';
import { GlassCard } from './nano-banana/GlassCard';
import { ArrowUpRight, Code, Palette, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "immersive-web",
      description: "High performance WebGL experiences crafted for elite brands.",
      icon: <Zap className="w-8 h-8 text-yellow-400 mb-4" />
    },
    {
      title: "motion-ui",
      description: "Fluid animation systems bridging the gap between design and engineering.",
      icon: <Palette className="w-8 h-8 text-pink-400 mb-4" />
    },
    {
      title: "core-systems",
      description: "Robust, scalable architectures powering next-gen web applications.",
      icon: <Code className="w-8 h-8 text-blue-400 mb-4" />
    }
  ];

  return (
    <section className="relative z-20 min-h-screen bg-black text-white px-6 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">Selected Work</h2>
          <div className="h-px w-full bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <GlassCard key={idx}>
              {project.icon}
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                Explore <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
