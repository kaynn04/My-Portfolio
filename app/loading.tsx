const skeletonCards = [
  "min-h-72 md:col-span-6",
  "min-h-72 md:order-first md:col-span-3",
  "min-h-72 md:col-span-3",
  "min-h-96 md:col-span-9",
  "min-h-96 md:col-span-3",
  "min-h-80 md:col-span-5",
  "min-h-80 md:col-span-7",
  "min-h-56 md:col-span-9",
  "min-h-56 md:col-span-3",
];

export default function Loading() {
  return (
    <main
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8"
      aria-label="Loading portfolio"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-12">
        {skeletonCards.map((cardSize, index) => (
          <SkeletonCard key={index} className={cardSize} />
        ))}
      </div>
    </main>
  );
}

function SkeletonCard({ className }: { className: string }) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-line bg-surface ${className}`}
    >
      <div className="absolute inset-0 animate-pulse bg-surface-hover/60 motion-reduce:animate-none" />
      <div className="absolute inset-x-8 top-8 space-y-4">
        <div className="h-3 w-24 rounded-full bg-background/60" />
        <div className="h-5 w-1/2 rounded-full bg-background/60" />
        <div className="h-3 w-2/3 rounded-full bg-background/50" />
      </div>
    </section>
  );
}
