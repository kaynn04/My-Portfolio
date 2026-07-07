export default function ProjectsLoading() {
  return <ColumnPageSkeleton ariaLabel="Loading projects" cardCount={4} />;
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
          <div className="h-4 w-32 rounded-full bg-surface-hover" />
          <div className="mt-5 h-12 w-56 rounded-2xl bg-surface-hover" />
          <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-surface-hover" />
          <div className="mt-3 h-4 w-2/3 rounded-full bg-surface-hover" />
        </header>

        <div className="space-y-4">
          {Array.from({ length: cardCount }).map((_, index) => (
            <section
              key={index}
              className="rounded-3xl border border-line bg-surface p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="h-7 w-40 rounded-full bg-surface-hover" />
                <div className="h-7 w-24 rounded-full bg-surface-hover" />
              </div>

              <div className="mt-8 h-4 w-full rounded-full bg-surface-hover" />
              <div className="mt-3 h-4 w-4/5 rounded-full bg-surface-hover" />
              <div className="mt-6 flex gap-2">
                <div className="h-7 w-20 rounded-full bg-surface-hover" />
                <div className="h-7 w-24 rounded-full bg-surface-hover" />
                <div className="h-7 w-16 rounded-full bg-surface-hover" />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
