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
        <SectionHeading
          eyebrow="Explore surplus food"
          title="Find food that is ready to be shared."
          description="Browse available food listings and discover surplus meals around the community."
        />

        {/* Search and filters */}
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#15182b] p-5 shadow-xl shadow-black/10 sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div>
              <label
                htmlFor="food-search"
                className="mb-2 block text-sm font-extrabold text-slate-200"
              >
                Search food
              </label>

              <input
                id="food-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by food, area..."
                className="w-full rounded-2xl border border-white/10 bg-[#20243b] px-4 py-3.5 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
              />
            </div>

            <div>
              <label
                htmlFor="food-category"
                className="mb-2 block text-sm font-extrabold text-slate-200"
              >
                Category
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
            </div>
          </div>

          {/* Category  */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-black transition ${
                  category === item
                    ? "bg-teal-400 text-slate-950"
                    : "bg-white/5 text-slate-400 hover:bg-teal-400/10 hover:text-teal-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-slate-400">
            Showing <span className="text-white">{filteredFoods.length}</span>{" "}
            food listing{filteredFoods.length === 1 ? "" : "s"}
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="self-start rounded-xl bg-white/5 px-4 py-2 text-xs font-black text-teal-300 transition hover:bg-teal-400/10"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Food results */}
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
          <div className="mt-6 rounded-[2rem] border border-dashed border-white/10 bg-[#15182b] px-6 py-16 text-center">
            <div className="text-5xl">🍽️</div>

            <h3 className="mt-5 text-2xl font-black text-white">
              No food found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
              Try another search or category to discover available food
              listings.
            </p>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-2xl bg-gradient-to-r from-sky-400 to-teal-400 px-5 py-3 font-black text-slate-950 transition hover:-translate-y-0.5"
              >
                Reset filters
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
