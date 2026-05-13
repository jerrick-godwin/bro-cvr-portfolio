import { useState } from "react";
import { Brand } from "../molecules/Brand";
import { MenuButton } from "../molecules/MenuButton";
import { NavMenu } from "../molecules/NavMenu";

export function SiteHeader({ navItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen((isOpen) => !isOpen)} />
      <NavMenu items={navItems} isOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
