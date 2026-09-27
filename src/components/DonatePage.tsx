import type { FormEvent } from "react";
import type { DonationFormState } from "../types/food";

import { Input, SelectField } from "./ui/FormFields";

type DonatePageProps = {
  form: DonationFormState;
  setForm: React.Dispatch<React.SetStateAction<DonationFormState>>;
  submitDonation: (event: FormEvent<HTMLFormElement>) => void;
};

const categories = ["Meals", "Indian Food", "Packed Food", "Bakery", "Other"];

const foodTypes = ["Vegetarian", "Non-Vegetarian", "Mixed"];

export default function DonatePage({
  form,
  setForm,
  submitDonation,
}: DonatePageProps) {
  const updateField = (field: keyof DonationFormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#070712] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
              Share surplus food
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Turn extra food into{" "}
              <span className="bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                shared meals.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Add a food listing with the basic details so community
              organizations can discover what is available.
            </p>

            <form
              onSubmit={submitDonation}
              className="mt-10 rounded-[2rem] border border-white/10 bg-[#15182b] p-6 shadow-xl shadow-black/10 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="Food / Event Name"
                  value={form.title}
                  placeholder="e.g. Community lunch"
                  onChange={(value) => updateField("title", value)}
                />

                <Input
                  label="Estimated Meals"
                  value={form.meals}
                  placeholder="e.g. 50"
                  type="number"
                  onChange={(value) => updateField("meals", value)}
                />

                <SelectField
                  label="Food Category"
                  value={form.category}
                  options={categories}
                  onChange={(value) => updateField("category", value)}
                />

                <SelectField
                  label="Food Type"
                  value={form.type}
                  options={foodTypes}
                  onChange={(value) => updateField("type", value)}
                />

                <Input
                  label="Pickup Area"
                  value={form.area}
                  placeholder="e.g. Civil Lines"
                  onChange={(value) => updateField("area", value)}
                />

                <Input
                  label="Pickup Deadline"
                  value={form.deadline}
                  placeholder="e.g. Today, 9:00 PM"
                  onChange={(value) => updateField("deadline", value)}
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-sky-400 to-teal-400 py-4 font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/10"
              >
                Publish Food Listing →
              </button>
            </form>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-teal-600 to-sky-600 p-8 text-white shadow-2xl shadow-teal-900/20">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-300/10 blur-3xl" />

            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-2xl">
                🍽️
              </div>

              <h2 className="mt-7 text-3xl font-black">
                A little extra can become a meal.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                SharePlate keeps the donation flow simple: add the food, mention
                where it can be picked up, and make it easier for others to
                discover.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "List surplus food",
                  "Add pickup details",
                  "Help others discover it",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/15 text-sm font-black">
                      {index + 1}
                    </span>

                    <span className="text-sm font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-teal-100">
                  Prototype note
                </p>

                <p className="mt-2 text-sm leading-6 text-teal-50">
                  Only share food that is safe and suitable for consumption.
                  This project is a frontend demo.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
