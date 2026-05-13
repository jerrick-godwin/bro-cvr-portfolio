export function NavMenu({ isOpen, items, onNavigate }) {
  return (
    <nav className={isOpen ? "nav nav-open" : "nav"} aria-label="Primary">
      {items.map((item) => (
        <a
          className={item.cta ? "nav-cta" : undefined}
          href={item.href}
          key={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
