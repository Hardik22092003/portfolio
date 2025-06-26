import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 120;
const STAR_COLOR = 'rgba(255,255,255,0.85)';
const STAR_SIZE = 1.2;
const STAR_SPEED = 0.15;

function randomStar(canvasWidth, canvasHeight) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    z: Math.random() * canvasWidth,
  };
}

function randomShootingStar(width, height) {
  const angle = Math.random() * Math.PI / 3 - Math.PI / 6; // -30deg to +30deg
  return {
    x: Math.random() * width * 0.7 + width * 0.15,
    y: Math.random() * height * 0.5 + height * 0.1,
    vx: Math.cos(angle) * 12,
    vy: Math.sin(angle) * 12,
    life: 0,
    maxLife: 40 + Math.random() * 20,
  };
}

const Starfield = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const shootingStar = useRef(null);
  const shootingTimer = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars.current = Array.from({ length: STAR_COUNT }, () => randomStar(width, height));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw stars
      for (let star of stars.current) {
        star.z -= STAR_SPEED;
        if (star.z <= 0) {
          Object.assign(star, randomStar(width, height));
          star.z = width;
        }
        const k = 128.0 / star.z;
        const sx = star.x * k + width / 2;
        const sy = star.y * k + height / 2;
        if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue;
        ctx.beginPath();
        ctx.arc(sx, sy, STAR_SIZE, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = '#a21caf'; // purple glow
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      // Draw shooting star
      if (shootingStar.current) {
        const s = shootingStar.current;
        ctx.save();
        ctx.globalAlpha = 0.8 * (1 - s.life / s.maxLife);
        ctx.strokeStyle = '#fff';
        ctx.shadowColor = '#a21caf';
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 4, s.y - s.vy * 4);
        ctx.stroke();
        ctx.restore();
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        if (s.life > s.maxLife) shootingStar.current = null;
      }
    }

    function animate() {
      draw();
      // Shooting star logic
      if (!shootingStar.current && shootingTimer.current <= 0) {
        if (Math.random() < 0.01) { // ~1% chance per frame
          shootingStar.current = randomShootingStar(width, height);
          shootingTimer.current = 120 + Math.random() * 100;
        }
      } else if (shootingTimer.current > 0) {
        shootingTimer.current--;
      }
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
};

export default Starfield; 