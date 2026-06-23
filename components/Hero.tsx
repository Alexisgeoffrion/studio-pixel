'use client';
import { useRef, useEffect, useState } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  // Resolved client-side only — default false avoids SSR/hydration mismatch.
  const [isDesktop, setIsDesktop] = useState(false);

  // ── Step 1: detect device type after mount ──────────────────────────────
  useEffect(() => {
    // "pointer: fine" = mouse/trackpad; "pointer: coarse" = touchscreen.
    // Combined with min-width this is more reliable than user-agent sniffing.
    const desktop = window.matchMedia(
      '(pointer: fine) and (min-width: 768px)'
    ).matches;

    setIsDesktop(desktop);

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    if (!desktop) {
      // Mobile fallback: shrink the container to one viewport so the user
      // doesn't have to scroll through 300 vh of empty space.
      container.style.height = '100vh';

      // iOS Safari allows play() on muted videos without a user gesture.
      video.loop = true;
      video.play().catch(() => {
        // Silently swallow — browser may block until user interaction.
      });
    }
  }, []);

  // ── Step 2: scroll-scrubbing rAF loop — desktop only ───────────────────
  useEffect(() => {
    if (!isDesktop) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let rafId: number;

    const tick = () => {
      if (video.readyState >= 2 && video.duration) {
        const rect = container.getBoundingClientRect();
        const scrollableRange = container.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollableRange));
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.001) {
          video.currentTime = targetTime;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    // Guard against race: video may have loaded before this effect ran.
    if (video.readyState >= 1) setVideoReady(true);

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isDesktop]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src="/hero-optimized.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          // React synthetic events: always fire, no race with useEffect
          onLoadedMetadata={() => setVideoReady(true)}
          onCanPlayThrough={() => setVideoReady(true)}
          onError={(e) => console.error('[Hero] video error', e)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Fallback gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1a14] to-[#0a0a0a] transition-opacity duration-1000 ${
            videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Dark overlay — top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        {/* Vignette — all four edges fade to black for a premium cinematic look */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 42%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* Bottom-right corner mask — covers video artifact, blends into the vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 14%, rgba(0,0,0,0.25) 32%, transparent 50%)',
          }}
        />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(ellipse, #00e5a0 0%, transparent 70%)' }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00e5a0] animate-pulse" />
            <span className="text-xs text-white/70 tracking-widest uppercase">Agence Web Premium</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des sites web qui font{' '}
            <span className="gradient-text">grandir votre commerce</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
            Studio Pixel conçoit des sites web modernes, rapides et optimisés pour convertir vos
            visiteurs en clients. Résultats garantis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#00e5a0] text-[#0a0a0a] font-bold px-8 py-4 rounded-full text-base hover:bg-[#00c4e8] transition-all duration-300 hover:scale-105 active:scale-95 glow-mint"
            >
              Demander une soumission gratuite
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-base font-medium"
            >
              Voir nos réalisations
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-white/50 tracking-widest uppercase">Défiler</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#00e5a0] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
