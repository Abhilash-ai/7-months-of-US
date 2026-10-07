import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CHAPTER_PALETTES = {
  0: { color1: 0xC5A059, color2: 0xE7D076, bgAlpha: 0.08 }, // Opening: Warm Gold
  1: { color1: 0xEE9768, color2: 0xFAD2B8, bgAlpha: 0.10 }, // Daddu: Playful Peach & Amber
  2: { color1: 0x722F37, color2: 0xD4AF37, bgAlpha: 0.12 }, // Misunderstanding: Burgundy & Kintsugi Gold
  3: { color1: 0xC5A059, color2: 0xE2D3C4, bgAlpha: 0.09 }, // Dudu Unlocked: Craft & Warm Ivory
  4: { color1: 0xC34A4A, color2: 0xF2BAC4, bgAlpha: 0.12 }, // Naraz: Blush & Muted Red
  5: { color1: 0xD4AF37, color2: 0xEE9768, bgAlpha: 0.14 }, // Caring: Deep Golden Glow
  6: { color1: 0xA98336, color2: 0x8FA988, bgAlpha: 0.10 }, // Kolkata: Vintage Sepia & Sage
  7: { color1: 0xB28DC3, color2: 0xE7D076, bgAlpha: 0.13 }, // Still Us: Twilight Lavender & Gold
  8: { color1: 0xD4AF37, color2: 0xC34A4A, bgAlpha: 0.15 }, // Final Reveal: Rose Gold & Starlight
};

export default function ThreeCanvas({ currentStep = 0 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry & Texture
    const particleCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = [];

    // Create a smooth circular particle sprite texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
    gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const particleTexture = new THREE.CanvasTexture(canvas);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      scales[i] = Math.random() * 0.8 + 0.3;

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: Math.random() * 0.02 + 0.008,
        z: (Math.random() - 0.5) * 0.01,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAngle: Math.random() * Math.PI * 2,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const palette = CHAPTER_PALETTES[currentStep] || CHAPTER_PALETTES[0];
    const material = new THREE.PointsMaterial({
      size: 1.8,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color(palette.color1),
      opacity: 0.65,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX += (mouseX * 2.5 - targetX) * 0.04;
      targetY += (-mouseY * 2.5 - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Particle float motion
      const positionAttr = geometry.attributes.position;
      const posArray = positionAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const vel = velocities[i];
        vel.swayAngle += vel.swaySpeed;

        posArray[i * 3] += vel.x + Math.sin(vel.swayAngle) * 0.01;
        posArray[i * 3 + 1] += vel.y;
        posArray[i * 3 + 2] += vel.z;

        // Wrap around boundaries
        if (posArray[i * 3 + 1] > 25) {
          posArray[i * 3 + 1] = -25;
          posArray[i * 3] = (Math.random() - 0.5) * 50;
        }
      }

      positionAttr.needsUpdate = true;
      points.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [currentStep]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
