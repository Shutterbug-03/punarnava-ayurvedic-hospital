'use client';

import React, { useEffect, useRef } from 'react';

interface SplineMotionBackgroundProps {
  intensity?: 'subtle' | 'vibrant';
  theme?: 'dark' | 'light';
}

export default function SplineMotionBackground({
  intensity = 'subtle',
  theme = 'light',
}: SplineMotionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Floating Botanical / Herbal Ojas particles
    const particleCount = intensity === 'vibrant' ? 24 : 14;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1.2,
      baseSpeedX: (Math.random() - 0.5) * 0.4,
      baseSpeedY: (Math.random() - 0.5) * 0.4 - 0.15,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.6 ? '#C59138' : '#144835',
    }));

    let time = 0;

    const render = () => {
      time += 0.007;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Spline Wave 1: Deep Herbal Current
      ctx.beginPath();
      const wave1Gradient = ctx.createLinearGradient(0, 0, width, height);
      if (theme === 'dark') {
        wave1Gradient.addColorStop(0, 'rgba(197, 145, 56, 0.08)');
        wave1Gradient.addColorStop(0.5, 'rgba(20, 72, 53, 0.18)');
        wave1Gradient.addColorStop(1, 'rgba(9, 33, 25, 0.0)');
      } else {
        wave1Gradient.addColorStop(0, 'rgba(197, 145, 56, 0.06)');
        wave1Gradient.addColorStop(0.5, 'rgba(20, 72, 53, 0.07)');
        wave1Gradient.addColorStop(1, 'rgba(244, 239, 230, 0.0)');
      }

      ctx.fillStyle = wave1Gradient;

      const segments = 6;
      ctx.moveTo(0, height);
      ctx.lineTo(0, height * 0.45);

      for (let i = 0; i <= segments; i++) {
        const x = (width / segments) * i;
        const mouseFactor = (1 - Math.abs(x - mouseX) / width) * 20;
        const y =
          height * 0.45 +
          Math.sin(time + i * 0.8) * 35 +
          Math.cos(time * 0.8 + i) * 20 +
          mouseFactor;

        if (i === 0) {
          ctx.lineTo(x, y);
        } else {
          const prevX = (width / segments) * (i - 1);
          const prevY =
            height * 0.45 +
            Math.sin(time + (i - 1) * 0.8) * 35 +
            Math.cos(time * 0.8 + (i - 1)) * 20;
          const cpX = (prevX + x) / 2;
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
        }
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Spline Wave 2: Suvarna Ochre Aura (Warm Gold stream)
      ctx.beginPath();
      const wave2Gradient = ctx.createLinearGradient(width, 0, 0, height);
      wave2Gradient.addColorStop(0, 'rgba(197, 145, 56, 0.08)');
      wave2Gradient.addColorStop(0.6, 'rgba(223, 171, 78, 0.04)');
      wave2Gradient.addColorStop(1, 'rgba(250, 247, 242, 0.0)');
      ctx.fillStyle = wave2Gradient;

      ctx.moveTo(0, height);
      ctx.lineTo(0, height * 0.6);

      for (let i = 0; i <= segments; i++) {
        const x = (width / segments) * i;
        const y =
          height * 0.58 +
          Math.sin(time * 1.2 + i * 0.9) * 30 +
          Math.cos(time * 0.6 + i * 1.1) * 25;

        if (i === 0) {
          ctx.lineTo(x, y);
        } else {
          const prevX = (width / segments) * (i - 1);
          const prevY =
            height * 0.58 +
            Math.sin(time * 1.2 + (i - 1) * 0.9) * 30 +
            Math.cos(time * 0.6 + (i - 1) * 1.1) * 25;
          const cpX = (prevX + x) / 2;
          ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
        }
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Floating Botanical Particles
      particles.forEach((p) => {
        p.x += p.baseSpeedX;
        p.y += p.baseSpeedY;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="spline-canvas-wrap pointer-events-none select-none transition-opacity duration-700"
      style={{ opacity: 0.92 }}
    />
  );
}
