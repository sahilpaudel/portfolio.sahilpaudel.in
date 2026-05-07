import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { works } from './utility/workData';
import { projects } from './utility/projectData';
import { educations } from './utility/educationData';
import { profiles } from './utility/profileData';
import { skills } from './utility/skillData';
import { adventures } from './utility/adventureData';

const featuredProjects = [...projects].sort((left, right) => right.year - left.year);
const yearsOfExperience = Math.max(new Date().getFullYear() - 2017, 1);

const shellLines = [
  { prompt: 'sahil@portfolio:~$ whoami', output: 'Senior software engineer building backend-first systems.' },
  { prompt: 'sahil@portfolio:~$ current', output: 'Java / Spring Boot / SQS / Redis' },
  { prompt: 'sahil@portfolio:~$ worked-on', output: 'Java / Go / Spring Boot / Elixir / Phoenix / Kafka / Redis / MySQL / MSSQL / Postgres' },
  { prompt: 'sahil@portfolio:~$ location', output: 'Bengaluru, India' },
  { prompt: 'sahil@portfolio:~$ extras', output: '2 ginger cats / international trips / calm systems' }
];

const quickStats = [
  { label: 'Experience', value: `${yearsOfExperience}+ years` },
  { label: 'Projects', value: `${projects.length} shipped` },
  { label: 'Companies', value: `${works.length} core chapters` },
  { label: 'Style', value: 'Backend + product sense' }
];

const floatingFlags = [
  { emoji: '🇹🇭', name: 'Thailand', right: '24%', y: '10%', drift: '8s', delay: '-1s', moveX: '-1.6rem', moveY: '1.2rem', depth: 18 },
  { emoji: '🇮🇩', name: 'Bali', right: '16%', y: '18%', drift: '7.5s', delay: '-4s', moveX: '-2rem', moveY: '0.9rem', depth: 22 },
  { emoji: '🇱🇰', name: 'Sri Lanka', right: '10%', y: '30%', drift: '9s', delay: '-2s', moveX: '-1.8rem', moveY: '0.6rem', depth: 16 },
  { emoji: '🇸🇬', name: 'Singapore', right: '8%', y: '42%', drift: '7.8s', delay: '-6s', moveX: '-1.5rem', moveY: '-0.4rem', depth: 14 },
  { emoji: '🇲🇾', name: 'Malaysia', right: '6%', y: '53%', drift: '9.5s', delay: '-3s', moveX: '-2.1rem', moveY: '-0.6rem', depth: 20 },
  { emoji: '🇲🇾', name: 'Langkawi', right: '15%', y: '64%', drift: '8.2s', delay: '-5s', moveX: '-1.6rem', moveY: '-1rem', depth: 17 },
  { emoji: '🇳🇵', name: 'Nepal', right: '9%', y: '75%', drift: '9s', delay: '-7s', moveX: '-1.9rem', moveY: '-1.3rem', depth: 19 }
];

// const floatingCode = [
//   { text: 'const build = await ship(cleanArchitecture)', x: '10%', y: '16%', drift: '26s', delay: '-6s' },
//   { text: '101101 42 7.24ms 98.2%', x: '14%', y: '27%', drift: '22s', delay: '-10s' },
//   { text: '<Route path="/work" element={<Projects />} />', x: '12%', y: '39%', drift: '28s', delay: '-4s' },
//   { text: 'go test ./... && deploy --region ap-south-1', x: '8%', y: '52%', drift: '24s', delay: '-12s' },
//   { text: 'SELECT company, project, year FROM portfolio;', x: '47%', y: '12%', drift: '30s', delay: '-2s' },
//   { text: '{ latency: "47ms", uptime: "99.95%" }', x: '56%', y: '74%', drift: '27s', delay: '-7s' }
// ];

const primaryProfiles = profiles.filter((profile) =>
  ['Github', 'Instagram', 'Youtube', 'Twitter'].includes(profile.name)
);
const instagramProfile = profiles.find((profile) => profile.name === 'Instagram');

