import { useMemo } from "react";

import FoodCard from "./ui/FoodCard";
import SectionHeading from "./ui/SectionHeading";

import type { Food } from "../types/food";

type ExplorePageProps = {
  filteredFoods: Food[];
  search: string;
  category: string;
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  showToast: (message: string) => void;
};

const categories = [
  "All",
  "Meals",
  "Indian Food",
  "Packed Food",
  "Bakery",
  "Other",
];

export default function ExplorePage({
  filteredFoods,
  search,
  category,
  setSearch,
  setCategory,
  showToast,
}: ExplorePageProps) {
  const hasFilters = useMemo(
    () => Boolean(search.trim()) || category !== "All",
    [search, category],
  );

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#070712] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <SectionHeading
          eyebrow="Find available food"
          title="Find food available near you."
          description="People and community organizations can check available food donations by city or area and find meals that can be collected before the pickup deadline."
        />

        {/* Search & Filter Box */}
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#15182b] p-5 shadow-xl shadow-black/10 sm:p-6">

          <div className="grid gap-5 md:grid-cols-[1fr_220px]">

            {/* City / Area Search */}
            <div>
              <label
                htmlFor="area-search"
                className="mb-2 block text-sm font-extrabold text-slate-200"
              >
                Find by city or area
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                  📍
                </span>

                <input
                  id="area-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="e.g. Kanpur, Civil Lines..."
                  className="w-full rounded-2xl border border-white/10 bg-[#20243b] py-3.5 pl-12 pr-4 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
                />
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Search by city or pickup area to find nearby food donations.
              </p>
            </div>

            {/* Food Category */}
            <div>
              <label
                htmlFor="food-category"
                className="mb-2 block text-sm font-extrabold text-slate-200"
              >
                Food category
              </label>

              <select
                id="food-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#20243b] px-4 py-3.5 font-medium text-white outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="bg-[#15182b] text-white"
                  >
                    {item}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Choose a category if you need a specific type of food.
              </p>
            </div>

          </div>
        </div>

        {/* Results Header */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold text-slate-400">
              <span className="text-white">
                {filteredFoods.length}
              </span>{" "}
              food donation
              {filteredFoods.length === 1 ? "" : "s"} available
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Check the number of meals, pickup area and deadline before
              requesting food.
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="self-start rounded-xl bg-white/5 px-4 py-2 text-xs font-black text-teal-300 transition hover:bg-teal-400/10 hover:text-teal-200"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* Food Results */}
        {filteredFoods.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onRequest={() =>
                  showToast(
                    `Request noted for "${food.title}". This is a frontend demo.`,
                  )
                }
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-6 rounded-[2rem] border border-dashed border-white/10 bg-[#15182b] px-6 py-16 text-center">

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-teal-400/10 text-3xl">
              📍
            </div>

            <h3 className="mt-5 text-2xl font-black text-white">
              No food available here
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
              We could not find any food donations matching this city,
              area or category. Try another nearby location.
            </p>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-2xl bg-gradient-to-r from-sky-400 to-teal-400 px-5 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/10"
              >
                Show all available food
              </button>
            )}

          </div>
        )}

        {/* Helpful Information */}
        <div className="mt-12 rounded-[2rem] border border-teal-300/10 bg-teal-400/[0.04] p-6 sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-400/10 text-xl">
              🤝
            </div>

            <div>
              <h3 className="font-black text-white">
                Looking for food for a group?
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                Check the estimated number of meals, pickup location and
                deadline on each donation card before requesting or
                arranging collection.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}