export default function RadarPulse() {
  return (
    <span
      className="relative flex h-3 w-3 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <span className="bg-accent absolute h-2 w-2 rounded-full" />

      {[0, 0.8, 1.6].map((delay) => (
        <span
          key={delay}
          className="radar-wave border-accent absolute inset-0 rounded-full border"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}
