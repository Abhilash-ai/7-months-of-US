import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, ChevronRight, Bookmark } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const CHAPTER_CARDS = [
  {
    id: 0,
    num: "00",
    month: "Cover",
    title: "The Opening Dossier",
    tag: "CONFIDENTIAL",
    desc: "A little story about Bubu & Dudu.",
    badge: "💌",
    accent: "bg-gold-50 border-gold-200 text-gold-700",
  },
  {
    id: 1,
    num: "01",
    month: "Month 1",
    title: "The Daddu Era",
    tag: "Playful & Rude",
    desc: "A little rude, a little distant... Plot twist: I kept talking to you anyway.",
    badge: "😂",
    accent: "bg-peach-50 border-peach-200 text-peach-700",
  },
  {
    id: 2,
    num: "02",
    month: "Month 2",
    title: "The Misunderstanding",
    tag: "Mending with Gold",
    desc: "We probably could've stopped here. But somehow, we didn't.",
    badge: "✨",
    accent: "bg-burgundy-50 border-burgundy-200 text-burgundy-700",
  },
  {
    id: 3,
    num: "03",
    month: "Month 3",
    title: "Dudu Unlocked",
    tag: "Handmade Love",
    desc: "Daddu became Dudu. And Bubu started crafting gifts with his own hands.",
    badge: "✂️",
    accent: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    id: 4,
    num: "04",
    month: "Month 4",
    title: "The Naraz Bubu",
    tag: "Dramatic & Cute",
    desc: "Bubu had plans. Dudu didn't meet. Result: NARAZ 100%!",
    badge: "😤",
    accent: "bg-rose-50 border-rose-200 text-rose-700",
  },
  {
    id: 5,
    num: "05",
    month: "Month 5",
    title: "Oh… You’re Actually Caring",
    tag: "Emotional Heart",
    desc: "Caring. Protective. Present. Discovering how you truly care.",
    badge: "🤍",
    accent: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    id: 6,
    num: "06",
    month: "Month 6",
    title: "A Little Piece of Kolkata",
    tag: "Solo Journey",
    desc: "I went alone, but I couldn't come back without bringing something for you.",
    badge: "🌆",
    accent: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    id: 7,
    num: "07",
    month: "Month 7",
    title: "Still Us",
    tag: "Peaceful & True",
    desc: "7 months later... still finding little ways to reach each other.",
    badge: "🌌",
    accent: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    id: 8,
    num: "✦",
    month: "Final",
    title: "The Personal Letter",
    tag: "Forever",
    desc: "And if I could choose one thing to keep... I'd choose you. ❤️",
    badge: "🫂",
    accent: "bg-burgundy-100 border-burgundy-300 text-burgundy-800",
  },
];

export default function ChapterDrawer({ isOpen, onClose, currentStep, onSelectStep }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink-900/30 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="fixed top-0 bottom-0 left-0 z-50 w-full max-w-md bg-cream-50/95 backdrop-blur-2xl border-r border-cream-300 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-white/60">
              <div className="flex items-center space-x-2.5">
                <Bookmark className="w-5 h-5 text-burgundy-600" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-burgundy-800">Scrapbook Index</h3>
                  <p className="font-sans text-xs text-ink-500">7 Months of Dudu & Bubu</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-cream-200 text-ink-600 transition-colors"
                aria-label="Close chapter index"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chapter List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
              {CHAPTER_CARDS.map((card) => {
                const isCurrent = currentStep === card.id;

                return (
                  <button
                    key={card.id}
                    onClick={() => {
                      soundEngine.playPageTurn();
                      onSelectStep(card.id);
                      onClose();
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isCurrent
                        ? 'bg-white border-burgundy-400 shadow-glass scale-[1.02] ring-2 ring-burgundy-400/20'
                        : 'bg-white/60 hover:bg-white/90 border-cream-200/80 hover:border-gold-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-3.5 pr-2">
                      <div className="text-2xl pt-0.5">{card.badge}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-serif font-bold text-xs uppercase tracking-wider text-burgundy-600">
                            {card.month}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${card.accent} font-sans`}>
                            {card.tag}
                          </span>
                        </div>
                        <h4 className="font-serif text-base font-semibold text-ink-900 group-hover:text-burgundy-700 transition-colors mt-0.5">
                          {card.title}
                        </h4>
                        <p className="font-sans text-xs text-ink-500 line-clamp-1 mt-0.5">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 text-ink-400 group-hover:text-burgundy-600 group-hover:translate-x-1 transition-all flex-shrink-0 ${isCurrent ? 'text-burgundy-600' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Footer Note */}
            <div className="p-4 bg-cream-100/80 border-t border-cream-200 text-center">
              <p className="font-handwriting text-lg text-burgundy-700">
                “Still finding our way back to each other.” ❤️
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
