type BurgerButtonProps = {
  open: boolean;
  onToggle: () => void;
};

export function BurgerButton({ open, onToggle }: BurgerButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Menu"
      className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
    >
      <span
        className={`h-[3px] w-6 rounded bg-gray-800 transition-all duration-300 ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`h-[3px] w-6 rounded bg-gray-800 transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-[3px] w-6 rounded bg-gray-800 transition-all duration-300 ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}