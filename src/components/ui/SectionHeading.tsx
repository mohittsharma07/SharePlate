type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}
