"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
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

export default function ThemeRescueToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const [isThemeTransitionPlaying, setIsThemeTransitionPlaying] =
    useState(false);
  const isSpiderTheme = theme === "spider";
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    duration: 850,
    globalClassName: "spider-theme-transition",
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

  function toggleTheme() {
    if (isThemeTransitionPlaying) {
      return;
    }

    void toggleSwitchTheme();
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggleTheme}
      disabled={isThemeTransitionPlaying}
      aria-label={
        isSpiderTheme ? "Return to light theme" : "Activate spider theme"
      }
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm text-foreground shadow-2xl shadow-background/20 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/60 hover:text-accent-strong disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
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
          {isThemeTransitionPlaying
            ? "Suiting up..."
            : isSpiderTheme
              ? "Back to light"
              : "Send signal"}
        </span>
      </span>
    </button>
  );
}
