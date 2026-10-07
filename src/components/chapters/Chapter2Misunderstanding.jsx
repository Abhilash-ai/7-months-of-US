import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, RefreshCw } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

export default function Chapter2Misunderstanding() {
  const [mendProgress, setMendProgress] = useState(0); // 0 (fragmented) to 100 (healed/unified)

  const handleMendFull = () => {
    soundEngine.playCelebration();
    setMendProgress(100);
  };

  const isMended = mendProgress > 75;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 border border-burgundy-200 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 02
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ fragile moments & healing ~
          </span>
        </div>

        <span className="text-xs font-serif text-burgundy-600 italic">
          {isMended ? "✨ Bond strengthened with gold" : "Drag slider to mend"}
        </span>
      </motion.div>

      <div className="space-y-8">
        {/* Main Interactive Fragmented / Mended Card */}
        <TiltCard maxTilt={5}>
          <div className="relative rounded-3xl bg-cream-50/90 border border-burgundy-200/60 p-6 sm:p-10 shadow-glass overflow-hidden">
            {/* Background Kintsugi Ambient Golden Line */}
            <svg
              className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
                isMended ? 'opacity-100' : 'opacity-20'
              }`}
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 50,200 Q 250,120 400,210 T 750,190"
                fill="none"
                stroke="#D4AF37"
                strokeWidth={isMended ? "3.5" : "1.5"}
                strokeDasharray={isMended ? "none" : "6 6"}
                className={isMended ? "animate-kintsugi" : ""}
              />
              <motion.path
                d="M 400,210 Q 520,320 620,380"
                fill="none"
                stroke="#E5C158"
                strokeWidth={isMended ? "2.5" : "1"}
                className={isMended ? "animate-kintsugi" : ""}
              />
            </svg>

            {/* Title */}
            <div className="relative z-10 text-center sm:text-left mb-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold">
                02 — The Misunderstanding
              </h2>
              <p className="font-sans text-xs text-ink-500 uppercase tracking-widest mt-1">
                From distance to understanding
              </p>
            </div>

            {/* Fragmented Shards Animation Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {/* Shard 1 */}
              <motion.div
                animate={{
                  x: (100 - mendProgress) * -0.25,
                  rotate: (100 - mendProgress) * -0.06,
                  borderColor: isMended ? '#D4AF37' : 'rgba(114,47,55,0.2)',
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="p-5 rounded-2xl bg-white/75 backdrop-blur-md border shadow-sm relative"
              >
                <div className="text-xs font-serif text-burgundy-500 font-semibold mb-2 uppercase tracking-wider">
                  Phase I
                </div>
                <p className="font-serif text-lg sm:text-xl text-ink-800 leading-snug">
                  “Misunderstandings.<br />Conflicts.<br />Things that weren't exactly easy.”
                </p>
              </motion.div>

              {/* Shard 2 */}
              <motion.div
                animate={{
                  y: (100 - mendProgress) * 0.15,
                  borderColor: isMended ? '#D4AF37' : 'rgba(114,47,55,0.2)',
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="p-5 rounded-2xl bg-white/75 backdrop-blur-md border shadow-sm relative"
              >
                <div className="text-xs font-serif text-burgundy-500 font-semibold mb-2 uppercase tracking-wider">
                  Phase II
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-burgundy-800 leading-snug">
                  “We probably could've stopped here.”
                </p>
                <p className="font-sans text-xs text-ink-500 mt-2">
                  Any normal story might have drifted apart right at this chapter.
                </p>
              </motion.div>

              {/* Shard 3 */}
              <motion.div
                animate={{
                  x: (100 - mendProgress) * 0.25,
                  rotate: (100 - mendProgress) * 0.06,
                  borderColor: isMended ? '#D4AF37' : 'rgba(114,47,55,0.2)',
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border shadow-sm relative"
              >
                <div className="text-xs font-serif text-burgundy-500 font-semibold mb-2 uppercase tracking-wider">
                  Phase III
                </div>
                <p className="font-serif font-semibold text-lg sm:text-xl text-ink-900 leading-snug">
                  “But somehow, <br /><span className="gold-shimmer font-bold">we didn't.</span>”
                </p>
                <p className="font-sans text-xs text-ink-600 mt-2">
                  We chose to listen, forgive, and stay.
                </p>
              </motion.div>
            </div>

            {/* Interactive Mending Slider & Actions */}
            <div className="relative z-10 pt-4 border-t border-cream-200/80">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-2/3">
                  <div className="flex justify-between text-xs font-sans text-ink-600 mb-2">
                    <span>Distance & Silence</span>
                    <span className="font-semibold text-burgundy-700">
                      {mendProgress}% Understanding
                    </span>
                    <span className="text-gold-600 font-medium">Golden Kintsugi</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={mendProgress}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setMendProgress(val);
                      if (val === 100) soundEngine.playCelebration();
                    }}
                    className="w-full accent-burgundy-600 cursor-pointer h-2 bg-cream-200 rounded-lg appearance-none"
                  />
                </div>

                <button
                  onClick={handleMendFull}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-500 text-burgundy-900 font-sans text-xs font-semibold flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95 whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mend with Gold ✨</span>
                </button>
              </div>

              {/* Reveal message on mending */}
              {isMended && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-2xl bg-gold-50/80 border border-gold-200 text-center"
                >
                  <p className="font-serif italic text-base sm:text-lg text-burgundy-800">
                    “In Japanese kintsugi, broken things are repaired with molten gold. They become rarer, stronger, and more beautiful. That's what happened to us.” ❤️
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
