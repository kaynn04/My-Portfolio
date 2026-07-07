"use client";

import { useSyncExternalStore } from "react";

import { getStoredTheme, subscribeToThemeChanges } from "@/lib/theme";

export default function HeroName() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const displayName = theme === "spider" ? "Spider-Man" : "Kyan Oclares";

  return (
    <span className="inline-flex flex-wrap items-end gap-x-3 gap-y-1">
      <span className="inline-flex flex-wrap gap-x-2">
        <span>I&apos;m</span>
        <span className="whitespace-nowrap">{displayName}.</span>
      </span>
      {theme === "spider" ? (
        <span className="mb-1 rounded-full border border-accent/30 px-2 py-0.5 text-sm font-medium tracking-normal text-accent">
          Kyan Oclares
        </span>
      ) : null}
    </span>
  );
}
