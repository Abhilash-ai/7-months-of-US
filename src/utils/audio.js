// Web Audio API Procedural Synthesizer for romantic ambient music & interaction sounds
// Zero external dependencies, zero broken links, works offline and instantly!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.bgGain = null;
    this.sfxGain = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      
      this.bgGain = this.ctx.createGain();
      this.bgGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.bgGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.sfxGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft romantic chime note
  playChime(freq = 523.25, duration = 1.2) {
    if (this.isMuted) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio fallback silent
    }
  }

  // Soft paper page turn sound
  playPageTurn() {
    if (this.isMuted) return;
    try {
      this.init();
      // Filtered noise for paper rustle
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      whiteNoise.start();
    } catch {
      // fallback
    }
  }

  // Cute playful bubble pop
  playPop() {
    if (this.isMuted) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch {
      // fallback
    }
  }

  // Gentle heartbeat pulse
  playHeartbeat() {
    if (this.isMuted) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      [0, 0.15].forEach((offset) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(65, now + offset);
        osc.frequency.exponentialRampToValueAtTime(45, now + offset + 0.12);

        gain.gain.setValueAtTime(0, now + offset);
        gain.gain.linearRampToValueAtTime(0.25, now + offset + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.15);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now + offset);
        osc.stop(now + offset + 0.16);
      });
    } catch {
      // fallback
    }
  }

  // Sparkle / Heart Burst Arpeggio
  playCelebration() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((note, index) => {
      setTimeout(() => {
        this.playChime(note, 1.8);
      }, index * 90);
    });
  }

  // Ambient Romantic Music Generator (Generates serene lofi piano chords progression)
  startAmbientMusic() {
    if (this.isPlayingMusic || this.isMuted) return;
    try {
      this.init();
      this.isPlayingMusic = true;

      // Chord progressions in F major / D minor (warm, romantic, nostalgic)
      // Fmaj7, Am7, Dm7, Bbmaj7
      const chords = [
        [349.23, 440.00, 523.25, 659.25], // F, A, C, E (Fmaj7)
        [440.00, 523.25, 659.25, 783.99], // A, C, E, G (Am7)
        [293.66, 349.23, 440.00, 523.25], // D, F, A, C (Dm7)
        [233.08, 293.66, 349.23, 440.00], // Bb, D, F, A (Bbmaj7)
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!this.isPlayingMusic || this.isMuted) return;
        const currentChord = chords[chordIndex % chords.length];
        const now = this.ctx.currentTime;

        currentChord.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);

          gain.gain.setValueAtTime(0.0001, now + idx * 0.12);
          gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.12 + 0.4);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

          osc.connect(gain);
          gain.connect(this.bgGain);

          osc.start(now + idx * 0.12);
          osc.stop(now + 4.0);
        });

        chordIndex++;
        this.musicTimer = setTimeout(playChord, 3800);
      };

      playChord();
    } catch {
      // fallback
    }
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopAmbientMusic();
      return false;
    } else {
      this.startAmbientMusic();
      return true;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbientMusic();
    }
    return this.isMuted;
  }
}

export const soundEngine = new SoundEngine();
