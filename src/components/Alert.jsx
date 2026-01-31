export default function Alert({ message, onClose }) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
      "
    >
      <div
        className="
          w-full max-w-sm rounded-2xl
          bg-background text-foreground
          shadow-xl
          p-6 space-y-4
          animate-in fade-in zoom-in
        "
      >
        <p className="text-sm leading-relaxed text-center">
          {message}
        </p>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="
              rounded-lg
              bg-foreground text-background
              px-5 py-2 text-sm font-medium
              hover:opacity-90
              focus:outline-none focus:ring-2 focus:ring-foreground
            "
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
