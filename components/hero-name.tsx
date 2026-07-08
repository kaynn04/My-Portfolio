"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { getStoredTheme, subscribeToThemeChanges } from "@/lib/theme";

const CHARS = "!<>-_/[]{}=+*^?#";
const SPIDER_NAME = "I'm Spider-Man.";
const REAL_NAME = "I'm Kyan Oclares.";

function useScramble() {
  const [display, setDisplay] = useState(SPIDER_NAME);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const play = useCallback((text: string) => {
    let frame = 0;
    const total = 24;

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      frame++;

      setDisplay(
        text
          .split("")
          .map((character, index) => {
            if (character === " ") {
              return " ";
            }

            const progress = frame - index * 1.2;

            return progress > total * 0.6
              ? character
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (frame > total + text.length) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }

        setDisplay(text);
      }
    }, 35);
  }, []);

  return [display, play] as const;
}

function MobileSpiderName() {
  const [display, playScramble] = useScramble();
  const currentTargetRef = useRef(SPIDER_NAME);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const nextText =
        currentTargetRef.current === SPIDER_NAME ? REAL_NAME : SPIDER_NAME;

      currentTargetRef.current = nextText;
      playScramble(nextText);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [playScramble]);

  return (
    <span className="relative inline-grid md:hidden">
      <span className="invisible col-start-1 row-start-1">{REAL_NAME}</span>
      <span className="col-start-1 row-start-1">{display}</span>
    </span>
  );
}

function DesktopSpiderName() {
  const [display, playScramble] = useScramble();
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const heroCard = nameRef.current?.closest("[data-hero-card]");

    if (!heroCard) {
      return;
    }

    const revealName = () => playScramble(REAL_NAME);
    const hideName = () => playScramble(SPIDER_NAME);

    heroCard.addEventListener("mouseenter", revealName);
    heroCard.addEventListener("mouseleave", hideName);
    heroCard.addEventListener("focusin", revealName);
    heroCard.addEventListener("focusout", hideName);

    return () => {
      heroCard.removeEventListener("mouseenter", revealName);
      heroCard.removeEventListener("mouseleave", hideName);
      heroCard.removeEventListener("focusin", revealName);
      heroCard.removeEventListener("focusout", hideName);
    };
  }, [playScramble]);

  return (
    <span
      ref={nameRef}
      className="relative hidden cursor-default md:inline-grid"
      tabIndex={0}
    >
      <span className="invisible col-start-1 row-start-1">{REAL_NAME}</span>
      <span className="col-start-1 row-start-1 transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-none">
        {display}
      </span>
    </span>
  );
}

export default function HeroName() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getStoredTheme,
    () => "light",
  );
  const isSpiderTheme = theme === "spider";

  if (!isSpiderTheme) {
    return <span>{REAL_NAME}</span>;
  }

  return (
    <>
      <MobileSpiderName />
      <DesktopSpiderName />
    </>
  );
}
