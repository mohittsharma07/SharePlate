import { Stat } from "./ui/Stats";
import SectionHeading from "./ui/SectionHeading";

type ImpactPageProps = {
  listingCount: number;
  totalMeals: number;
};

export default function ImpactPage({
  listingCount,
  totalMeals,
}: ImpactPageProps) {
  return (
    <main className="min-h-screen bg-[#071516] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our impact"
          title="Every shared meal tells a small story."
          description="SharePlate turns surplus food listings into opportunities for community sharing."
        />

        {/* Impact stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Stat number={listingCount} label="Food listings" icon="📦" />

          <Stat number={totalMeals} label="Meals listed" icon="🍽️" />

          <Stat number="04" label="Workflow steps" icon="⚡" />

          <Stat number="100%" label="Prototype goal" icon="✨" />
        </div>

        {/* Impact content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Main message */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 to-sky-600 p-7 text-white sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sky-300/10 blur-2xl" />

            <div className="relative">
              <div className="text-5xl">🌱</div>

              <h2 className="mt-6 text-3xl font-black">
                Reduce waste. Share more.
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-teal-50">
                When usable surplus food exists, make it easier to discover and
                coordinate before it becomes waste.
              </p>
            </div>
          </div>

          {/* Focus card */}
          <div className="rounded-[2rem] border border-white/10 bg-[#15182b] p-7 shadow-xl shadow-black/10 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">
              What SharePlate focuses on
            </p>

            <h2 className="mt-3 text-2xl font-black text-white">
              Built for a simple purpose
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Make food donations easier to list",
                "Help organizations discover available food",
                "Keep the process simple and transparent",
                "Create awareness around avoidable food waste",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-400/10 text-xs font-black text-teal-300">
                    ✓
                  </span>

                  <span className="text-sm font-medium leading-6 text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
