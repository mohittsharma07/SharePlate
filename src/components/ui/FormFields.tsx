type InputProps = {
  label: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
};

export function Input({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-sm font-extrabold text-slate-200">
        {label}
      </label>

      <input
        type={type}
        min={type === "number" ? "1" : undefined}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#15182b] px-4 py-3.5 font-medium text-white outline-none transition placeholder:text-slate-500 hover:border-white/15 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export function SelectField({
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-sm font-extrabold text-slate-200">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 rounded-2xl border border-white/10 bg-[#15182b] px-4 py-3.5 font-medium text-white outline-none transition hover:border-white/15 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/10"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#15182b] text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
