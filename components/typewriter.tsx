"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  phrases: string[];
};

export default function Typewriter({ phrases }: TypewriterProps) {
  const [text, setText] = useState("");
  const longestPhrase = phrases.reduce((longest, phrase) => {
    return phrase.length > longest.length ? phrase : longest;
  }, "");
  const phraseIndex = useRef(0);
  const characterIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function loop() {
      const phrase = phrases[phraseIndex.current];

      setText(phrase.slice(0, characterIndex.current));

      let delay = 55;

      if (!isDeleting.current && characterIndex.current < phrase.length) {
        characterIndex.current += 1;
      } else if (!isDeleting.current) {
        isDeleting.current = true;
        delay = 1100;
      } else if (characterIndex.current > 0) {
        characterIndex.current -= 1;
        delay = 30;
      } else {
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        delay = 320;
      }

      timeoutId = setTimeout(loop, delay);
    }

    loop();

    return () => clearTimeout(timeoutId);
  }, [phrases]);

  return (
    <span className="relative inline-grid min-w-0 align-baseline">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longestPhrase}
        <span className="typewriter-caret" />
      </span>

      <span className="col-start-1 row-start-1">
        {text}
        <span className="typewriter-caret" aria-hidden="true" />
      </span>
    </span>
  );
}
