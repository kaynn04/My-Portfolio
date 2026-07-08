export default function MapCard() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-colors duration-200">
      <div>
        <p className="text-xs font-medium tracking-wider text-muted uppercase">
          Based in
        </p>
        <h3 className="mt-1 text-xl font-semibold text-foreground">
          Philippines
        </h3>
      </div>

      <div className="relative my-4 flex min-h-52 flex-1 items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-muted opacity-25 [mask-image:url('/ph.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] spider:bg-[#2A2A32] spider:opacity-60"
        />

        {/* Adjust top and left percentages to pinpoint your exact location. */}
        <div className="absolute top-[34%] left-[42%] flex h-3 w-3">
          <span className="absolute -top-6 left-4 whitespace-nowrap rounded-full border border-line bg-surface/90 px-2 py-0.5 text-xs font-semibold text-foreground shadow-sm spider:border-[#1f1f22] spider:bg-[#1d1d20]/90 spider:text-gray-300">
            Metro Manila
          </span>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-strong spider:bg-red-600" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted spider:border-[#1f1f22]">
        <span>PHT (UTC+8)</span>

        <span className="font-medium spider:text-gray-300">
          Flexible Work Mode
        </span>
      </div>
    </div>
  );
}
