"use client";
import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';
import Overlay from './Overlay';

const frameCount = 120;
const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            loadedCount += 1;
            if (loadedCount === frameCount) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };
        loadedImages[i] = img;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (!isLoaded || images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const index = Math.round(latest);
    const img = images[index];

    if (img) {
      if (canvas.width !== img.width || canvas.height !== img.height) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  });

  // Initial draw
  useEffect(() => {
    if (isLoaded && images.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx && images[0]) {
        canvas.width = images[0].width;
        canvas.height = images[0].height;
        ctx.drawImage(images[0], 0, 0);
      }
    }
  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!isLoaded && (
            <div className="absolute inset-x-0 bottom-10 flex justify-center text-white/50 text-sm z-50 animate-pulse">
                Loading Sequence...
            </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
