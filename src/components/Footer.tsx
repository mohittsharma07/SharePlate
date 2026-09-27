export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061214]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="min-w-0">
          <div className="flex items-center gap-2 font-black text-white">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-teal-400 text-sm">
              🍽️
            </span>

            <span>
              Share<span className="text-teal-300">Plate</span>
            </span>
          </div>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            A simple concept for sharing surplus food with the community.
          </p>
        </div>

        {/* Project info */}
        <div className="text-left sm:text-right">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Frontend Demo Project
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Built with React + TypeScript
          </p>

          <p className="mt-2 text-sm font-bold text-teal-300">
            Designed &amp; Developed by Mohit Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
