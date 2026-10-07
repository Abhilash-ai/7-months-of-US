import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Eye, Flame, Compass } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

const ATTRIBUTES = [
  {
    title: "Caring",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50/70 border-rose-200",
    quote: "The subtle ways you asked if I had eaten, the quiet comfort in your voice.",
  },
  {
    title: "Protective",
    icon: Shield,
    color: "text-amber-600",
    bg: "bg-amber-50/70 border-amber-200",
    quote: "Making sure I was safe, standing guard over my happiness even without saying it out loud.",
  },
  {
    title: "Present",
    icon: Eye,
    color: "text-burgundy-600",
    bg: "bg-burgundy-50/70 border-burgundy-200",
    quote: "Not just around—truly here. Giving your time, your focus, and your quiet attention.",
  },
];

export default function Chapter5Caring() {
  const [closeness, setCloseness] = useState(65); // 0 to 100
  const [activeAttr, setActiveAttr] = useState(0);

  const handlePulse = () => {
    soundEngine.playHeartbeat();
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
          <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 05
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ the emotional heart ~
          </span>
        </div>

        <button
          onClick={handlePulse}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs hover:bg-rose-100 transition-colors"
          title="Feel heartbeat rhythm"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-heart-pulse" />
          <span className="font-sans text-[11px] font-medium">Heartbeat Rhythm</span>
        </button>
      </motion.div>

      {/* Main Narrative Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        <div className="lg:col-span-7">
          <TiltCard maxTilt={5}>
            <div className="glass-card-warm rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-gold-200/90 shadow-glass">
              {/* Golden Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/25 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold mb-4 leading-tight">
                05 — Oh… You’re Actually Caring.
              </h2>

              <div className="space-y-4 font-sans text-base sm:text-lg text-ink-800 leading-relaxed">
                <p className="font-serif italic text-xl text-burgundy-700">
                  “The gifts finally reached you.”
                </p>
                <p>
                  But this month wasn't only about the gifts.
                </p>
                <p>
                  This was when I discovered another side of you:
                </p>

                {/* 3 Core Pillars */}
                <div className="grid grid-cols-3 gap-2.5 py-3">
                  {ATTRIBUTES.map((attr, idx) => (
                    <button
                      key={attr.title}
                      onClick={() => {
                        soundEngine.playPop();
                        setActiveAttr(idx);
                      }}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        activeAttr === idx
                          ? `${attr.bg} shadow-sm ring-1 ring-gold-400 scale-[1.03]`
                          : 'bg-white/60 border-cream-200 hover:bg-white/90'
                      }`}
                    >
                      <attr.icon className={`w-5 h-5 mx-auto mb-1.5 ${attr.color}`} />
                      <span className="font-serif font-bold text-sm text-ink-900 block">
                        {attr.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Attribute Detail Quote */}
                <motion.div
                  key={activeAttr}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-white/80 border border-gold-200/70"
                >
                  <p className="font-handwriting text-xl text-burgundy-800 leading-snug">
                    “{ATTRIBUTES[activeAttr].quote}”
                  </p>
                </motion.div>

                <div className="pt-2">
                  <p className="font-serif italic text-lg sm:text-xl text-ink-700">
                    “Maybe I already knew you mattered. <br />
                    <span className="gold-shimmer font-semibold">
                      But this was when I started discovering how you care.
                    </span>”
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Two Abstract Glowing Figures Moving Closer */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <TiltCard maxTilt={6} className="w-full">
            <div className="glass-card rounded-3xl p-6 border border-gold-300/60 shadow-glass text-center relative overflow-hidden">
              <span className="font-serif text-sm font-semibold text-ink-700 block mb-2">
                Two Worlds Gravitating Closer
              </span>
              <p className="font-sans text-xs text-ink-500 mb-6">
                Drag to draw our energies together
              </p>

              {/* Gravitation Canvas Area */}
              <div className="relative h-48 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF2E6] border border-gold-200 flex items-center justify-center overflow-hidden mb-4">
                {/* Connecting light beam */}
                <div
                  className="absolute h-1 bg-gradient-to-r from-rose-400 via-gold-300 to-amber-400 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(180, (closeness / 100) * 160 + 40)}px`,
                    opacity: 0.3 + (closeness / 100) * 0.7,
                    boxShadow: closeness > 80 ? '0 0 15px #D4AF37' : 'none',
                  }}
                />

                {/* Figure 1 (Bubu) */}
                <motion.div
                  animate={{
                    x: (100 - closeness) * -0.85,
                    scale: 1 + (closeness / 100) * 0.15,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="relative z-10 flex flex-col items-center mx-2"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-400 to-peach-300 shadow-rose-glow flex items-center justify-center text-white border-2 border-white">
                    <Heart className="w-6 h-6 fill-white" />
                  </div>
                  <span className="font-serif text-xs font-semibold text-burgundy-800 mt-1.5">
                    Bubu
                  </span>
                </motion.div>

                {/* Figure 2 (Dudu) */}
                <motion.div
                  animate={{
                    x: (100 - closeness) * 0.85,
                    scale: 1 + (closeness / 100) * 0.15,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="relative z-10 flex flex-col items-center mx-2"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-gold-500 shadow-soft-glow flex items-center justify-center text-white border-2 border-white">
                    <Shield className="w-6 h-6 fill-white/80" />
                  </div>
                  <span className="font-serif text-xs font-semibold text-burgundy-800 mt-1.5">
                    Dudu
                  </span>
                </motion.div>
              </div>

              {/* Closeness Slider */}
              <div className="px-2">
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={closeness}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCloseness(val);
                    if (val >= 98) soundEngine.playChime(659.25);
                  }}
                  className="w-full accent-gold-500 cursor-pointer h-2 bg-cream-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] font-sans text-ink-500 mt-1">
                  <span>Hesitant Distance</span>
                  <span className="font-semibold text-burgundy-700">
                    {closeness >= 95 ? "Heart-to-Heart ✨" : "Drawing Closer"}
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
