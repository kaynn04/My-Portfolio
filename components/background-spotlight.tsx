"use client";

import { useEffect } from "react";

export default function BackgroundSpotlight() {
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      document.documentElement.style.setProperty(
        "--spotlight-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--spotlight-y",
        `${event.clientY}px`,
      );
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(620px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,20%),rgba(91,93,113,0.2),transparent_70%)] spider:bg-[radial-gradient(620px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,20%),rgba(239,68,68,0.2),transparent_70%)]"
    />
  );
}
