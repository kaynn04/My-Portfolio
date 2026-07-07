"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { getStoredTheme, subscribeToThemeChanges } from "@/lib/theme";

const SCRAMBLE_CHARACTERS = "!<>-_/[]{}=+*^?#";

function getRandomCharacter() {
  return SCRAMBLE_CHARACTERS[
    Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)
  ];
}

export default function HeroName() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const finalName = theme === "spider" ? "Spider-Man" : "Kyan Oclares";
  const [displayName, setDisplayName] = useState(finalName);
  const previousName = useRef(finalName);

  useEffect(() => {
    if (previousName.current === finalName) {
      setDisplayName(finalName);
      return;
    }

    previousName.current = finalName;

    let frame = 0;
    const totalFrames = 24;

    const intervalId = window.setInterval(() => {
      frame += 1;

      setDisplayName(
        finalName
          .split("")
          .map((character, index) => {
            if (character === " " || character === "-") {
              return character;
            }

            const progress = frame - index * 1.2;

            return progress > totalFrames * 0.6
              ? character
              : getRandomCharacter();
          })
          .join(""),
      );

      if (frame > totalFrames + finalName.length) {
        window.clearInterval(intervalId);
        setDisplayName(finalName);
      }
    }, 35);

    return () => window.clearInterval(intervalId);
  }, [finalName]);

  return (
    <span className="inline-flex flex-wrap items-end gap-x-3 gap-y-1">
      <span>I&apos;m {displayName}.</span>
      {theme === "spider" ? (
        <span className="mb-1 rounded-full border border-accent/30 px-2 py-0.5 text-sm font-medium tracking-normal text-accent">
          Kyan Oclares
        </span>
      ) : null}
    </span>
  );
}
