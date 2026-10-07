import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const CHAPTERS = [
  { id: 0, title: 'Opening', month: 'Start', subtitle: 'Confidential' },
  { id: 1, title: 'The Daddu Era', month: 'M1', subtitle: 'Playful & Rude' },
  { id: 2, title: 'The Misunderstanding', month: 'M2', subtitle: 'Mending with Gold' },
  { id: 3, title: 'Dudu Unlocked', month: 'M3', subtitle: 'Handmade Crafts' },
  { id: 4, title: 'The Naraz Bubu', month: 'M4', subtitle: 'Dramatic & Sweet' },
  { id: 5, title: 'Actually Caring', month: 'M5', subtitle: 'Warm Discovery' },
  { id: 6, title: 'A Little Piece of Kolkata', month: 'M6', subtitle: 'Solo Journey, Shared Memory' },
  { id: 7, title: 'Still Us', month: 'M7', subtitle: 'Always Finding Us' },
  { id: 8, title: 'Our Letter', month: 'Love', subtitle: 'Final Reveal' },
];

export default function Timeline({ currentStep, onSelectStep, onPrev, onNext, totalSteps = 8 }) {
  const [hoveredStep, setHoveredStep] = useState(null);

  const canGoPrev = currentStep > 0;
  const canGoNext = currentStep < totalSteps;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div className="pointer-events-auto flex items-center space-x-2 sm:space-x-4 px-3 sm:px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-glass">
        {/* Previous Button */}
        <button
          onClick={() => {
            if (canGoPrev) {
              soundEngine.playPageTurn();
              onPrev();
            }
          }}
          disabled={!canGoPrev}
          className={`flex items-center space-x-1 p-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-serif transition-all duration-200 ${
            canGoPrev
              ? 'hover:bg-cream-200 text-burgundy-700 active:scale-95'
              : 'opacity-30 cursor-not-allowed text-ink-300'
          }`}
          title="Previous chapter (← Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline font-sans text-xs">Prev</span>
        </button>

        {/* 7-Month Timeline Dots */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-1 sm:px-2">
          {CHAPTERS.map((ch) => {
            const isActive = currentStep === ch.id;
            const isPassed = currentStep > ch.id;
            const isHovered = hoveredStep === ch.id;

            return (
              <div key={ch.id} className="relative flex flex-col items-center">
                <button
                  onClick={() => {
                    soundEngine.playChime(440 + ch.id * 55);
                    onSelectStep(ch.id);
                  }}
                  onMouseEnter={() => setHoveredStep(ch.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`group relative flex items-center justify-center transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-7 sm:w-8 h-7 sm:h-8 bg-burgundy-500 text-white shadow-soft-glow scale-110'
                      : isPassed
                      ? 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gold-400 hover:scale-150'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-cream-300 hover:bg-gold-300'
                  }`}
                  aria-label={`Jump to ${ch.title}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-dot-indicator"
                      className="absolute -inset-1 rounded-full border-2 border-gold-400/80 animate-ping opacity-30"
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}

                  {isActive ? (
                    <span className="text-[10px] font-sans font-bold">
                      {ch.id === 0 ? '✦' : ch.id === 8 ? '❤️' : `0${ch.id}`}
                    </span>
                  ) : null}
                </button>

                {/* Floating Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full mb-1 z-50 pointer-events-none whitespace-nowrap px-3 py-1.5 rounded-xl bg-ink-900/90 text-white backdrop-blur-md shadow-xl text-center border border-white/20"
                    >
                      <p className="font-serif text-xs font-semibold text-gold-200">
                        {ch.id === 0 ? 'Story Beginning' : ch.id === 8 ? 'Personal Letter' : `Month 0${ch.id}`}
                      </p>
                      <p className="font-sans text-[11px] text-cream-100">{ch.title}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Progress Fraction (01 / 07) */}
        <div className="hidden md:flex items-center text-xs font-serif text-ink-500 px-1 border-l border-cream-300 pl-3">
          <span className="font-medium text-burgundy-700">
            {currentStep === 0 ? '00' : currentStep === 8 ? '07' : `0${currentStep}`}
          </span>
          <span className="mx-1 text-ink-400">/</span>
          <span>07</span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            if (canGoNext) {
              soundEngine.playPageTurn();
              onNext();
            }
          }}
          disabled={!canGoNext}
          className={`flex items-center space-x-1 p-1.5 sm:px-3 sm:py-1 rounded-full text-xs font-serif transition-all duration-200 ${
            canGoNext
              ? 'bg-burgundy-600 hover:bg-burgundy-700 text-white shadow-sm active:scale-95'
              : 'opacity-30 cursor-not-allowed bg-cream-200 text-ink-300'
          }`}
          title="Next chapter (→ Arrow)"
        >
          <span className="hidden sm:inline font-sans text-xs">
            {currentStep === 0 ? 'Begin' : currentStep === 7 ? 'Reveal' : 'Next'}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