const summarize = (description) => {
  const sentence = description.split('. ')[0] || description;
  return sentence.endsWith('.') ? sentence : `${sentence}.`;
};

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved) return saved;
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isShellClosed, setIsShellClosed] = useState(false);
  const [isShellClosing, setIsShellClosing] = useState(false);
  const [isShellOpening, setIsShellOpening] = useState(false);
  const [isShellMinimized, setIsShellMinimized] = useState(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(4);
  const [heroCursorOffset, setHeroCursorOffset] = useState({ x: 0, y: 0 });
  const [hoveredFlag, setHoveredFlag] = useState(null);

  // DVD-bouncer refs: container, per-chip element refs, and live state.
  const flagContainerRef = useRef(null);
  const flagElementRefs = useRef([]);
  const flagStateRef = useRef([]);
  const hoveredFlagRef = useRef(null);
  const shellWindowRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Keep the hovered-flag ref in sync (read inside rAF without re-subscribing).
  useEffect(() => {
    hoveredFlagRef.current = hoveredFlag;
  }, [hoveredFlag]);

  // Shredder-machine close:
  //   1. Machine descends and docks on the panel's top edge.
  //   2. The real article element feeds upward via transform+clipPath in sync
  //      so actual content stays visible while being shredded.
  //   3. Strip segments emerge from the slot and fall.
  //   4. Machine exits, closed state fires.
  useEffect(() => {
    if (!isShellClosing) return undefined;

    const articleEl = shellWindowRef.current;
    if (!articleEl) return undefined;

    const rect = articleEl.getBoundingClientRect();

    // ── Constants ─────────────────────────────────────────────────────────────
    const N           = 10;
    const SHREDDER_H  = 82;
    const APPEAR_DUR  = 380;
    const FEED_DUR    = 1700;
    const SETTLE_TIME = 900;
    const EXIT_DUR    = 260;
    const STRIP_H     = Math.round(rect.height * 0.48);
    const SPAWN_EVERY = 130;
    const stripW      = rect.width / N;

    // ── Shredder audio (Web Audio API synthesis — no audio file required) ─────
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
      const t = audioCtx.currentTime;

      // White noise buffer (2 s, looped) — paper-cutting texture
      const bufLen = 2 * audioCtx.sampleRate;
      const noiseBuf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
      const nd = noiseBuf.getChannelData(0);
      for (let k = 0; k < bufLen; k++) nd[k] = Math.random() * 2 - 1;

      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = noiseBuf;
      noiseSource.loop = true;

      const hpf = audioCtx.createBiquadFilter();
      hpf.type = 'highpass';
      hpf.frequency.value = 2200;

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0, t);
      // Ramp up when paper starts feeding
      noiseGain.gain.linearRampToValueAtTime(0.28, t + (APPEAR_DUR + 140) / 1000);
      // Slight swell mid-shred
      noiseGain.gain.linearRampToValueAtTime(0.32, t + (APPEAR_DUR + FEED_DUR * 0.5) / 1000);
      // Fade out as paper finishes
      noiseGain.gain.linearRampToValueAtTime(0, t + (APPEAR_DUR + FEED_DUR + 120) / 1000);

      noiseSource.connect(hpf);
      hpf.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      noiseSource.start();

      // Motor hum: sawtooth → lowpass
      const motorOsc = audioCtx.createOscillator();
      motorOsc.type = 'sawtooth';
      motorOsc.frequency.value = 108;

      const lpf = audioCtx.createBiquadFilter();
      lpf.type = 'lowpass';
      lpf.frequency.value = 280;

      const motorGain = audioCtx.createGain();
      motorGain.gain.setValueAtTime(0, t);
      // Spin up with machine descent
      motorGain.gain.linearRampToValueAtTime(0.07, t + APPEAR_DUR / 1000);
      // Spin down as machine exits
      motorGain.gain.setValueAtTime(0.07, t + (APPEAR_DUR + FEED_DUR + SETTLE_TIME) / 1000);
      motorGain.gain.linearRampToValueAtTime(0, t + (APPEAR_DUR + FEED_DUR + SETTLE_TIME + EXIT_DUR) / 1000);

      motorOsc.connect(lpf);
      lpf.connect(motorGain);
      motorGain.connect(audioCtx.destination);
      motorOsc.start();
    }

    // ── Inject keyframes ──────────────────────────────────────────────────────
    if (!document.getElementById('shred-kf')) {
      const kf = document.createElement('style');
      kf.id = 'shred-kf';
      kf.textContent = `
        @keyframes shredLed  { 0%,100%{opacity:1} 50%{opacity:0.18} }
        @keyframes shredVibe {
          0%,100% { transform:translateX(0) translateY(0) }
          25%     { transform:translateX(-0.55px) translateY(0.3px) }
          75%     { transform:translateX(0.55px) translateY(-0.25px) }
        }
        [data-shred-c], [data-shred-c] * {
          animation:none !important;
          transition:none !important;
        }
      `;
      document.head.appendChild(kf);
    }

    // ── Overlay (shredder body + strips only — no replica) ────────────────────
    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed;top:${rect.top - SHREDDER_H}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height + SHREDDER_H}px;pointer-events:none;z-index:9999;overflow:visible;`;
    document.body.appendChild(overlay);

    // ── Shredder machine body ─────────────────────────────────────────────────
    const shredder = document.createElement('div');
    shredder.style.cssText = `position:absolute;top:0;left:0;width:100%;height:${SHREDDER_H}px;z-index:3;`;

    const housing = document.createElement('div');
    housing.style.cssText = `
      position:absolute;inset:0 0 14px 0;
      background:linear-gradient(155deg,#2e3348 0%,#1c1f2c 52%,#12141c 100%);
      border-radius:0.9rem 0.9rem 0 0;
      box-shadow:0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.07);
      animation:shredVibe 0.09s linear infinite;
      overflow:hidden;
    `;

    const gloss = document.createElement('div');
    gloss.style.cssText = `position:absolute;top:0;left:0;right:0;height:30%;background:linear-gradient(180deg,rgba(255,255,255,0.045) 0%,transparent 100%);border-radius:0.9rem 0.9rem 0 0;`;
    housing.appendChild(gloss);

    const controls = document.createElement('div');
    controls.style.cssText = `position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;padding:0 16px;gap:10px;`;
    controls.innerHTML = `
      <div style="width:9px;height:9px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px rgba(74,222,128,0.75);flex-shrink:0;"></div>
      <span style="color:rgba(190,205,230,0.38);font-family:'IBM Plex Mono',monospace;font-size:0.57rem;letter-spacing:0.11em;text-transform:uppercase;flex:1;">ShredMatic 3000</span>
      <span style="color:rgba(255,255,255,0.25);font-family:'IBM Plex Mono',monospace;font-size:0.54rem;letter-spacing:0.05em;">shredding...</span>
      <div style="width:9px;height:9px;border-radius:50%;background:#f97316;box-shadow:0 0 8px rgba(249,115,22,0.8);flex-shrink:0;animation:shredLed 0.42s ease-in-out infinite;"></div>
    `;
    housing.appendChild(controls);
    shredder.appendChild(housing);

    const slot = document.createElement('div');
    slot.style.cssText = `position:absolute;bottom:0;left:4%;right:4%;height:14px;background:linear-gradient(180deg,#050608 0%,#020203 100%);border-radius:3px 3px 0 0;box-shadow:inset 0 2px 8px rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:space-evenly;overflow:hidden;z-index:4;`;
    for (let i = 0; i < N - 1; i++) {
      const blade = document.createElement('div');
      blade.style.cssText = `width:1.5px;height:100%;background:rgba(80,95,115,0.55);`;
      slot.appendChild(blade);
    }
    shredder.appendChild(slot);
    overlay.appendChild(shredder);

    // ── Phase 1: machine descends ─────────────────────────────────────────────
    shredder.animate(
      [
        { transform: `translateY(-${SHREDDER_H + 8}px)`, opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      { duration: APPEAR_DUR, easing: 'cubic-bezier(0.34,1.48,0.64,1)', fill: 'forwards' }
    );

    // ── Phase 2: real article feeds upward ────────────────────────────────────
    // Hint to the compositor so both properties are promoted before animation.
    articleEl.style.willChange = 'transform, clip-path';
    // transform and clipPath advance together so the visible portion is always
    // anchored at rect.top (the slot position) — actual content stays visible.
    const feedAnim = articleEl.animate(
      [
        { transform: 'translateY(0px)',              clipPath: 'inset(0px 0px 0px 0px)'              },
        { transform: `translateY(-${rect.height}px)`, clipPath: `inset(${rect.height}px 0px 0px 0px)` }
      ],
      { duration: FEED_DUR, delay: APPEAR_DUR, easing: 'linear', fill: 'forwards' }
    );

    // ── Phase 3: strip waves emerge from the slot ─────────────────────────────
    let feedStartTime = 0;
    let rafId = null;
    let spawnActive = false;
    let lastSpawnTime = -Infinity;

    const spawnWave = (now) => {
      const feedOffset = Math.min(
        feedStartTime > 0 ? (now - feedStartTime) / FEED_DUR * rect.height : 0,
        rect.height
      );

      for (let i = 0; i < N; i++) {
        const seg = document.createElement('div');
        const sign    = i % 2 === 0 ? 1 : -1;
        const rot     = sign * (4 + Math.random() * 16);
        const driftX  = sign * (6 + Math.random() * 26);
        const fallDist = rect.height * 0.6 + Math.random() * rect.height * 0.7;
        const fallDur  = 900 + Math.random() * 700;

        seg.style.cssText = `
          position:absolute;top:${SHREDDER_H}px;left:${i * stripW}px;
          width:${Math.ceil(stripW) + 0.5}px;height:${STRIP_H}px;z-index:2;
          overflow:hidden;contain:layout style paint;
          border-right:${i < N - 1 ? '1px solid rgba(30,56,87,0.18)' : 'none'};
          will-change:transform,opacity;
        `;

        const clone = articleEl.cloneNode(true);
        clone.removeAttribute('id');
        clone.setAttribute('data-shred-c', '');
        clone.classList.remove('shell-window-closing');
        clone.style.cssText = `
          position:absolute;
          top:${-feedOffset}px;
          left:${-i * stripW}px;
          width:${rect.width}px;
          height:${rect.height}px;
          transform:none !important;
          clip-path:none !important;
          transition:none !important;
          animation:none !important;
          backdrop-filter:none !important;
          -webkit-backdrop-filter:none !important;
          background:rgba(255,251,247,0.97);
          border-radius:0;
          box-shadow:none;
          pointer-events:none;
          overflow:visible;
          visibility:visible;
          opacity:1;
        `;

        seg.appendChild(clone);
        overlay.appendChild(seg);

        seg.animate(
          [
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0.94 },
            { transform: `translateY(${fallDist * 0.13}px) translateX(${driftX * 0.16}px) rotate(${rot * 0.36}deg)`, opacity: 0.94, offset: 0.1 },
            { transform: `translateY(${fallDist}px) translateX(${driftX}px) rotate(${rot}deg)`, opacity: 0.1 }
          ],
          { duration: fallDur, easing: 'ease-in', fill: 'forwards' }
        );

        setTimeout(() => seg.remove(), fallDur + 250);
      }
    };

    // rAF loop keeps spawn work frame-aligned so it never fires mid-render.
    const rafLoop = (now) => {
      if (spawnActive && now - lastSpawnTime >= SPAWN_EVERY) {
        lastSpawnTime = now;
        spawnWave(now);
      }
      if (spawnActive) rafId = requestAnimationFrame(rafLoop);
    };

    const startSpawn = setTimeout(() => {
      feedStartTime = performance.now();
      lastSpawnTime = -Infinity;
      spawnActive = true;
      rafId = requestAnimationFrame(rafLoop);
    }, APPEAR_DUR + 25);

    const stopSpawn = setTimeout(() => {
      spawnActive = false;
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    }, APPEAR_DUR + FEED_DUR + 60);

    // ── Phase 4: machine exits, closed state fires ────────────────────────────
    const done = setTimeout(() => {
      shredder.animate(
        [
          { transform: 'translateY(0)', opacity: 1 },
          { transform: `translateY(-${SHREDDER_H * 1.5}px)`, opacity: 0 }
        ],
        { duration: EXIT_DUR, easing: 'ease-in', fill: 'forwards' }
      );

      setTimeout(() => {
        feedAnim.cancel();
        // Strip the backdrop-filter one frame before display:none so the GPU
        // compositing layer is flushed cleanly — prevents ghost blur on the hero.
        articleEl.style.backdropFilter = 'none';
        articleEl.style.webkitBackdropFilter = 'none';
        articleEl.style.visibility = 'hidden';
        overlay.remove();
        requestAnimationFrame(() => {
          setIsShellClosed(true);
          setIsShellClosing(false);
          setTimeout(() => {
            articleEl.style.backdropFilter = '';
            articleEl.style.webkitBackdropFilter = '';
            articleEl.style.visibility = '';
          }, 16);
        });
        setTimeout(() => { if (audioCtx) audioCtx.close(); }, EXIT_DUR + 200);
      }, EXIT_DUR + 40);
    }, APPEAR_DUR + FEED_DUR + SETTLE_TIME);

    return () => {
      clearTimeout(startSpawn);
      clearTimeout(stopSpawn);
      clearTimeout(done);
      spawnActive = false;
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
      articleEl.style.willChange = '';
      articleEl.style.backdropFilter = '';
      articleEl.style.webkitBackdropFilter = '';
      feedAnim.cancel();
      overlay.remove();
      articleEl.style.visibility = '';
      if (audioCtx) audioCtx.close();
    };
  }, [isShellClosing, setIsShellClosed, setIsShellClosing]);

  // DVD-style bouncer: each chip travels at constant velocity and reflects
  // off the container edges. Positions are written directly to the DOM via
  // transform — no React re-renders per frame.
  useEffect(() => {
    const container = flagContainerRef.current;

    if (!container) {
      return undefined;
    }

    const elements = flagElementRefs.current.filter(Boolean);
    let bounds = container.getBoundingClientRect();

    // Speed in px/sec — tuned to feel like a DVD logo: brisk but watchable.
    const SPEED = 140;

    // Parse a CSS percentage string like "16%" into a fraction (0.16).
    const parsePct = (value) => {
      if (typeof value !== 'string') return 0;
      const match = value.match(/(-?\d+(?:\.\d+)?)/);
      return match ? parseFloat(match[1]) / 100 : 0;
    };

    const initState = () => {
      bounds = container.getBoundingClientRect();
      flagStateRef.current = elements.map((el, index) => {
        const rect = el.getBoundingClientRect();
        const item = floatingFlags[index] || {};
        // Seed starting position from the original layout percentages so chips
        // begin where they used to sit in the static design.
        const rightFraction = parsePct(item.right);
        const yFraction = parsePct(item.y);
        const startX = Math.max(
          0,
          Math.min(bounds.width - rect.width, bounds.width * (1 - rightFraction) - rect.width)
        );
        const startY = Math.max(0, Math.min(bounds.height - rect.height, bounds.height * yFraction));
        // Pseudo-random diagonal direction (deterministic across reloads).
        const angle = (index * 47 + 23) * (Math.PI / 180);
        const dirX = Math.cos(angle);
        const dirY = Math.sin(angle);
        // Avoid axis-aligned trajectories (no fun DVD without diagonals).
        const minComponent = 0.4;
        const safeX = Math.abs(dirX) < minComponent ? Math.sign(dirX || 1) * minComponent : dirX;
        const safeY = Math.abs(dirY) < minComponent ? Math.sign(dirY || 1) * minComponent : dirY;
        const norm = Math.hypot(safeX, safeY);

        return {
          x: startX,
          y: startY,
          vx: (safeX / norm) * SPEED,
          vy: (safeY / norm) * SPEED,
          width: rect.width,
          height: rect.height,
          swapCooldown: 0
        };
      });

      // Paint initial positions immediately to avoid a flash at (0,0).
      flagStateRef.current.forEach((chip, i) => {
        const el = elements[i];
        if (el) {
          el.style.transform = `translate3d(${chip.x}px, ${chip.y}px, 0)`;
        }
      });
    };

    initState();

    let lastTimestamp = performance.now();
    let rafId = 0;

    const tick = (timestamp) => {
      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;

      const state = flagStateRef.current;
      const hoveredName = hoveredFlagRef.current;
      const containerWidth = bounds.width;
      const containerHeight = bounds.height;

      for (let i = 0; i < elements.length; i += 1) {
        const el = elements[i];
        const chip = state[i];

        if (!el || !chip) {
          continue;
        }

        // Refresh measured size (lightweight; covers font-load and resize).
        if (chip.width === 0 || chip.height === 0) {
          const rect = el.getBoundingClientRect();
          chip.width = rect.width;
          chip.height = rect.height;
        }

        const isHovered = hoveredName && el.dataset.flagName === hoveredName;

        if (!isHovered) {
          chip.x += chip.vx * deltaSeconds;
          chip.y += chip.vy * deltaSeconds;

          // Bounce off the left/right edges.
          if (chip.x <= 0) {
            chip.x = 0;
            chip.vx = Math.abs(chip.vx);
          } else if (chip.x + chip.width >= containerWidth) {
            chip.x = containerWidth - chip.width;
            chip.vx = -Math.abs(chip.vx);
          }

          // Bounce off the top/bottom edges.
          if (chip.y <= 0) {
            chip.y = 0;
            chip.vy = Math.abs(chip.vy);
          } else if (chip.y + chip.height >= containerHeight) {
            chip.y = containerHeight - chip.height;
            chip.vy = -Math.abs(chip.vy);
          }
        }

        el.style.transform = `translate3d(${chip.x}px, ${chip.y}px, 0)`;

        if (chip.swapCooldown > 0) chip.swapCooldown -= 1;
      }

      // ── Chip-chip collision pass (O(n²), n=7 so fine) ────────────────────────
      for (let i = 0; i < elements.length; i += 1) {
        for (let j = i + 1; j < elements.length; j += 1) {
          const a = state[i];
          const b = state[j];
          if (!a || !b) continue;

          const overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
          const overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);

          if (overlapX > 0 && overlapY > 0) {
            // Separate along the shallower overlap axis so chips don't stick.
            if (overlapX <= overlapY) {
              const sep = overlapX / 2 + 0.5;
              if (a.x < b.x) { a.x -= sep; b.x += sep; }
              else            { a.x += sep; b.x -= sep; }
              const tmp = a.vx; a.vx = b.vx; b.vx = tmp;
            } else {
              const sep = overlapY / 2 + 0.5;
              if (a.y < b.y) { a.y -= sep; b.y += sep; }
              else            { a.y += sep; b.y -= sep; }
              const tmp = a.vy; a.vy = b.vy; b.vy = tmp;
            }

            // Swap displayed content once per collision (guarded by cooldown).
            if (a.swapCooldown === 0 && b.swapCooldown === 0) {
              const elA = elements[i];
              const elB = elements[j];
              const innerA = elA.querySelector('.flag-chip-inner');
              const innerB = elB.querySelector('.flag-chip-inner');
              if (innerA && innerB) {
                const tmpHTML = innerA.innerHTML;
                innerA.innerHTML = innerB.innerHTML;
                innerB.innerHTML = tmpHTML;
              }
              const tmpName = elA.dataset.flagName;
              elA.dataset.flagName = elB.dataset.flagName;
              elB.dataset.flagName = tmpName;
              // Swap stored widths to match new content.
              const tmpW = a.width; a.width = b.width; b.width = tmpW;

              a.swapCooldown = 45;
              b.swapCooldown = 45;
            }
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const handleResize = () => {
      const oldBounds = bounds;
      bounds = container.getBoundingClientRect();
      // Rescale positions proportionally so chips stay roughly where they were.
      const ratioX = bounds.width / Math.max(oldBounds.width, 1);
      const ratioY = bounds.height / Math.max(oldBounds.height, 1);
      flagStateRef.current.forEach((chip, idx) => {
        chip.x = Math.min(Math.max(chip.x * ratioX, 0), bounds.width - chip.width);
        chip.y = Math.min(Math.max(chip.y * ratioY, 0), bounds.height - chip.height);
        const el = elements[idx];
        if (el) {
          const rect = el.getBoundingClientRect();
          chip.width = rect.width;
          chip.height = rect.height;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const closeShellWindow = () => {
    if (isShellClosing || isShellClosed || isShellOpening) {
      return;
    }

    if (isShellMinimized) {
      // Un-minimize first, wait for the max-height transition (320ms) to
      // finish expanding before the shredder measures the panel height.
      setIsShellMinimized(false);
      setTimeout(() => setIsShellClosing(true), 340);
    } else {
      setIsShellClosing(true);
    }
  };

  const reopenShellWindow = () => {
    if (isShellOpening || isShellClosing || !isShellClosed) {
      return;
    }

    setIsShellClosed(false);
    setIsShellOpening(true);
  };

  const countryPostLinks = {
    Thailand: instagramProfile?.url,
    Bali: instagramProfile?.url,
    'Sri Lanka': instagramProfile?.url,
    Singapore: instagramProfile?.url,
    Malaysia: instagramProfile?.url,
    Langkawi: instagramProfile?.url,
    Nepal: instagramProfile?.url
  };

  const handleHeroPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const normalizedY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    setHeroCursorOffset({
      x: normalizedX,
      y: normalizedY
    });
  };

  const handleHeroPointerLeave = () => {
    setHeroCursorOffset({ x: 0, y: 0 });
    setHoveredFlag(null);
  };

  const openCountryPost = (countryName) => {
    const destination = countryPostLinks[countryName];

    if (destination) {
      window.open(destination, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-nav">
        <button type="button" className="brand" onClick={() => scrollToSection('home')}>
          <span className="brand-mark">SP</span>
          <span className="brand-text">
            <strong>Sahil Paudel</strong>
            <small>Software engineer</small>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          <button type="button" onClick={() => scrollToSection('projects')}>Projects</button>
          <button type="button" onClick={() => scrollToSection('experience')}>Experience</button>
          <button type="button" onClick={() => scrollToSection('education')}>Education</button>
          <button type="button" onClick={() => scrollToSection('adventures')}>Adventures</button>
          <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main className="content-wrap">
        <section
          className={`hero-stage ${isShellMinimized || isShellClosed ? 'hero-stage-compact' : ''}`}
          id="home"
        >
          <div
            className="hero-scene"
            onPointerMove={handleHeroPointerMove}
            onPointerLeave={handleHeroPointerLeave}
          >
            <img
              className="hero-scene-comic"
              src="/HeroImage.png"
              alt="Sahil Paudel comic strip — weekend adventures, debugging with cats, teamwork"
            />
            <div className={`hero-scene-wash${isShellClosed ? ' hero-scene-wash--gone' : ''}`} />

            {/* <div className="parallax-layer parallax-code" aria-hidden="true">
              {floatingCode.map((item) => (
                <span
                  key={`${item.text}-${item.x}-${item.y}`}
                  className="code-chip"
                  style={{
                    top: item.y,
                    left: item.x,
                    animationDuration: item.drift,
                    animationDelay: item.delay
                  }}
                >
                  {item.text}
                </span>
              ))}
            </div> */}

            <div className="parallax-layer parallax-flags" ref={flagContainerRef}>
              {floatingFlags.map((item, index) => (
                <button
                  key={`${item.name}-${item.right}-${item.y}`}
                  ref={(node) => {
                    flagElementRefs.current[index] = node;
                  }}
                  type="button"
                  className="flag-chip flag-chip-bouncer"
                  data-flag-name={item.name}
                  onMouseEnter={() => setHoveredFlag(item.name)}
                  onMouseLeave={() => setHoveredFlag(null)}
                  onDoubleClick={() => openCountryPost(item.name)}
                  title={`Open ${item.name} post on Instagram`}
                  style={{
                    '--flag-cursor-x': hoveredFlag === item.name ? `${heroCursorOffset.x * item.depth}px` : '0px',
                    '--flag-cursor-y': hoveredFlag === item.name ? `${heroCursorOffset.y * item.depth}px` : '0px'
                  }}
                >
                  <span className="flag-chip-inner">
                    <strong>{item.emoji}</strong>
                    <small>{item.name}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <article
            ref={shellWindowRef}
            className={`shell-window ${isShellMinimized ? 'shell-window-minimized' : ''} ${isShellClosed ? 'shell-window-closed' : ''} ${isShellClosing ? 'shell-window-closing' : ''} ${isShellOpening ? 'shell-window-opening' : ''}`}
              onAnimationEnd={(event) => {
                if (isShellOpening && event.animationName === 'shellPanelOpacityIn') {
                  setIsShellOpening(false);
                }
              }}
            >
              <div className="shell-bar">
                <button
                  type="button"
                  className="shell-dot-button shell-dot-button-close"
                  onClick={isShellClosed ? reopenShellWindow : closeShellWindow}
                  aria-label={isShellClosed ? 'Reopen intro window' : 'Close intro window'}
                  title={isShellClosed ? 'Reopen' : 'Close'}
                  disabled={isShellClosing || isShellOpening}
                >
                  <span className="shell-dot shell-dot-red">
                    <span className="shell-dot-glyph shell-dot-glyph-close">×</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="shell-dot-button shell-dot-button-minimize"
                  onClick={isShellClosed ? reopenShellWindow : () => setIsShellMinimized((current) => !current)}
                  aria-label={
                    isShellClosed
                      ? 'Reopen intro window'
                      : isShellMinimized
                        ? 'Expand intro window'
                        : 'Minimize intro window'
                  }
                  aria-pressed={isShellMinimized}
                  title={isShellClosed ? 'Reopen' : isShellMinimized ? 'Expand' : 'Minimize'}
                  disabled={isShellClosing || isShellOpening}
                >
                  <span className="shell-dot shell-dot-yellow">
                    <span className="shell-dot-glyph">-</span>
                  </span>
                </button>
                <span className="shell-dot shell-dot-green" />
                <p
                  role={isShellClosed ? 'button' : undefined}
                  tabIndex={isShellClosed ? 0 : undefined}
                  onClick={isShellClosed ? reopenShellWindow : undefined}
                  onKeyDown={
                    isShellClosed
                      ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            reopenShellWindow();
                          }
                        }
                      : undefined
                  }
                >
                  engineer.profile.sh
                </p>
              </div>

              <div className="shell-content">
                <p className="shell-kicker">Software engineer / builder / traveler</p>
                <h1>Sahil Paudel</h1>
                <p className="shell-summary">
                  Backend systems, clean interfaces, and a life split between code, cats, and flights.
                </p>

                <div className="shell-logs">
                  {shellLines.map((line) => (
                    <div key={line.prompt} className="shell-line">
                      <p className="shell-prompt">{line.prompt}</p>
                      <p className="shell-output">{line.output}</p>
                    </div>
                  ))}
                </div>

                <div className="hero-actions">
                  <button type="button" className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                    View work
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => scrollToSection('experience')}>
                    Journey
                  </button>
                  <a className="btn btn-ghost" href="mailto:sahilpaudel@yahoo.in">
                    Contact
                  </a>
                </div>

                <div className="quick-stats">
                  {quickStats.map((item) => (
                    <article key={item.label} className="stat-card">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </article>
                  ))}
                </div>
              </div>

            </article>
        </section>

        <div className="skills-strip" aria-label="Core technical skills">
          <span className="skills-label">Stack</span>
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>

        <section className="section-block" id="projects">
          <div className="section-head">
            <p className="section-kicker">Selected Work</p>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {featuredProjects.slice(0, visibleProjectCount).map((project) => (
              <article
                key={`${project.company}-${project.name}-${project.year}`}
                className="project-card"
              >
                <div className="project-meta">
                  <div className="project-company">
                    <img src={`/${project.logo}`} alt={project.company} className="project-logo" />
                    <div>
                      <span>{project.company}</span>
                      <strong>{project.contribution}</strong>
                    </div>
                  </div>
                  <p>{project.year}</p>
                </div>

                <h3>{project.name}</h3>
                <p className="project-summary">{summarize(project.description)}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={`${project.name}-${item}`} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {visibleProjectCount < featuredProjects.length && (
            <div className="projects-more-wrap">
              <button
                type="button"
                className="projects-more"
                onClick={() => setVisibleProjectCount((count) => Math.min(count + 2, featuredProjects.length))}
              >
                ── show more projects ──
              </button>
            </div>
          )}
        </section>

        <section className="section-block split-layout" id="experience">
          <div>
            <div className="section-head">
              <p className="section-kicker">Timeline</p>
              <h2>Experience</h2>
            </div>

            <div className="experience-list">
              {works.map((work) => (
                <article key={work.name} className="experience-card">
                  <div className="experience-left">
                    <p>{work.year}</p>
                    <h3>{work.role}</h3>
                    <span>{work.name}</span>
                  </div>

                  <div className="experience-right">
                    {work.website ? (
                      <a href={work.website} target="_blank" rel="noopener noreferrer" className="company-mark-link" title={`Visit ${work.name}`}>
                        <img src={`/${work.image}`} alt={work.name} className="company-mark" />
                      </a>
                    ) : (
                      <img src={`/${work.image}`} alt={work.name} className="company-mark" />
                    )}
                    <small>{work.domain}</small>
                    <small>{work.location}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="side-column">
            <article className="info-card" id="education">
              <p className="section-kicker">Education</p>
              <div className="info-list">
                {educations.map((education) => (
                  <div key={`${education.name}-${education.year}`} className="info-row">
                    <span>{education.year}</span>
                    <div>
                      <strong>{education.name}</strong>
                      <p>{education.from}</p>
                      <span className="edu-grade">{education.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="info-card" id="contact">
              <p className="section-kicker">Contact</p>
              <h3>Open to good engineering work.</h3>
              <a className="contact-link" href="mailto:sahilpaudel@yahoo.in">
                sahilpaudel@yahoo.in
              </a>

              <div className="social-list">
                {primaryProfiles.map((profile) => (
                  <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer">
                    {profile.name}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-block" id="adventures">
          <div className="section-head">
            <p className="section-kicker">Beyond Code</p>
            <h2>Adventures</h2>
          </div>
          <div className="adventures-grid">
            {adventures.map((adventure) => (
              <article key={adventure.name} className="adventure-card">
                {adventure.image && (
                  <div className="adventure-img-wrap">
                    <img
                      className="adventure-img"
                      src={adventure.image}
                      alt={adventure.name}
                    />
                    <div className="adventure-img-overlay" />
                    <div className="adventure-img-meta">
                      <div className="adventure-badges">
                        <span className="adventure-type">{adventure.type}</span>
                        {adventure.difficulty && (
                          <span className={`adventure-difficulty adventure-difficulty--${adventure.difficulty.toLowerCase()}`}>
                            {adventure.difficulty}
                          </span>
                        )}
                      </div>
                      <span className="adventure-elev">
                        <span className="adventure-elev-ft">{adventure.elevation}</span>
                        <span className="adventure-elev-m">{adventure.elevationMetric}</span>
                      </span>
                    </div>
                  </div>
                )}
                <div className="adventure-body">
                  <h3 className="adventure-name">{adventure.name}</h3>
                  <p className="adventure-subtitle">{adventure.subtitle}</p>
                </div>
                <div className="adventure-divider" />
                <dl className="adventure-stats">
                  <div className="adventure-stat">
                    <dt>Route</dt>
                    <dd>{adventure.origin} → {adventure.location}</dd>
                  </div>
                  <div className="adventure-stat">
                    <dt>Dates</dt>
                    <dd>{adventure.startDate} – {adventure.endDate}</dd>
                  </div>
                  <div className="adventure-stat adventure-stat-row">
                    <div>
                      <dt>Duration</dt>
                      <dd>{adventure.duration}</dd>
                    </div>
                    <div>
                      <dt>Distance</dt>
                      <dd>{adventure.distance}</dd>
                    </div>
                  </div>
                </dl>
                <div className="adventure-footer">
                  <div className="adventure-tags">
                    {adventure.tags.map((tag) => (
                      <span key={tag} className="adventure-tag">{tag}</span>
                    ))}
                  </div>
                  {adventure.videoUrl && (
                    <a
                      className="adventure-video-link"
                      href={adventure.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${adventure.name} trek video`}
                    >
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M6 3.5L13 8l-7 4.5V3.5z"/>
                      </svg>
                      Watch Trek
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Sahil Paudel</span>
        <span className="footer-sep">·</span>
        <a href="mailto:sahilpaudel@yahoo.in">sahilpaudel@yahoo.in</a>
        <span className="footer-sep">·</span>
        <span>Bengaluru, India</span>
      </footer>
    </div>
  );
}

export default App;
