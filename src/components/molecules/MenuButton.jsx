export function MenuButton({ isOpen, onClick }) {
  return (
    <button
      className="menu-button"
      type="button"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <span />
      <span />
    </button>
  );
}
