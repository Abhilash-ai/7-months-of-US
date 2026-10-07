import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, MessageCircle, Sparkles, Laugh, ShieldAlert } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

const POKE_RESPONSES = [
  "Daddu: 'Kya hai?' 😒",
  "Daddu: 'Don't disturb, I am very busy.' 💼",
  "Daddu: 'Why do you ask so many questions?' 🙄",
  "Daddu: '...fine, tell me what happened.' 😏",
  "Daddu: 'You're annoying, but don't stop.' 🤍",
  "Daddu: (Secretly smiling while typing 'k') 🤭"
];

export default function Chapter1Daddu() {
  const [pokeCount, setPokeCount] = useState(0);
  const [currentResponse, setCurrentResponse] = useState(null);

  const handlePoke = () => {
    soundEngine.playPop();
    const nextCount = pokeCount + 1;
    setPokeCount(nextCount);
    const resp = POKE_RESPONSES[(nextCount - 1) % POKE_RESPONSES.length];
    setCurrentResponse(resp);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Chapter Tag & Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-2 mb-6"
      >
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-peach-100 text-peach-800 border border-peach-200 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 01
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ the chaotic beginning ~
          </span>
        </div>

        {/* Warning Indicator */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span className="font-sans font-medium text-[11px]">Daddu Detected ⚠️</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <TiltCard maxTilt={6}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Paper Clip & Washi Tape Accent */}
              <div className="washi-tape -top-3 left-8 rotate-[-2deg]" />
              
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold mb-6">
                01 — The Daddu Era
              </h2>

              {/* Story Text */}
              <div className="space-y-4 text-ink-700 font-sans text-base sm:text-lg leading-relaxed">
                <p className="font-serif italic text-xl text-burgundy-700">
                  “Once upon a time, there was a very rude kind of Daddu… 😂”
                </p>
                <p>
                  A little rude, a little distant, and definitely not someone I knew would become this important.
                </p>
                <div className="p-4 rounded-2xl bg-peach-50/70 border border-peach-200/80 my-4">
                  <p className="font-handwriting text-xl text-burgundy-800">
                    Plot twist: I kept talking to you anyway. 🤭
                  </p>
                </div>
              </div>

              {/* Daddu Snooty Meter */}
              <div className="mt-6 pt-6 border-t border-cream-200">
                <div className="flex items-center justify-between text-xs font-sans text-ink-600 mb-2">
                  <span className="font-medium">Initial Attitude Gauge</span>
                  <span className="font-serif font-bold text-burgundy-700">98% Snooty / 2% Soft</span>
                </div>
                <div className="w-full h-3 rounded-full bg-cream-200 overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-peach-300 via-amber-400 to-mutedRed"
                  />
                </div>
              </div>

              {/* Interactive Poke Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handlePoke}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 border border-cream-300 text-ink-800 text-xs font-sans font-medium flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-sm"
                >
                  <Laugh className="w-4 h-4 text-peach-400" />
                  <span>Poke Daddu ({pokeCount}x)</span>
                </button>

                <AnimatePresence mode="wait">
                  {currentResponse && (
                    <motion.div
                      key={currentResponse}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-xs font-handwriting text-base text-burgundy-700 bg-white/80 px-3 py-1.5 rounded-xl border border-cream-200"
                    >
                      {currentResponse}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Column: Floating Chat Mockup Scrapbook */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-3.5"
        >
          <div className="glass-card rounded-3xl p-5 border border-white/80 shadow-glass">
            <div className="flex items-center space-x-2 border-b border-cream-200/80 pb-3 mb-3">
              <MessageCircle className="w-4 h-4 text-burgundy-600" />
              <span className="font-serif text-sm font-semibold text-ink-800">
                Exhibit A: Early Chat Logs
              </span>
              <span className="text-[10px] bg-cream-200 px-2 py-0.5 rounded-full text-ink-600 ml-auto font-mono">
                Day 01
              </span>
            </div>

            {/* Simulated Chat Thread */}
            <div className="space-y-3 text-xs font-sans">
              {/* Daddu message */}
              <div className="flex flex-col items-start">
                <div className="bg-cream-200/90 text-ink-800 px-3.5 py-2 rounded-2xl rounded-tl-sm max-w-[85%] border border-cream-300">
                  “Seen at 2:41 AM”
                </div>
                <span className="text-[9px] text-ink-400 mt-0.5 ml-1">Left on read 🥲</span>
              </div>

              {/* Bubu message */}
              <div className="flex flex-col items-end">
                <div className="bg-burgundy-600 text-white px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                  “Why are you so dry?? Are you made of biscuits?” 🍪😂
                </div>
                <span className="text-[9px] text-ink-400 mt-0.5 mr-1">02:42 AM</span>
              </div>

              {/* Daddu message */}
              <div className="flex flex-col items-start">
                <div className="bg-cream-200/90 text-ink-800 px-3.5 py-2 rounded-2xl rounded-tl-sm max-w-[85%] border border-cream-300">
                  “K.”
                </div>
                <span className="text-[9px] text-ink-400 mt-0.5 ml-1">The classic single letter response</span>
              </div>

              {/* Bubu reaction */}
              <div className="flex flex-col items-end">
                <div className="bg-peach-100 text-burgundy-900 border border-peach-200 px-3.5 py-2 rounded-2xl rounded-tr-sm max-w-[90%]">
                  “*Sends 14 funny memes anyway* 🤭❤️”
                </div>
                <span className="text-[9px] text-ink-400 mt-0.5 mr-1">Persistence = 100</span>
              </div>
            </div>
          </div>

          {/* Sticky Note Pin */}
          <div className="relative p-4 rounded-2xl bg-[#FFF9E6] border border-[#F0E2A8] shadow-md rotate-1">
            <div className="w-3 h-3 rounded-full bg-red-400 mx-auto -mt-5 mb-2 shadow-pin" />
            <p className="font-handwriting text-lg text-ink-800 leading-snug">
              Note to self: Even back then when you acted so tough and dry, there was something about you that made me stay. 💌
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
