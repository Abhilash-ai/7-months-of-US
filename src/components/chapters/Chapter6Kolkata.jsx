import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Ticket, 
  Sparkles, 
  ShoppingBag, 
  Tag, 
  ArrowRight,
  Heart,
  Navigation,
  Compass,
  PackageCheck,
  ZoomIn,
  X
} from 'lucide-react';
import TiltCard from '../TiltCard';
import { soundEngine } from '../../utils/audio';

// Interactive Journey Progression Steps
const JOURNEY_STEPS = [
  {
    id: 1,
    title: 'Bubu in Kolkata',
    desc: 'Travelling alone, walking past historic avenues & tram lines.',
    icon: '🌆',
  },
  {
    id: 2,
    title: 'The Thought',
    desc: 'Passing a legendary sweet shop: “Dudu loves Gulab Jamun!”',
    icon: '💭',
  },
  {
    id: 3,
    title: 'Making & Packing',
    desc: 'Bubu makes homemade chiwda and secures the sweets.',
    icon: '🥣',
  },
  {
    id: 4,
    title: 'Bringing It Home',
    desc: 'Luggage tagged with Dudu’s name, ready to hand over.',
    icon: '🎁',
  },
];

export default function Chapter6Kolkata() {
  const [journeyStep, setJourneyStep] = useState(4); // Default to full reveal
  const [jamunImage, setJamunImage] = useState('/gifts/kolkata-gulab-jamun.jpg');
  const [chiwdaImage, setChiwdaImage] = useState('/gifts/kolkata-chiwda-sweets.jpg');
  const [selectedPreview, setSelectedPreview] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Chapter Tag & Badges */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-between gap-2 mb-6"
      >
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-serif font-bold uppercase tracking-wider">
            Chapter 06
          </span>
          <span className="text-xs font-handwriting text-ink-500 text-base">
            ~ solo journey, shared memories ~
          </span>
        </div>

        {/* Solo Traveler Badge */}
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-ink-700 text-xs font-sans">
          <Compass className="w-3.5 h-3.5 text-emerald-700" />
          <span className="font-medium text-[11px]">Bubu’s Solo Travel Diary ✈️</span>
        </div>
      </motion.div>

      {/* Main Narrative & Solo Boarding Pass Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={5}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="washi-tape -top-3 left-10 rotate-1" />

              {/* Title & Subtitle */}
              <div className="mb-5">
                <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-semibold">
                  06 — A Little Piece of Kolkata
                </h2>
                <p className="font-serif italic text-base sm:text-lg text-emerald-800 mt-1">
                  “Some journeys are solo… but the memories don't have to be.”
                </p>
              </div>

              {/* Exact Story Narrative */}
              <div className="space-y-4 font-sans text-base sm:text-lg text-ink-800 leading-relaxed">
                <div className="p-4 rounded-2xl bg-[#F6F8F5] border border-emerald-200/90 space-y-2">
                  <p className="font-serif text-xl sm:text-2xl text-ink-900 font-normal">
                    “I went to Kolkata alone. 🌆”
                  </p>
                  <p className="font-serif italic text-xl text-burgundy-700">
                    “But somehow, you still came back with me. ❤️”
                  </p>
                </div>

                <div className="space-y-2 text-ink-700">
                  <p>
                    I brought back your favourite <strong className="text-amber-900 font-medium">gulab jamun</strong>, <br />
                    and something made especially by me — <br />
                    my <strong className="text-emerald-900 font-medium">homemade chiwda</strong>, just for you. 🥹
                  </p>

                  <p className="font-serif italic text-ink-600 text-base pt-1">
                    A little piece of my journey. <br />
                    A little something I knew you'd love. <br />
                    And another memory quietly added to our story.
                  </p>
                </div>

                {/* Special Quote Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/90 to-cream-50 border border-gold-300 shadow-sm relative overflow-hidden">
                  <div className="absolute top-2 right-3 text-gold-400 opacity-30 text-3xl font-serif">“</div>
                  <p className="font-serif italic text-lg sm:text-xl text-burgundy-900 leading-snug">
                    “I may have travelled there alone, <br />
                    <span className="gold-shimmer font-semibold">
                      but I couldn't come back without bringing something for you.
                    </span>” ❤️
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Solo Travel Ticket & Luggage Tag for Dudu */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <TiltCard maxTilt={7} className="w-full">
            {/* Solo Passenger Ticket */}
            <div className="relative rounded-2xl bg-[#FFFDF7] border-2 border-stone-300 p-5 shadow-polaroid text-ink-900 select-none overflow-hidden">
              {/* Perforated Top Header */}
              <div className="flex items-center justify-between border-b-2 border-dashed border-stone-300 pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <Ticket className="w-4 h-4 text-emerald-800" />
                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-emerald-900">
                    SOLO TRAVELER TRANSIT
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-cream-200 px-2 py-0.5 rounded text-ink-700">
                  PASS: BUBU-SOLO
                </span>
              </div>

              {/* Ticket Data Grid */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-cream-200 pb-1.5">
                  <span className="text-ink-500 font-sans">Passenger</span>
                  <span className="font-serif font-bold text-sm text-ink-900">
                    Bubu (Solo Trip)
                  </span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-1.5">
                  <span className="text-ink-500 font-sans">Location</span>
                  <span className="font-sans font-medium text-emerald-800">
                    Kolkata, WB 🌆
                  </span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-1.5">
                  <span className="text-ink-500 font-sans">Final Destination</span>
                  <span className="font-serif font-bold text-burgundy-800">
                    Home to Dudu 🏠❤️
                  </span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-ink-500 font-sans">Special Mission</span>
                  <span className="font-sans font-medium text-amber-900">
                    Deliver Sweets & Chiwda
                  </span>
                </div>
              </div>

              {/* Attached Baggage / Gift Tag */}
              <div className="mt-4 pt-3 border-t-2 border-dashed border-gold-300 bg-amber-50/70 p-3 rounded-xl border border-amber-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-burgundy-700 flex-shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-ink-500 block font-sans">
                      LUGGAGE TAG
                    </span>
                    <span className="font-handwriting text-lg font-bold text-burgundy-800 leading-tight">
                      “Picked for Dudu ❤️”
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="border border-burgundy-400 text-burgundy-700 font-serif font-bold text-[9px] px-2 py-0.5 rounded rotate-2 inline-block">
                    FOR DUDU
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Emotional Storyteller Note */}
          <div className="p-3.5 rounded-2xl bg-white/70 border border-cream-200 text-xs text-ink-600 flex items-start space-x-2.5">
            <span className="text-base">💭</span>
            <p className="leading-snug">
              Every solo stroll down Kolkata's avenues felt incomplete until I found the sweets and made something with my own hands to bring back to you.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Storytelling Stepper: Bubu → Kolkata → Discovers → Thinks of Dudu → Brings Home */}
      <div className="mb-10 p-5 rounded-3xl bg-white/75 border border-cream-200 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Navigation className="w-4 h-4 text-emerald-700" />
            <h3 className="font-serif text-base font-semibold text-ink-800">
              The Journey of Thoughtfulness
            </h3>
          </div>
          <span className="text-[11px] font-sans text-ink-500">
            How a solo trip became a gift for you
          </span>
        </div>

        {/* 4 Interactive Journey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.id}
              onClick={() => {
                soundEngine.playPop();
                setJourneyStep(step.id);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                journeyStep === step.id
                  ? 'bg-amber-50/90 border-amber-300 ring-2 ring-amber-300/40 shadow-sm'
                  : 'bg-white/60 border-cream-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-2xl">{step.icon}</span>
                <span className="font-mono text-[10px] text-ink-400">Step 0{step.id}</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-ink-900">{step.title}</h4>
              <p className="font-sans text-xs text-ink-600 mt-1 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* THE GIFTS SHOWCASE & FINAL VISUAL (The emotional heart of Chapter 6) */}
      <div className="mb-10">
        <TiltCard maxTilt={4}>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE1] border-2 border-gold-300/80 p-6 sm:p-10 shadow-glass overflow-hidden">
            {/* Golden Stamp Watermark */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-gold-300 text-[10px] font-serif text-gold-700 bg-white/70">
              SPECIAL KEEPSAKE • OCT 2026
            </div>

            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="font-serif text-xs uppercase tracking-widest text-gold-700 block mb-1">
                DELIVERED WITH CARE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-semibold">
                Brought Back For Dudu
              </h3>
              <p className="font-sans text-xs text-ink-500 mt-1">
                One bought with your favourite taste in mind, one handcrafted with my own patience.
              </p>
            </div>

            {/* The Two Gifts Side by Side in Glass Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
              {/* GIFT 1: Kolkata Gulab Jamun Sweet Box */}
              <div className="relative rounded-2xl bg-white/80 border border-amber-200 p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                {/* Washi Tag */}
                <div className="washi-tape -top-2.5 right-6 opacity-75" />

                <div>
                  {/* Visual: Real Kolkata Gulab Jamun Photo */}
                  <div
                    onClick={() => {
                      if (jamunImage) {
                        soundEngine.playPop();
                        setSelectedPreview({
                          src: jamunImage,
                          title: "Your Favourite Gulab Jamun 🍯",
                          subtitle: "Authentic juicy Kolkata treat packed fresh with sweet syrup",
                        });
                      }
                    }}
                    className="relative aspect-video rounded-xl bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex flex-col items-center justify-center p-1.5 border border-amber-300/60 overflow-hidden mb-4 cursor-pointer group/img shadow-inner"
                  >
                    <img
                      src={jamunImage}
                      alt="Dudu's Favourite Gulab Jamun"
                      className="w-full h-full object-cover rounded-lg group-hover/img:scale-105 transition-transform duration-300"
                    />

                    {/* Enlarge Hint */}
                    <div className="absolute inset-0 bg-ink-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px] rounded-xl pointer-events-none">
                      <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-ink-900/60 text-xs font-sans">
                        <ZoomIn className="w-3.5 h-3.5 mr-1" />
                        <span>Enlarge photo</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-ink-900">
                        Your Favourite Gulab Jamun 🍯
                      </h4>
                      <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                        Kolkata Treat
                      </span>
                    </div>
                    <p className="font-handwriting text-base text-burgundy-800 leading-snug">
                      “I remembered how much you love them. As soon as I saw them in Kolkata, I packed a box to bring home for you.”
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-ink-500">
                  <span className="font-sans">Condition: Fresh & Juicy 🍯</span>
                  <span className="font-serif text-burgundy-700 font-medium">Carried with care ✈️</span>
                </div>
              </div>

              {/* GIFT 2: Bubu's Homemade Chiwda Jar */}
              <div className="relative rounded-2xl bg-white/80 border border-emerald-200 p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                {/* Washi Tag */}
                <div className="washi-tape washi-tape-pink -top-2.5 right-6 opacity-75" />

                <div>
                  {/* Visual: Real Homemade Chiwda & Treats Photo */}
                  <div
                    onClick={() => {
                      if (chiwdaImage) {
                        soundEngine.playPop();
                        setSelectedPreview({
                          src: chiwdaImage,
                          title: "Homemade Chiwda & Kolkata Sweets 🥣",
                          subtitle: "Crispy, homemade goodness prepared specially by Bubu",
                        });
                      }
                    }}
                    className="relative aspect-video rounded-xl bg-gradient-to-br from-emerald-100 via-amber-100 to-lime-100 flex flex-col items-center justify-center p-1.5 border border-emerald-300/60 overflow-hidden mb-4 cursor-pointer group/img shadow-inner"
                  >
                    <img
                      src={chiwdaImage}
                      alt="Special Homemade Chiwda"
                      className="w-full h-full object-cover rounded-lg group-hover/img:scale-105 transition-transform duration-300"
                    />

                    {/* Enlarge Hint */}
                    <div className="absolute inset-0 bg-ink-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[1px] rounded-xl pointer-events-none">
                      <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-ink-900/60 text-xs font-sans">
                        <ZoomIn className="w-3.5 h-3.5 mr-1" />
                        <span>Enlarge photo</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-ink-900">
                        Homemade Chiwda 🥣
                      </h4>
                      <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                        Handcrafted
                      </span>
                    </div>
                    <p className="font-handwriting text-base text-burgundy-800 leading-snug">
                      “Something made especially by me — crispy, spiced just right, and roasted with love, just for Dudu.”
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between text-xs text-ink-500">
                  <span className="font-sans">Ingredients: 100% Care</span>
                  <span className="font-serif text-emerald-800 font-medium">Made from scratch ✂️</span>
                </div>
              </div>
            </div>

            {/* FINAL VISUAL CLIMAX CARD: Exactly as required */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border-2 border-gold-400 text-center shadow-md max-w-lg mx-auto">
              <span className="font-handwriting text-2xl sm:text-3xl text-burgundy-800 font-bold block leading-relaxed">
                “From Kolkata, with a little thought of you. ❤️”
              </span>
              <p className="font-sans text-xs text-ink-500 mt-2">
                Even across hundred of miles of a solo journey, my mind was always carrying you home.
              </p>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPreview(null)}
            className="fixed inset-0 z-50 bg-ink-900/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl p-5 shadow-2xl overflow-hidden cursor-default"
            >
              <button
                onClick={() => setSelectedPreview(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-ink-900/10 hover:bg-ink-900/20 text-ink-800 transition-colors z-20"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-cream-200 mb-4 bg-cream-100 flex items-center justify-center">
                <img
                  src={selectedPreview.src}
                  alt={selectedPreview.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center px-2">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-sans font-semibold">
                  From Kolkata with Love ❤️
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900 mt-0.5">
                  {selectedPreview.title}
                </h3>
                <p className="font-handwriting text-xl text-ink-700 mt-2 leading-relaxed">
                  “{selectedPreview.subtitle}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
