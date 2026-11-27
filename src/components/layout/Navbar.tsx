import { useContent } from "../../content";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { navigation: copy, studio } = useContent();
  const navigation = [
    { label: copy.yoga, to: "/yoga" },
    { label: copy.studio, to: "/studio" },
    { label: copy.pricing, to: "/preise" },
    { label: copy.contact, to: "/kontakt" },
  ];
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition hover:opacity-60 ${
      isActive ? "font-semibold" : "text-studio-muted"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-studio-line bg-studio-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl tracking-tight">
          {studio.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={copy.desktopLabel}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              reloadDocument={item.to === "/stundenplan"}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/stundenplan"
            reloadDocument
            className="button-primary !px-5 !py-2.5"
          >
            {copy.scheduleButton} <span aria-hidden>↗</span>
          </Link>
        </nav>

        <button
          className="rounded-full p-2 md:hidden"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-studio-line px-5 py-5 md:hidden"
          aria-label={copy.mobileLabel}
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                reloadDocument={item.to === "/stundenplan"}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/stundenplan"
              reloadDocument
              onClick={() => setOpen(false)}
              className="button-primary"
            >
              {copy.mobileScheduleButton}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
