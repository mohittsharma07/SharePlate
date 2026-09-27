export default function IntroOverlay() {
  return (
    <div className="intro-screen fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-[#070712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.12),transparent_55%)]" />

      <div className="relative z-10 px-5 text-center">
        <div className="intro-logo mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/15 to-teal-400/15 text-4xl ring-1 ring-teal-300/20">
          🍽️
        </div>

        {/* Brand */}
        <h1 className="mt-5 text-3xl font-black tracking-tight">
          <span className="text-teal-300">Share</span>
          <span className="text-sky-300">Plate</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">Share food. Help someone.</p>

        {/* Loading progress */}
        <div className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="intro-progress h-full rounded-full bg-gradient-to-r from-sky-400 to-teal-400" />
        </div>

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-600">
          Loading...
        </p>
      </div>
    </div>
  );
}
