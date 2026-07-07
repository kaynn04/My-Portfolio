export default function NewtonsCradle() {
  return (
    <div
      className="flex h-full min-h-64 items-center justify-center"
      aria-hidden="true"
    >
      <div className="relative">
        <div className="absolute -top-2 left-1/2 h-1 w-48 -translate-x-1/2 rounded-full bg-line" />

        <div className="flex">
          {["first", "", "", "", "last"].map((position, index) => (
            <span
              key={index}
              className={`cradle-pendulum ${position}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}