import type { Page } from "../types/food";

type NavbarProps = {
  currentPage: Page;
  goTo: (target: Page) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

export default function Navbar({
  currentPage,
  goTo,
  mobileOpen,
  setMobileOpen,
}: NavbarProps) {
  const links: Array<[Page, string]> = [
    ["home", "Home"],
    ["explore", "Explore Food"],
    ["impact", "Impact"],
  ];

  const handleNavigate = (target: Page) => {
    goTo(target);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070712]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          aria-label="Go to SharePlate home"
          className="flex items-center gap-2.5"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-teal-400 text-lg shadow-lg shadow-teal-400/10">
            🍽️
          </span>

          <span className="text-xl font-black tracking-tight">
            <span className="text-teal-300">Share</span>
            <span className="text-sky-300">Plate</span>
          </span>
        </button>

        {/* Desktop */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map(([page, label]) => (
            <button
              type="button"
              key={page}
              onClick={() => handleNavigate(page)}
              className={`rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                currentPage === page
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-teal-300"
              }`}
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handleNavigate("donate")}
            className={`ml-2 rounded-xl px-5 py-2.5 text-sm font-black transition ${
              currentPage === "donate"
                ? "bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950"
                : "bg-white/10 text-white hover:bg-teal-400 hover:text-slate-950"
            }`}
          >
            Donate Food
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition hover:border-teal-300/30 hover:bg-teal-400/10 md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#070712] px-5 py-4 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-2"
          >
            {links.map(([page, label]) => (
              <button
                type="button"
                key={page}
                onClick={() => handleNavigate(page)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-extrabold transition ${
                  currentPage === page
                    ? "bg-teal-400/10 text-teal-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigate("donate")}
              className="mt-1 rounded-xl bg-gradient-to-r from-sky-400 to-teal-400 px-4 py-3 text-left text-sm font-black text-slate-950 transition hover:brightness-105"
            >
              Donate Food
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
