import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Scissors, Heart, Sparkles, Key, Layers, X, ZoomIn } from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

const DEFAULT_CRAFT_PHOTOS = [
  {
    id: 1,
    title: "Handmade Handkerchief",
    tag: "Embroidered for Prabhat 🧵",
    note: "Hand-embroidered with your name & infinity. Soft and personal.",
    svgType: "handkerchief",
    bg: "from-rose-100 via-peach-100 to-amber-100",
    customImage: "/gifts/handkerchief-collection.jpg",
  },
  {
    id: 2,
    title: "Crochet Heart Keychain",
    tag: "Carry My Heart 🗝️",
    note: "Hand-crocheted red heart so you carry a piece of me wherever you go.",
    svgType: "keychain",
    bg: "from-amber-100 via-stone-100 to-amber-200",
    customImage: "/gifts/heart-keychain.jpg",
  },
  {
    id: 3,
    title: "The 28 Special Cards",
    tag: "28 Reasons & Memories 💌",
    note: "28 cards tied with a ribbon: 'May your day be as wonderful as you are.'",
    svgType: "cards",
    bg: "from-purple-100 via-rose-100 to-amber-100",
    customImage: "/gifts/28-cards-deck.jpg",
  },
];

export default function Chapter3DuduUnlocked() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [photos] = useState(DEFAULT_CRAFT_PHOTOS);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggleBox = () => {
    soundEngine.playCelebration();
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Header Tag */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 03
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ crafting affection ~
          </span>
        </div>

        <div className="flex items-center space-x-1.5 text-xs text-burgundy-700 font-serif">
          <Scissors className="w-3.5 h-3.5" />
          <span>Handmade with Love</span>
        </div>
      </motion.div>

      {/* Main Story & Interactive Gift Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: Story text */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={5}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="washi-tape -top-3 left-10" />

              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold mb-4">
                03 — Dudu Unlocked
              </h2>

              <div className="space-y-4 text-ink-700 font-sans text-base sm:text-lg leading-relaxed">
                <p className="font-serif italic text-xl text-burgundy-700">
                  “Somewhere along the way, Daddu became Dudu.”
                </p>
                <p>
                  The cold walls melted. The distance turned into gentle warmth. And before I even realized it, you were no longer just anyone.
                </p>
                <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#ECD9A5] shadow-sm relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-burgundy-500 absolute -top-1.5 left-4" />
                  <p className="font-handwriting text-2xl text-burgundy-800 leading-snug">
                    “And Bubu started making little things with his own hands just for him. ❤️”
                  </p>
                </div>
              </div>

              {/* Crafting Details Badge */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-sans">
                <span className="px-3 py-1 rounded-full bg-cream-200 text-ink-700 border border-cream-300">
                  🧵 Handmade Handkerchief
                </span>
                <span className="px-3 py-1 rounded-full bg-cream-200 text-ink-700 border border-cream-300">
                  🗝️ Custom Keychain
                </span>
                <span className="px-3 py-1 rounded-full bg-cream-200 text-ink-700 border border-cream-300">
                  💌 28 Handwritten Cards
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right: Interactive 3D Gift Box */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <TiltCard maxTilt={8} className="w-full max-w-xs">
            <div
              onClick={handleToggleBox}
              className="relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE1] border border-amber-300/80 p-6 shadow-xl cursor-pointer select-none text-center group"
            >
              {/* Ribbon Graphic */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-burgundy-600/90 shadow-sm pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-burgundy-600/90 shadow-sm pointer-events-none" />

              {/* 3D Box Lid animation */}
              <motion.div
                animate={isBoxOpen ? { y: -45, rotate: -8, scale: 1.05 } : { y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative z-10 w-28 h-28 mx-auto rounded-2xl bg-burgundy-700 shadow-2xl flex items-center justify-center border-2 border-gold-300"
              >
                <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center shadow-inner">
                  <Gift className="w-5 h-5 text-burgundy-900" />
                </div>
              </motion.div>

              {/* Inside Box Content */}
              <AnimatePresence>
                {isBoxOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-20 mt-4 p-3.5 rounded-2xl bg-white/95 border border-amber-200 shadow-sm text-center"
                  >
                    <p className="font-handwriting text-xl text-burgundy-700 font-bold">
                      Handmade with Love 🎁
                    </p>
                    <p className="font-sans text-xs text-ink-600 mt-1">
                      Handkerchief, crochet heart & 28 handwritten cards.
                    </p>
                    <div className="flex justify-center space-x-2 mt-2.5">
                      <img src="/gifts/handkerchief-collection.jpg" alt="Handkerchief" className="w-10 h-10 rounded-lg object-cover border border-cream-300 shadow-xs" />
                      <img src="/gifts/heart-keychain.jpg" alt="Keychain" className="w-10 h-10 rounded-lg object-cover border border-cream-300 shadow-xs" />
                      <img src="/gifts/28-cards-deck.jpg" alt="28 Cards" className="w-10 h-10 rounded-lg object-cover border border-cream-300 shadow-xs" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="font-sans text-xs font-medium text-ink-600 mt-4 relative z-20">
                {isBoxOpen ? "Tap to close box" : "Tap gift box to untie ribbon 🎀"}
              </p>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Handmade Gifts Photo Scrapbook Polaroids */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif text-xl font-semibold text-ink-800 flex items-center space-x-2">
            <span>Handmade Keepsake Polaroids</span>
            <span className="text-xs font-handwriting text-burgundy-600">(Tap photo to enlarge)</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {photos.map((item) => (
            <div key={item.id} className="relative group">
              {/* Polaroid Card */}
              <div className="bg-white p-4 pb-6 rounded-2xl shadow-polaroid border border-cream-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Washi Tape */}
                <div className="washi-tape -top-2.5 right-6 opacity-75" />

                {/* Photo frame */}
                <div
                  onClick={() => {
                    if (item.customImage) {
                      soundEngine.playPop();
                      setSelectedImage(item);
                    }
                  }}
                  className={`relative aspect-square rounded-xl bg-gradient-to-br ${item.bg} overflow-hidden flex flex-col items-center justify-center p-2 border border-cream-200 cursor-pointer group/img`}
                >
                  {item.customImage ? (
                    <img
                      src={item.customImage}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg group-hover/img:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center p-2">
                      <Gift className="w-8 h-8 text-burgundy-700 mx-auto mb-2" />
                      <p className="font-serif text-sm font-semibold text-ink-800">{item.title}</p>
                      <p className="text-[11px] text-ink-500 font-sans mt-0.5">{item.tag}</p>
                    </div>
                  )}

                  {/* Enlarge Zoom Overlay */}
                  <div className="absolute inset-0 bg-ink-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px] pointer-events-none">
                    <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-ink-900/60 text-xs font-sans">
                      <ZoomIn className="w-3.5 h-3.5 mr-1" />
                      <span>View details</span>
                    </div>
                  </div>
                </div>

                {/* Handwritten Caption */}
                <div className="mt-3.5 text-center">
                  <h4 className="font-serif font-bold text-base text-ink-900">{item.title}</h4>
                  <span className="text-[11px] font-sans text-burgundy-600 block mt-0.5">{item.tag}</span>
                  <p className="font-handwriting text-lg text-ink-700 leading-snug mt-1">
                    “{item.note}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-ink-900/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl p-5 shadow-2xl overflow-hidden cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-ink-900/10 hover:bg-ink-900/20 text-ink-800 transition-colors z-20"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-square border border-cream-200 mb-4 bg-cream-100">
                <img
                  src={selectedImage.customImage}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center px-2">
                <span className="text-xs uppercase tracking-widest text-burgundy-600 font-sans font-semibold">
                  {selectedImage.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900 mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="font-handwriting text-xl text-ink-700 mt-2 leading-relaxed">
                  “{selectedImage.note}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
