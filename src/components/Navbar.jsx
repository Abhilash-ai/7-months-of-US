import React from 'react';
import { Volume2, VolumeX, Music, BookOpen, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar({
  currentStep,
  totalSteps = 8,
  onPrev,
  onNext,
  onOpenDrawer,
  isPlayingMusic,
  isMuted,
  onToggleMusic,
  onToggleMute,
}) {
  const isCover = currentStep === 0;
  const isFinal = currentStep === 8;
  const chapterNumber = currentStep > 0 && currentStep < 8 ? currentStep : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between pointer-events-none">
      {/* Brand / Title & Chapter Indicator */}
      <div className="flex items-center space-x-3 pointer-events-auto">
        <button
          onClick={() => {
            soundEngine.playPageTurn();
            onOpenDrawer();
          }}
          className="flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/80 shadow-sm text-ink-800 transition-all duration-200 group"
          title="Open Chapter Index"
        >
          <BookOpen className="w-3.5 h-3.5 text-burgundy-500 group-hover:scale-110 transition-transform" />
          <span className="font-serif text-xs sm:text-sm tracking-wide text-burgundy-700 font-medium">
            Chapters
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-125 transition-transform" />
        </button>

        {chapterNumber && (
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-50/80 backdrop-blur-md border border-cream-200 text-xs text-ink-600 shadow-sm">
            <span className="font-medium text-burgundy-600 font-serif">Month {chapterNumber}</span>
            <span className="text-ink-400">/</span>
            <span className="text-ink-500">07</span>
          </div>
        )}
      </div>

      {/* Center Monogram (Quiet Luxury) */}
      <div className="pointer-events-auto flex items-center space-x-2">
        <span className="font-serif italic text-base sm:text-lg tracking-wider text-burgundy-700 font-medium">
          Dudu & Bubu
        </span>
        <span className="text-[10px] uppercase tracking-widest text-gold-600 font-sans border border-gold-200 px-1.5 py-0.5 rounded-full bg-gold-50/70">
          7 Mo
        </span>
      </div>

      {/* Right Controls: Ambient Audio & Mute */}
      <div className="flex items-center space-x-2 pointer-events-auto">
        <button
          onClick={() => {
            soundEngine.playPop();
            onToggleMusic();
          }}
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full border text-xs transition-all duration-200 ${
            isPlayingMusic
              ? 'bg-burgundy-500 text-white border-burgundy-600 shadow-sm'
              : 'bg-white/75 hover:bg-white text-ink-700 border-white/80 shadow-sm'
          }`}
          title={isPlayingMusic ? "Pause romantic soundtrack" : "Play romantic soundtrack"}
        >
          <Music className={`w-3.5 h-3.5 ${isPlayingMusic ? 'animate-pulse' : ''}`} />
          <span className="hidden md:inline font-sans text-[11px] font-medium">
            {isPlayingMusic ? 'Melody On' : 'Music'}
          </span>
        </button>

        <button
          onClick={() => {
            soundEngine.playPop();
            onToggleMute();
          }}
          className={`p-1.5 rounded-full border text-xs transition-all duration-200 ${
            isMuted
              ? 'bg-cream-200 text-ink-500 border-cream-300'
              : 'bg-white/75 hover:bg-white text-ink-700 border-white/80 shadow-sm'
          }`}
          title={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-burgundy-600" />}
        </button>
      </div>
    </header>
  );
}
