type MiniStatProps = {
  value: string;
  label: string;
};

export function MiniStat({ value, label }: MiniStatProps) {
  return (
    <div className="min-w-0 px-3 text-center first:pl-0 last:pr-0">
      <div className="text-xl font-black text-white">{value}</div>

      <div className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}

type StatProps = {
  number: string | number;
  label: string;
  icon: string;
};

export function Stat({ number, label, icon }: StatProps) {
  return (
    <div className="group rounded-[1.75rem] border border-white/10 bg-[#15182b] p-5 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-teal-300/20 hover:shadow-2xl hover:shadow-teal-400/10 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 truncate text-3xl font-black text-white sm:text-4xl">
          {number}
        </div>

        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-400/10 text-xl transition duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <div className="mt-3 text-sm font-bold text-slate-400">{label}</div>
    </div>
  );
}
