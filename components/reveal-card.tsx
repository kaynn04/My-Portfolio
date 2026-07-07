"use client";

import { useEffect, useRef, useState } from "react";

type RevealCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RevealCard({ children, className = "" }: RevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${className} transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
