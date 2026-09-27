import { categoryIcons } from "../../data/foods";
import type { Food } from "../../types/food";

type FoodCardProps = {
  food: Food;
  onRequest?: () => void;
};

export default function FoodCard({ food, onRequest }: FoodCardProps) {
  const icon = categoryIcons[food.category] || "🍱";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#15182b] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-teal-300/20 hover:shadow-2xl hover:shadow-teal-400/10">
      {/* Food preview */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sky-950 via-[#17253a] to-teal-950">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-teal-400/10 blur-2xl" />

        <div className="relative grid h-full place-items-center text-7xl transition duration-300 group-hover:scale-105">
          {icon}
        </div>

        {/* Status */}
        <div className="absolute left-4 top-4 rounded-full border border-teal-300/20 bg-[#0d2024]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-teal-300">
          <span className="mr-1">●</span>
          {food.status}
        </div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-bold text-teal-300">
            {food.category}
          </span>

          <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-black text-slate-400">
            {food.type}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] text-xl font-black leading-7 text-white">
          {food.title}
        </h3>

        <div className="mt-5 space-y-3 text-sm font-medium text-slate-400">
          <p className="flex items-start gap-2.5">
            <span className="shrink-0">🍽️</span>
            <span>{food.meals} estimated meals</span>
          </p>

          <p className="flex items-start gap-2.5">
            <span className="shrink-0">📍</span>
            <span className="break-words">{food.area}</span>
          </p>

          <p className="flex items-start gap-2.5">
            <span className="shrink-0">⏱️</span>
            <span>Pickup by {food.deadline}</span>
          </p>
        </div>

        {onRequest && (
          <button
            type="button"
            onClick={onRequest}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-sky-400 to-teal-400 py-3.5 font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/10 active:translate-y-0"
          >
            Request Food →
          </button>
        )}
      </div>
    </article>
  );
}
