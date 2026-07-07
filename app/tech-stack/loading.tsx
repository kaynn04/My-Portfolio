export default function TechStackLoading() {
  return <ColumnPageSkeleton ariaLabel="Loading tech stack" cardCount={6} />;
}

function ColumnPageSkeleton({
  ariaLabel,
  cardCount,
}: {
  ariaLabel: string;
  cardCount: number;
}) {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8" aria-label={ariaLabel}>
      <div className="mx-auto max-w-4xl animate-pulse motion-reduce:animate-none">
        <div className="h-4 w-24 rounded-full bg-surface-hover" />

        <header className="py-16">
          <div className="h-4 w-40 rounded-full bg-surface-hover" />
          <div className="mt-5 h-12 w-64 rounded-2xl bg-surface-hover" />
          <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-surface-hover" />
          <div className="mt-3 h-4 w-3/4 rounded-full bg-surface-hover" />
        </header>

        <div className="space-y-4">
          {Array.from({ length: cardCount }).map((_, index) => (
            <section
              key={index}
              className="rounded-3xl border border-line bg-surface p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="h-6 w-36 rounded-full bg-surface-hover" />
                <div className="h-4 w-8 rounded-full bg-surface-hover" />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="h-9 w-24 rounded-full bg-surface-hover"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
