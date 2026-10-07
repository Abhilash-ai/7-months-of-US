import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Sparkles, Heart } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import TiltCard from './TiltCard';

export default function OpeningScreen({ onBegin }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    soundEngine.playCelebration();
    soundEngine.playPageTurn();
    setTimeout(() => {
      onBegin();
    }, 950);
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-12 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center relative z-20 flex flex-col items-center"
      >
        {/* Confidential Stamp Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200/80 text-burgundy-700 shadow-sm mb-6"
        >
          <Lock className="w-3 h-3 text-burgundy-500" />
          <span className="font-sans text-[11px] font-semibold tracking-widest uppercase">
            CONFIDENTIAL • FOR DUDU’S EYES ONLY
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink-900 leading-[1.15] mb-4">
          7 Months. <br />
          <span className="italic font-serif text-burgundy-700">7 Chapters.</span> <br />
          <span className="gold-shimmer font-semibold">Still Us.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-xl text-ink-600 max-w-md mx-auto mb-10">
          “A little story about Bubu & Dudu.”
        </p>

        {/* 3D Interactive Scrapbook / Envelope */}
        <div className="perspective-1000 w-full max-w-sm mb-10 cursor-pointer" onClick={handleOpen}>
          <TiltCard maxTilt={10} className="w-full">
            <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#F5EFEB] border border-gold-200/90 shadow-2xl overflow-hidden p-6 flex flex-col justify-between group">
              {/* Envelope Border & Airmail Stitching */}
              <div className="absolute inset-1.5 rounded-xl border border-dashed border-burgundy-200/60 pointer-events-none" />

              {/* Envelope Flap 3D Simulation */}
              <motion.div
                animate={isOpen ? { rotateX: -140, opacity: 0.2 } : { rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
                className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#F2EAE0] to-[#EBE0D3] border-b border-cream-400/80 shadow-md flex items-center justify-center z-10"
              >
                {/* Vintage Postal Stamp */}
                <div className="absolute top-3 right-4 px-2 py-1 rounded border border-burgundy-300 text-[10px] font-serif text-burgundy-700 bg-white/70 rotate-3">
                  OCT • 7 MO
                </div>
              </motion.div>

              {/* Letter emerging from envelope */}
              <motion.div
                animate={isOpen ? { y: -70, scale: 1.05 } : { y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-0 mt-8 text-center"
              >
                <span className="font-handwriting text-2xl text-burgundy-700 block">
                  To my dearest Dudu,
                </span>
                <p className="font-sans text-xs text-ink-500 mt-1 max-w-xs mx-auto">
                  Seven months of little memories, inside jokes, and finding our way back.
                </p>
              </motion.div>

              {/* Wax Seal Center Button */}
              <div className="relative z-20 flex flex-col items-center justify-center my-auto">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen();
                  }}
                  className="wax-seal w-16 h-16 rounded-full flex flex-col items-center justify-center cursor-pointer group-hover:shadow-rose-glow transition-all"
                  aria-label="Break wax seal and open story"
                >
                  <span className="text-[10px] font-serif font-bold text-gold-300 tracking-wider">VII</span>
                  <Heart className="w-4 h-4 text-cream-100 fill-cream-100/40 mt-0.5" />
                </motion.button>
                <span className="text-[11px] font-handwriting text-ink-500 mt-2">
                  {isOpen ? "Opening memory book..." : "Tap seal to unseal"}
                </span>
              </div>

              {/* Bottom Postmark Details */}
              <div className="flex items-center justify-between text-[10px] text-ink-400 font-serif border-t border-cream-200/60 pt-2 z-20">
                <span>MEMOIRE NO. 07</span>
                <span className="italic">Special Delivery 🕊️</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Begin The Story Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          className="group relative inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-cream-50 font-sans text-sm font-medium tracking-wide shadow-xl shadow-burgundy-900/15 transition-all duration-300 border border-gold-300/40"
        >
          <span>Begin the story</span>
          <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Quiet Subtext */}
        <p className="mt-4 font-sans text-xs text-ink-400">
          Best viewed with sound on • Swipe or tap to turn pages
        </p>
      </motion.div>
    </div>
  );
}
