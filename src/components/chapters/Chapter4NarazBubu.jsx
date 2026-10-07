import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Flame, Heart, Sparkles, Smile, RefreshCw, BellRing } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

export default function Chapter4NarazBubu() {
  const [narazLevel, setNarazLevel] = useState(100); // 100% down to 0%

  const reduceNaraz = (amount) => {
    soundEngine.playPop();
    setNarazLevel((prev) => {
      const next = Math.max(0, prev - amount);
      if (next === 0) {
        soundEngine.playCelebration();
      }
      return next;
    });
  };

  const resetNaraz = () => {
    soundEngine.playPop();
    setNarazLevel(100);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 04
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ the dramatic pout incident ~
          </span>
        </div>

        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs">
          <BellRing className="w-3.5 h-3.5 text-rose-600 animate-bounce" />
          <span className="font-sans font-medium text-[11px]">Drama Level: High 😤</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The Story */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={6}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="washi-tape washi-tape-pink -top-3 left-10" />

              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold mb-6">
                04 — The Naraz Bubu
              </h2>

              {/* Story Narrative */}
              <div className="space-y-3 font-sans text-base sm:text-lg text-ink-800 leading-relaxed">
                <div className="p-4 rounded-2xl bg-white/70 border border-cream-200 space-y-1.5">
                  <p className="flex items-center space-x-2">
                    <span className="text-rose-500">✦</span>
                    <span>Bubu had gifts.</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-rose-500">✦</span>
                    <span>Bubu had plans.</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-rose-500">✦</span>
                    <span>Bubu had been waiting.</span>
                  </p>
                </div>

                <p className="font-serif italic text-xl text-rose-700 py-1">
                  “Dudu didn't meet him.”
                </p>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
                  <span className="text-xs uppercase tracking-widest text-rose-600 font-semibold font-sans block mb-1">
                    System Calculation Result
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-800">
                    Bubu = NARAZ. 😤😂
                  </p>
                </div>
              </div>

              {/* Heartfelt reveal quote */}
              <div className="mt-6 pt-6 border-t border-cream-200">
                <AnimatePresence>
                  {narazLevel < 30 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-2xl bg-burgundy-50 border border-burgundy-200 shadow-sm"
                    >
                      <p className="font-serif italic text-xl text-burgundy-800 leading-snug">
                        “Even when I was angry, I still wanted to give you those gifts.” ❤️
                      </p>
                      <p className="font-sans text-xs text-ink-500 mt-2">
                        Because no matter how much Bubu sulks, Bubu's heart never forgets who it belongs to.
                      </p>
                    </motion.div>
                  ) : (
                    <p className="text-xs font-handwriting text-ink-500 text-center">
                      (Calm down Bubu's meter using the buttons on the right to unlock secret truth!)
                    </p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Animated Narazness Meter & Pacification Mini-game */}
        <div className="lg:col-span-5 space-y-4">
          <TiltCard maxTilt={8}>
            <div className="glass-card-warm rounded-3xl p-6 border border-rose-200 shadow-glass">
              {/* Meter Title */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-base font-semibold text-rose-900 flex items-center space-x-1.5">
                  <Flame className={`w-4 h-4 ${narazLevel > 0 ? 'text-rose-600 animate-pulse' : 'text-gray-400'}`} />
                  <span>NARAZNESS METER</span>
                </span>
                <span className="font-mono text-lg font-bold text-rose-700">
                  {narazLevel}%
                </span>
              </div>

              {/* Meter Bar */}
              <div className="w-full h-5 rounded-full bg-cream-200 p-1 border border-cream-300 relative overflow-hidden mb-4">
                <motion.div
                  animate={{ width: `${narazLevel}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-burgundy-600 shadow-sm"
                />
              </div>

              <div className="text-center mb-5">
                <span className="font-handwriting text-lg text-rose-800">
                  {narazLevel > 70
                    ? "“Pout mode: CRITICAL! Do not approach without treats!” 😾"
                    : narazLevel > 20
                    ? "“Bubu is listening... but still crossing his arms.” 😒"
                    : "“Maan gaye! All forgiven with love!” 🤍🥰"}
                </span>
              </div>

              {/* Pacification Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => reduceNaraz(35)}
                  disabled={narazLevel === 0}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/90 hover:bg-white text-ink-800 text-xs font-sans font-medium border border-rose-100 shadow-sm flex items-center justify-between transition-all active:scale-95 disabled:opacity-40"
                >
                  <span>🥐 Send favorite snacks / treats</span>
                  <span className="text-[11px] text-rose-600 font-semibold">-35%</span>
                </button>

                <button
                  onClick={() => reduceNaraz(40)}
                  disabled={narazLevel === 0}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/90 hover:bg-white text-ink-800 text-xs font-sans font-medium border border-rose-100 shadow-sm flex items-center justify-between transition-all active:scale-95 disabled:opacity-40"
                >
                  <span>🥺 Say "Sorry Dudu loves you"</span>
                  <span className="text-[11px] text-rose-600 font-semibold">-40%</span>
                </button>

                <button
                  onClick={() => reduceNaraz(100)}
                  disabled={narazLevel === 0}
                  className="w-full py-2.5 px-4 rounded-xl bg-burgundy-600 hover:bg-burgundy-700 text-white text-xs font-sans font-medium shadow-sm flex items-center justify-between transition-all active:scale-95 disabled:opacity-40"
                >
                  <span>🫂 Give warm forehead kisses & hugs</span>
                  <span className="text-[11px] text-gold-300 font-semibold">100% Calm</span>
                </button>
              </div>

              {narazLevel === 0 && (
                <button
                  onClick={resetNaraz}
                  className="mt-3 w-full py-1.5 text-center text-[11px] font-sans text-ink-500 hover:text-ink-800 flex items-center justify-center space-x-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Narazness (replay drama)</span>
                </button>
              )}
            </div>
          </TiltCard>

          {/* Fake Cute Notification Card */}
          <div className="p-4 rounded-2xl bg-white/80 border border-cream-200 shadow-sm flex items-start space-x-3 text-xs">
            <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink-800 font-sans">Official Incident Summary</p>
              <p className="text-ink-500 mt-0.5 leading-snug">
                Even through cancelled plans and dramatic sulking, the gifts stayed safely wrapped. Because caring was already too deep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
