"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Shield, Zap } from "lucide-react";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import {
  getStoredTheme,
  subscribeToThemeChanges,
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_EVENT,
} from "@/lib/theme";

const THEME_REVEAL_DURATION_MS = 560;
const THEME_REVEAL_CLASS = "theme-reveal-active";

export default function ThemeRescueToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const revealResetTimeoutRef = useRef<number | undefined>(undefined);
  const [isThemeTransitionPlaying, setIsThemeTransitionPlaying] =
    useState(false);
  const [isThemeRevealPlaying, setIsThemeRevealPlaying] = useState(false);
  const isSpiderTheme = theme === "spider";
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: THEME_REVEAL_DURATION_MS,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
    globalClassName: "spider-theme-active",
    isDarkMode: isSpiderTheme,
    onDarkModeChange: (shouldUseSpiderTheme) => {
      const nextTheme = shouldUseSpiderTheme ? "spider" : "light";

      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      document.documentElement.dataset.theme = nextTheme;
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    },
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    return () => {
      if (revealResetTimeoutRef.current) {
        window.clearTimeout(revealResetTimeoutRef.current);
      }

      document.documentElement.classList.remove(THEME_REVEAL_CLASS);
    };
  }, []);

  useEffect(() => {
    function handleThemeTransition(event: Event) {
      const transitionEvent = event as CustomEvent<{ isPlaying: boolean }>;

      setIsThemeTransitionPlaying(Boolean(transitionEvent.detail.isPlaying));
    }

    window.addEventListener(THEME_TRANSITION_EVENT, handleThemeTransition);

    return () => {
      window.removeEventListener(THEME_TRANSITION_EVENT, handleThemeTransition);
    };
  }, []);

  useEffect(() => {
    if (!isThemeTransitionPlaying) {
      return;
    }

    const safetyReset = window.setTimeout(() => {
      setIsThemeTransitionPlaying(false);
    }, 3200);

    return () => {
      window.clearTimeout(safetyReset);
    };
  }, [isThemeTransitionPlaying]);

  async function toggleTheme() {
    if (isThemeTransitionPlaying || isThemeRevealPlaying) {
      return;
    }

    const canAnimateThemeReveal =
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (revealResetTimeoutRef.current) {
      window.clearTimeout(revealResetTimeoutRef.current);
    }

    if (canAnimateThemeReveal) {
      setIsThemeRevealPlaying(true);
      document.documentElement.classList.add(THEME_REVEAL_CLASS);
    }

    try {
      await toggleSwitchTheme();
    } finally {
      if (!canAnimateThemeReveal) {
        setIsThemeRevealPlaying(false);
        document.documentElement.classList.remove(THEME_REVEAL_CLASS);

        return;
      }

      revealResetTimeoutRef.current = window.setTimeout(() => {
        setIsThemeRevealPlaying(false);
        document.documentElement.classList.remove(THEME_REVEAL_CLASS);
      }, THEME_REVEAL_DURATION_MS);
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggleTheme}
      disabled={isThemeTransitionPlaying || isThemeRevealPlaying}
      aria-label={
        isSpiderTheme ? "Return to light theme" : "Activate spider theme"
      }
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm text-foreground shadow-2xl shadow-background/20 backdrop-blur transition-[transform,border-color,color,opacity] hover:-translate-y-1 hover:border-accent/60 hover:text-accent-strong disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background text-accent transition-transform group-hover:rotate-6 group-hover:scale-105">
        {isSpiderTheme ? (
          <Shield size={18} aria-hidden="true" />
        ) : (
          <Zap size={18} aria-hidden="true" />
        )}
      </span>

      <span className="hidden leading-tight sm:block">
        <span className="block text-xs text-muted">
          {isSpiderTheme ? "Spider mode" : "Switch theme"}
        </span>
        <span className="font-medium">
          {isThemeTransitionPlaying || isThemeRevealPlaying
            ? "Suiting up..."
            : isSpiderTheme
              ? "Back to light"
              : "Send signal"}
        </span>
      </span>
    </button>
  );
}
