import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, studio } from "../../data/studio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition hover:opacity-60 ${isActive ? "font-semibold" : "text-studio-muted"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-studio-line bg-studio-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl tracking-tight">{studio.name}</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => <NavLink key={item.to} to={item.to} className={navClass}>{item.label}</NavLink>)}
          <Link to="/stundenplan" className="button-primary !px-5 !py-2.5">Stundenplan <span aria-hidden>↗</span></Link>
        </nav>
        <button className="rounded-full p-2 md:hidden" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-studio-line px-5 py-5 md:hidden" aria-label="Mobile Navigation">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={navClass}>{item.label}</NavLink>)}
            <Link to="/stundenplan" onClick={() => setOpen(false)} className="button-primary">Stundenplan entdecken</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
