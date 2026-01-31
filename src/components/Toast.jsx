export default function Toast({ message }) {
  return (
    <div
      className="
        fixed bottom-6 left-1/2 z-50
        -translate-x-1/2
        pointer-events-none
      "
    >
      <div
        className="
          rounded-full
          bg-foreground text-background
          px-5 py-2
          text-sm font-medium
          shadow-lg
          animate-in fade-in slide-in-from-bottom-2
        "
      >
        {message}
      </div>
    </div>
  );
}
