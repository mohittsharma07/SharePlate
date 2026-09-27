import FoodCard from "./ui/FoodCard";
import { MiniStat } from "./ui/Stats";
import SectionHeading from "./ui/SectionHeading";
import { categoryIcons } from "../data/foods";
import type { Food, Page } from "../types/food";

type HomePageProps = {
  foods: Food[];
  totalMeals: number;
  goTo: (target: Page) => void;
};

export default function HomePage({ foods, totalMeals, goTo }: HomePageProps) {
  return (
    <main className="home-scene overflow-hidden">
      {/* Message */}
      <div
        aria-label="SharePlate message ticker"
        className="home-marquee relative overflow-hidden border-b border-teal-300/10 bg-[#071516]"
      >
        <div className="shareplate-marquee flex w-max gap-8 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-teal-300 sm:text-xs">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex gap-8 whitespace-nowrap">
              <span>Share food</span>
              <span>✦</span>
              <span>Reduce waste</span>
              <span>✦</span>
              <span>Help communities</span>
              <span>✦</span>
              <span>Every meal counts</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero-stage relative overflow-hidden">
        <div className="hero-glow hero-glow-left absolute -left-32 top-20 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="hero-glow hero-glow-right absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-24">
          {/* Hero content */}
          <div className="flex flex-col justify-center">
            <div className="hero-badge mb-6 flex w-fit items-center gap-2 rounded-full border border-teal-300/15 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-teal-200 shadow-lg backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              Turning surplus into impact
            </div>

            <h1 className="hero-title max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Good food deserves
              <span className="block bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                another table.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Share surplus food with people and community organizations instead
              of letting good meals go to waste.
            </p>

            <div className="mt-8 flex flex-col gap-3 xs:flex-row sm:flex-row">
              <button
                type="button"
                onClick={() => goTo("donate")}
                className="rounded-2xl bg-gradient-to-r from-sky-400 to-teal-300 px-6 py-3.5 font-black text-slate-950 shadow-xl shadow-teal-400/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-400/20"
              >
                Donate Food <span className="ml-1">→</span>
              </button>

              <button
                type="button"
                onClick={() => goTo("explore")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-extrabold text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/10"
              >
                Explore available food
              </button>
            </div>

            {/* Stats */}
            <div className="mt-11 grid max-w-xl grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <MiniStat value={`${foods.length}+`} label="Donations" />

              <MiniStat value={`${totalMeals}+`} label="Meals listed" />

              <MiniStat value="24/7" label="Simple sharing" />
            </div>
          </div>

          {/* Preview card */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="relative w-full max-w-md rounded-[2.25rem] border border-white/10 bg-[#151b2b] p-4 shadow-[0_25px_70px_-25px_rgba(0,0,0,.7)] sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                    Today on SharePlate
                  </p>

                  <h2 className="mt-1 text-2xl font-black text-white">
                    Fresh & ready
                  </h2>
                </div>

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-50 text-2xl">
                  🍲
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {foods.slice(0, 3).map((food, index) => (
                  <div
                    key={food.id}
                    className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-[#20283a] p-3"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#303b4d] text-2xl">
                      {categoryIcons[food.category] || "🍱"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-extrabold text-white">
                        {food.title}
                      </h3>

                      <p className="mt-1 truncate text-xs font-medium text-slate-300">
                        {food.meals} meals · {food.area}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-black text-sky-800">
                        LIVE
                      </span>

                      <div className="mt-1 text-[10px] font-bold text-slate-400">
                        #{index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-teal-500 to-sky-400 p-5 text-slate-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black text-teal-950/80">
                      Small action. Real difference.
                    </p>

                    <p className="mt-1 text-lg font-black">
                      Make your extra count.
                    </p>
                  </div>

                  <div className="shrink-0 text-4xl">✨</div>
                </div>
              </div>
            </div>

            {/* Floating */}
            <div className="float-chip float-chip-one hidden sm:flex">
              <span>🥗</span>
              Fresh meals
            </div>

            <div className="float-chip float-chip-two hidden sm:flex">
              <span>✨</span>
              Less waste
            </div>

            <div className="float-chip float-chip-three hidden px-4 py-2.5 text-sm sm:flex">
              <span className="text-base">🤝</span>
              More sharing
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="home-dark-section bg-[#0b1517] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Simple process"
            title="From extra food to another table."
            description="Four simple steps keep the experience easy for donors and community organizations."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Donate",
                "List your surplus food and pickup details.",
                "🥗",
              ],
              [
                "02",
                "Discover",
                "Find food that matches your organization’s needs.",
                "🔎",
              ],
              [
                "03",
                "Coordinate",
                "Arrange a convenient pickup before the deadline.",
                "🤝",
              ],
              ["04", "Share", "Help good food reach another table.", "💚"],
            ].map(([num, title, desc, icon]) => (
              <div
                key={num}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-300/20 hover:bg-white/[0.07] hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-teal-300">
                    {num}
                  </span>

                  <span className="text-2xl transition group-hover:scale-110">
                    {icon}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available food */}
      <section className="home-dark-section bg-[#071516] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Available now"
              title="Food waiting to be shared."
              description="A few of the latest listings on SharePlate."
            />

            <button
              type="button"
              onClick={() => goTo("explore")}
              className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm backdrop-blur transition hover:border-teal-300/30 hover:bg-white/10 hover:text-teal-200"
            >
              View all →
            </button>
          </div>

          {foods.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foods.slice(0, 3).map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <div className="text-4xl">🍽️</div>

              <h3 className="mt-4 text-xl font-black text-white">
                No food listings yet
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Start by adding a surplus food donation.
              </p>

              <button
                type="button"
                onClick={() => goTo("donate")}
                className="mt-5 rounded-2xl bg-gradient-to-r from-sky-400 to-teal-400 px-5 py-3 font-black text-slate-950"
              >
                Donate Food →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-12 lg:px-14">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Make your extra count
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Have food left over from an event?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Give it another chance to become a useful meal instead of
                becoming waste.
              </p>
            </div>

            <button
              type="button"
              onClick={() => goTo("donate")}
              className="w-fit rounded-2xl bg-white px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-teal-50"
            >
              Start a donation →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
