import React, { useEffect, useRef } from 'react';

interface ConfettiProps {
  active: boolean;
  onFinish?: () => void;
}

export const Confetti: React.FC<ConfettiProps> = ({ active, onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#F59E0B', '#10B981', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#FFFFFF'];
    const particleCount = 75;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 80,
      y: window.innerHeight * 0.65,
      vx: (Math.random() - 0.5) * 12,
      vy: -Math.random() * 14 - 6,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 10,
      alpha: 1,
    }));

    let animationId: number;
    const startTime = performance.now();

    const render = (time: number) => {
      const elapsed = time - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.985;
        p.rotation += p.vr;
        if (elapsed > 1800) {
          p.alpha -= 0.02;
        }

        if (p.alpha > 0 && p.y < canvas.height + 50) {
          aliveCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      });

      if (aliveCount > 0 && elapsed < 3500) {
        animationId = requestAnimationFrame(render);
      } else {
        onFinish?.();
      }
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [active, onFinish]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};
