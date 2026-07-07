"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  announceThemeTransition,
  getStoredTheme,
  subscribeToThemeChanges,
} from "@/lib/theme";

const VIDEO_START_SECONDS = 6;
const VIDEO_END_SECONDS = 8;

export default function PortraitCard() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousTheme = useRef(theme);
  const [isPlayingTransition, setIsPlayingTransition] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    return () => {
      video?.pause();
      announceThemeTransition(false);
    };
  }, []);

  useEffect(() => {
    if (theme !== "spider") {
      videoRef.current?.pause();
      announceThemeTransition(false);

      window.setTimeout(() => {
        setIsPlayingTransition(false);
      }, 0);
    }

    const changedFromLightToSpider =
      previousTheme.current === "light" && theme === "spider";

    previousTheme.current = theme;

    if (!changedFromLightToSpider) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = VIDEO_START_SECONDS;
    setIsPlayingTransition(true);
    announceThemeTransition(true);

    void video.play().catch(() => {
      setIsPlayingTransition(false);
      announceThemeTransition(false);
    });
  }, [theme]);

  function handleTimeUpdate() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.currentTime >= VIDEO_END_SECONDS) {
      video.pause();
      setIsPlayingTransition(false);
      announceThemeTransition(false);
    }
  }

  return (
    <section className="relative min-h-80 overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(91,93,113,0.2),transparent_34%),linear-gradient(180deg,#f8f6f5_0%,#ddd4d3_100%)] spider:hidden" />

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_18%,rgba(239,68,68,0.18),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(36,48,64,0.75),transparent_45%),linear-gradient(180deg,#111820_0%,#0b0d12_58%,#08090d_100%)] spider:block" />

      <Image
        src="/my_picture_nobg.png"
        alt="Portrait of Kyan Oclares"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 25vw"
        className="scale-110 object-contain object-bottom p-1 transition-opacity duration-500 spider:hidden"
      />

      <Image
        src="/spiderman.png"
        alt="Spider-themed portrait of Kyan Oclares"
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className={`hidden scale-95 object-contain object-bottom p-0 transition-opacity duration-500 spider:block ${
          isPlayingTransition ? "spider:opacity-0" : "spider:opacity-100"
        }`}
      />

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full scale-[1.12] object-contain object-bottom transition-opacity duration-300 sm:scale-[1.08] md:scale-[1.45] ${
          isPlayingTransition ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        muted
        playsInline
        preload="metadata"
        aria-label="Spider-themed transition video of Kyan Oclares"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlayingTransition(false);
          announceThemeTransition(false);
        }}
      >
        <source src="/spiderman_vid.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_48%,transparent_38%,rgba(8,9,13,0.58)_82%,rgba(8,9,13,0.82)_100%)] spider:block" />

      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent spider:from-background/25" />
    </section>
  );
}
