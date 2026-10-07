import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingDecorations({ chapter = 0 }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10" aria-hidden="true">
      {/* Chapter specific subtle floating ambient aesthetic marks */}
      {chapter === 1 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.45, y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-8 text-xs font-handwriting text-peach-400 rotate-[-12deg] hidden md:block"
          >
            "seen at 02:41 am... 😒"
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35, rotate: [12, -6, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-28 right-12 text-sm font-handwriting text-ink-500 hidden md:block"
          >
            ⚠️ daddu detection zone
          </motion.div>
        </>
      )}

      {chapter === 2 && (
        <>
          <div className="absolute top-1/4 left-6 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-30 transform -rotate-45" />
          <div className="absolute bottom-1/3 right-8 w-44 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-25 transform rotate-30" />
        </>
      )}

      {chapter === 3 && (
        <>
          <div className="absolute top-20 right-16 washi-tape opacity-60 hidden md:block" />
          <div className="absolute bottom-32 left-12 washi-tape washi-tape-pink opacity-60 hidden md:block" />
        </>
      )}

      {chapter === 5 && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-peach-100/30 blur-3xl pointer-events-none" />
      )}

      {chapter === 6 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            className="absolute top-28 right-10 text-xs font-serif tracking-widest text-burgundy-700 uppercase hidden md:block"
          >
            ★ Kolkata Solo Diary — Picked For Dudu ★
          </motion.div>
        </>
      )}
    </div>
  );
}
