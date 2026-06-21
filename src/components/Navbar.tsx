import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { nav } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" aria-label="Twist Parties home" onClick={() => setOpen(false)}>
          <Logo className="text-2xl" />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {nav.slice(0, -1).map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-1 text-sm font-medium transition-colors hover:text-twist ${
                    isActive ? "text-twist" : "text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button to="/contact" variant="orange" size="sm" className="hidden sm:inline-flex">
            Book Now
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`ti ${open ? "ti-x" : "ti-menu-2"} text-xl`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-hairline py-3 font-medium ${
                      isActive ? "text-twist" : "text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
