import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, MessageSquare, Phone, Gift, Smile, ArrowRight } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

export default function Chapter7StillUs({ onGoToFinal }) {
  const [isConnected, setIsConnected] = useState(true);

  const handleToggleConnection = () => {
    soundEngine.playCelebration();
    setIsConnected(true);
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
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 07
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ seven months of us ~
          </span>
        </div>

        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cream-100 border border-purple-200 text-purple-800 text-xs font-serif">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Quiet Harmony</span>
        </div>
      </motion.div>

      {/* Main Peaceful Story Card */}
      <TiltCard maxTilt={4}>
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FDFBF7] via-[#FAF6F2] to-[#F5EFF7] border border-purple-200/70 p-6 sm:p-10 shadow-glass overflow-hidden">
          {/* Soft Sunset Radial Gradient */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-b from-purple-100/40 via-peach-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Title */}
          <div className="relative z-10 text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink-900 font-semibold mb-2">
              07 — Still Us.
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-burgundy-700">
              “7 months later… We're still here.”
            </p>
          </div>

          {/* Poetic Narrative */}
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 font-sans text-base sm:text-lg text-ink-800 leading-relaxed">
            <p>
              Still busy with our own lives. <br />
              Still getting caught up in our own worlds.
            </p>

            <p className="font-serif italic text-xl text-ink-900 pt-2">
              “But somehow, we still find little ways to reach each other.”
            </p>

            {/* 4 Little Ways Icons / Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 max-w-xl mx-auto">
              <div className="p-3 rounded-2xl bg-white/70 border border-purple-100/80 shadow-sm flex flex-col items-center">
                <MessageSquare className="w-5 h-5 text-purple-500 mb-1" />
                <span className="font-serif font-semibold text-sm text-ink-800">A message</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-purple-100/80 shadow-sm flex flex-col items-center">
                <Phone className="w-5 h-5 text-rose-500 mb-1" />
                <span className="font-serif font-semibold text-sm text-ink-800">A call</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-purple-100/80 shadow-sm flex flex-col items-center">
                <Gift className="w-5 h-5 text-amber-500 mb-1" />
                <span className="font-serif font-semibold text-sm text-ink-800">A little surprise</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-purple-100/80 shadow-sm flex flex-col items-center">
                <Smile className="w-5 h-5 text-emerald-500 mb-1" />
                <span className="font-serif font-semibold text-sm text-ink-800">A ‘hey.’</span>
              </div>
            </div>

            <p className="font-serif text-lg sm:text-xl text-ink-700">
              Still finding our way back to each other.
            </p>

            <div className="py-4">
              <span className="font-serif italic text-2xl sm:text-3xl font-semibold text-burgundy-800 block">
                “And honestly… <br />
                <span className="gold-shimmer">I'm happy we're still us. ❤️</span>”
              </span>
            </div>

            {/* Two Distant Glowing Points Connected By Golden Line */}
            <div className="relative py-6 my-4">
              <div className="relative h-20 max-w-md mx-auto flex items-center justify-between px-6">
                {/* Connecting Golden Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <motion.line
                    x1="12%"
                    y1="50%"
                    x2="88%"
                    y2="50%"
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeDasharray={isConnected ? "none" : "4 4"}
                    className={isConnected ? "animate-kintsugi" : ""}
                  />
                </svg>

                {/* Point 1: Dudu */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold-400 text-burgundy-900 shadow-soft-glow flex items-center justify-center font-serif font-bold text-xs border border-white">
                    Dudu
                  </div>
                  <span className="text-[10px] text-ink-500 mt-1 font-sans">Your World</span>
                </div>

                {/* Center Heart Emblem */}
                <div className="relative z-10 w-7 h-7 rounded-full bg-white/90 border border-gold-300 shadow-sm flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                </div>

                {/* Point 2: Bubu */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-burgundy-600 text-white shadow-rose-glow flex items-center justify-center font-serif font-bold text-xs border border-white">
                    Bubu
                  </div>
                  <span className="text-[10px] text-ink-500 mt-1 font-sans">My World</span>
                </div>
              </div>
            </div>

            {/* Read Final Letter Call to action */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  soundEngine.playCelebration();
                  onGoToFinal();
                }}
                className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-cream-50 font-sans text-sm font-semibold tracking-wide shadow-xl shadow-burgundy-900/15 border border-gold-300/40 group transition-all"
              >
                <span>Read Bubu's Personal Letter</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
