import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Audio & 3D
import { soundEngine } from './utils/audio';
import ThreeCanvas from './components/ThreeCanvas';
import FloatingDecorations from './components/FloatingDecorations';

// Navigation & Global UI
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import ChapterDrawer from './components/ChapterDrawer';

// Chapters & Screens
import OpeningScreen from './components/OpeningScreen';
import Chapter1Daddu from './components/chapters/Chapter1Daddu';
import Chapter2Misunderstanding from './components/chapters/Chapter2Misunderstanding';
import Chapter3DuduUnlocked from './components/chapters/Chapter3DuduUnlocked';
import Chapter4NarazBubu from './components/chapters/Chapter4NarazBubu';
import Chapter5Caring from './components/chapters/Chapter5Caring';
import Chapter6Kolkata from './components/chapters/Chapter6Kolkata';
import Chapter7StillUs from './components/chapters/Chapter7StillUs';
import FinalReveal from './components/FinalReveal';

const TOTAL_STEPS = 8; // 0 to 8

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Swipe detection references
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToStep = useCallback((step) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      goToStep(currentStep + 1);
    }
  }, [currentStep, goToStep]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  }, [currentStep, goToStep]);

  // Keyboard navigation (ArrowLeft, ArrowRight, numbers 1-7, 0)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        soundEngine.playPageTurn();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        soundEngine.playPageTurn();
        handlePrev();
      } else if (e.key >= '1' && e.key <= '7') {
        const stepNum = parseInt(e.key, 10);
        soundEngine.playChime(440 + stepNum * 50);
        goToStep(stepNum);
      } else if (e.key === '0') {
        goToStep(0);
      } else if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToStep]);

  // Touch Swipe Navigation for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 55; // minimum px for swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left -> next
        soundEngine.playPageTurn();
        handleNext();
      } else {
        // Swiped right -> prev
        soundEngine.playPageTurn();
        handlePrev();
      }
    }
  };

  const toggleMusic = () => {
    const active = soundEngine.toggleMusic();
    setIsPlayingMusic(active);
  };

  const toggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (muted) setIsPlayingMusic(false);
  };

  // Motion variants for smooth page transition
  const pageVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden paper-texture select-none sm:select-auto"
    >
      {/* 3D WebGL Floating Romantic Particles Background */}
      <ThreeCanvas currentStep={currentStep} />

      {/* Floating chapter decorative notes */}
      <FloatingDecorations chapter={currentStep} />

      {/* Top Navigation */}
      <Navbar
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        isPlayingMusic={isPlayingMusic}
        isMuted={isMuted}
        onToggleMusic={toggleMusic}
        onToggleMute={toggleMute}
      />

      {/* Main Chapter Content Container */}
      <main className="relative z-20 flex-1 flex flex-col justify-center pt-20 pb-28 sm:pb-32 px-2 sm:px-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex justify-center"
          >
            {currentStep === 0 && <OpeningScreen onBegin={() => goToStep(1)} />}
            {currentStep === 1 && <Chapter1Daddu />}
            {currentStep === 2 && <Chapter2Misunderstanding />}
            {currentStep === 3 && <Chapter3DuduUnlocked />}
            {currentStep === 4 && <Chapter4NarazBubu />}
            {currentStep === 5 && <Chapter5Caring />}
            {currentStep === 6 && <Chapter6Kolkata />}
            {currentStep === 7 && <Chapter7StillUs onGoToFinal={() => goToStep(8)} />}
            {currentStep === 8 && <FinalReveal onReplay={() => goToStep(0)} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Timeline & Controls */}
      <Timeline
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onSelectStep={goToStep}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Chapter Index Modal Drawer */}
      <ChapterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentStep={currentStep}
        onSelectStep={goToStep}
      />
    </div>
  );
}
