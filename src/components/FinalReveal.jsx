import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCcw, Sparkles, Share2, Check, X, ZoomIn } from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';
import { soundEngine } from '../utils/audio';

export default function FinalReveal({ onReplay }) {
  const [hasTriggeredHeartBurst, setHasTriggeredHeartBurst] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [letterPhoto, setLetterPhoto] = useState('/gifts/our-keepsake-photo.jpg');
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  // Subtle, elegant heart & gold particle burst (NOT excessive or childish)
  const triggerSubtleHeartBurst = (e) => {
    soundEngine.playCelebration();
    setHasTriggeredHeartBurst(true);

    const x = e ? e.clientX / window.innerWidth : 0.5;
    const y = e ? e.clientY / window.innerHeight : 0.6;

    confetti({
      particleCount: 32,
      spread: 60,
      origin: { x, y },
      colors: ['#D4AF37', '#DE7F91', '#C34A4A', '#FAD2B8', '#FAF7F2'],
      shapes: ['square', 'circle'],
      scalar: 0.8,
      ticks: 120,
      gravity: 0.7,
      drift: 0,
      disableForReducedMotion: true,
    });
  };

  const handleCopyLink = () => {
    soundEngine.playPop();
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Header Large Text */}
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-serif font-bold uppercase tracking-widest shadow-sm mb-2"
          >
            <span>The 7-Month Keepsake</span>
            <span>•</span>
            <span>Forever Us</span>
          </motion.div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-900 font-normal leading-[1.2]">
            7 months. <br />
            <span className="italic font-serif text-burgundy-700">7 chapters.</span> <br />
            <span className="gold-shimmer font-semibold">Still Dudu & Bubu.</span>
          </h1>
        </div>

        {/* The Letter Card (Vintage Parchment & Wax Seal) */}
        <TiltCard maxTilt={3}>
          <div className="relative rounded-3xl bg-[#FFFDF9] border border-gold-300/80 p-6 sm:p-12 shadow-2xl overflow-hidden">
            {/* Elegant Inner Border */}
            <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-dashed border-burgundy-200/50 pointer-events-none" />

            {/* Top Monogram Seal */}
            <div className="text-center mb-8 relative z-10">
              <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600 block mb-1">
                A LETTER FROM BUBU
              </span>
              <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
            </div>

            {/* Letter Content */}
            <div className="relative z-10 space-y-6 font-serif text-lg sm:text-xl text-ink-800 leading-relaxed font-normal">
              {/* Salutation */}
              <p className="font-serif italic text-2xl sm:text-3xl font-bold text-burgundy-900">
                Dudu, ❤️
              </p>

              <p className="text-xl sm:text-2xl text-burgundy-800 italic">
                Seven months somehow became a little world of their own.
              </p>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                We started with you being a little rude Daddu, then came misunderstandings, conflicts, narazgi, handmade gifts, finally meeting, discovering your caring and protective side, my Kolkata stories, your favourite gulab jamun, my homemade chiwda… and somehow, through all of it, we’re still here. 🥹
              </p>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                Life keeps us busy, and we don't always get to meet as much as we'd like. But I really hope we keep finding our way back to each other.
              </p>

              {/* Interactive Micro-Interaction for "I like you the most" */}
              <div className="text-center py-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerSubtleHeartBurst}
                  className="group relative inline-flex items-center space-x-3 px-6 py-3.5 rounded-2xl bg-burgundy-50 hover:bg-burgundy-100 border border-burgundy-300 text-burgundy-800 transition-all shadow-sm cursor-pointer"
                  title="Click to celebrate this feeling"
                >
                  <Heart className="w-5 h-5 fill-rose-500 text-rose-500 group-hover:scale-125 transition-transform" />
                  <span className="font-serif italic text-xl sm:text-2xl font-bold text-burgundy-900">
                    “Because honestly… I like you the most. 🤭❤️”
                  </span>
                  <Sparkles className="w-4 h-4 text-gold-500" />
                </motion.button>
                <span className="block text-[11px] font-sans text-ink-400 mt-2">
                  (Tap above for a gentle sparkle)
                </span>
              </div>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                And I really want us to meet more. Not just through messages or little surprises, but actually sit together, talk nonsense, laugh, eat something, and just exist around each other.
              </p>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                There's something about being with you that I can't properly explain.
              </p>

              {/* Highlighted Safe & Calm quote */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF5EE] border border-gold-200 my-4 text-center">
                <p className="font-serif italic text-lg sm:text-2xl text-burgundy-900 font-semibold">
                  “I feel safe and calm whenever I'm with you. 🌻✨”
                </p>
              </div>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                And maybe that's one of my favourite things about us.
              </p>

              <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                I don't know exactly what every next month will look like, but I know I'm happy that these seven months happened.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-sans text-base sm:text-lg text-ink-700 font-light leading-relaxed">
                  So here's to us—our weird little story, our chaos, our conversations, our meetings, our gifts, our silly moments…
                </p>
                <p className="font-serif italic text-xl sm:text-2xl font-bold text-burgundy-900">
                  and hopefully many more chapters. ❤️
                </p>
              </div>

              <div className="pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-serif text-xl sm:text-2xl text-burgundy-700 font-bold">
                  Happy 7 months, Dudu. 🫂
                </p>

                <div className="text-center sm:text-right">
                  <span className="font-handwriting text-2xl sm:text-3xl text-burgundy-800 block">
                    — Your Bubu 🤭❤️
                  </span>
                  <span className="text-[11px] font-sans text-ink-400">
                    October 2026 • Still us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Keepsake Photo Polaroid - After the Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-md mx-auto pt-2"
        >
          <TiltCard maxTilt={5} className="bg-white p-4 sm:p-5 pb-7 sm:pb-8 rounded-3xl shadow-polaroid border border-cream-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Pin */}
            <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] z-10" />

            {/* Photo Container */}
            <div
              onClick={() => {
                if (letterPhoto) {
                  soundEngine.playPop();
                  setIsPhotoZoomed(true);
                }
              }}
              className="relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-cream-100 via-rose-50 to-amber-50 border border-cream-200 overflow-hidden flex flex-col items-center justify-center group/photo shadow-inner cursor-pointer"
              title="Click to view our keepsake photo in full detail"
            >
              <img
                src={letterPhoto}
                alt="Bubu and Dudu Keepsake Photo"
                className="w-full h-full object-cover rounded-xl group-hover/photo:scale-105 transition-transform duration-300"
              />

              {/* Enlarge Zoom Overlay */}
              <div className="absolute inset-0 bg-ink-900/30 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px] pointer-events-none rounded-2xl">
                <div className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-ink-900/60 text-xs font-sans font-medium shadow-md">
                  <ZoomIn className="w-4 h-4 mr-1" />
                  <span>View full size</span>
                </div>
              </div>
            </div>

            {/* Handwritten Polaroid Caption */}
            <div className="mt-4 text-center px-2">
              <p className="font-handwriting text-2xl text-ink-800 leading-snug">
                “Seven months of us, in one precious frame.” ❤️
              </p>
              <span className="text-xs font-serif text-burgundy-700 font-semibold block mt-1 tracking-wider uppercase">
                BUBU & DUDU • OCTOBER 2026
              </span>
            </div>
          </TiltCard>
        </motion.div>

        {/* Action Buttons: Replay & Share */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundEngine.playPageTurn();
              onReplay();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-cream-50 font-sans text-sm font-semibold shadow-lg shadow-burgundy-950/20 border border-gold-300/40 transition-all"
          >
            <RotateCcw className="w-4 h-4 text-gold-300" />
            <span>Replay our story ↺</span>
          </motion.button>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-ink-800 border border-cream-300 text-sm font-sans font-medium shadow-sm transition-all"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-burgundy-600" />}
            <span>{copiedLink ? 'Link copied! 💌' : 'Share with Dudu'}</span>
          </button>
        </div>
      </motion.div>

      {/* Lightbox Modal for Letter Photo */}
      <AnimatePresence>
        {isPhotoZoomed && letterPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoZoomed(false)}
            className="fixed inset-0 z-50 bg-ink-900/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-white rounded-3xl p-5 shadow-2xl overflow-hidden cursor-default text-center"
            >
              <button
                onClick={() => setIsPhotoZoomed(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-ink-900/10 hover:bg-ink-900/20 text-ink-800 transition-colors z-20"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[70vh] border border-cream-200 mb-4 bg-cream-100 flex items-center justify-center">
                <img
                  src={letterPhoto}
                  alt="Our Keepsake Photo"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs uppercase tracking-widest text-burgundy-600 font-sans font-semibold">
                Bubu & Dudu Keepsake
              </span>
              <p className="font-handwriting text-xl text-ink-800 mt-1">
                “Seven months of us, in one precious frame.” ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
