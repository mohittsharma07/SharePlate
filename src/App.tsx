import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

import DonatePage from "./components/DonatePage";
import ExplorePage from "./components/ExplorePage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ImpactPage from "./components/ImpactPage";
import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/Navbar";

import { getInitialFoods, STORAGE_KEY } from "./data/foods";
import type { DonationFormState, Food, Page } from "./types/food";

import "./styles/shareplate.css";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [foods, setFoods] = useState<Food[]>(getInitialFoods);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [toast, setToast] = useState("");
  const [intro, setIntro] = useState(true);

  const [form, setForm] = useState<DonationFormState>({
    title: "",
    category: "Meals",
    meals: "",
    area: "",
    deadline: "",
    type: "Vegetarian",
  });

  // Intro screen
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntro(false);
    }, 1450);

    return () => window.clearTimeout(timer);
  }, []);

  // Save food listings
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
    } catch {
      // Ignore localStorage errors.
    }
  }, [foods]);

  const showToast = (message: string) => {
    setToast(message);

    window.setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const goTo = (target: Page) => {
    setPage(target);
    setMobileMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submitDonation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mealsNumber = Number(form.meals);

    if (
      !form.title.trim() ||
      !form.meals ||
      !form.area.trim() ||
      !form.deadline.trim()
    ) {
      showToast("Please fill all required fields.");
      return;
    }

    if (!Number.isFinite(mealsNumber) || mealsNumber <= 0) {
      showToast("Meals must be greater than 0.");
      return;
    }

    const newFood: Food = {
      id: Date.now(),
      title: form.title.trim(),
      category: form.category,
      meals: mealsNumber,
      area: form.area.trim(),
      deadline: form.deadline.trim(),
      type: form.type,
      status: "Available",
    };

    setFoods((current) => [newFood, ...current]);

    setForm({
      title: "",
      category: "Meals",
      meals: "",
      area: "",
      deadline: "",
      type: "Vegetarian",
    });

    showToast("Donation published successfully!");

    goTo("explore");
  };

  const filteredFoods = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return foods.filter((food) => {
      const matchesSearch =
        food.title.toLowerCase().includes(searchText) ||
        food.area.toLowerCase().includes(searchText) ||
        food.category.toLowerCase().includes(searchText);

      const matchesCategory = category === "All" || food.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [foods, search, category]);

  const totalMeals = foods.reduce((sum, food) => sum + food.meals, 0);

  return (
    <div className="site-root min-h-screen bg-[#070712] text-slate-800 selection:bg-teal-300 selection:text-slate-950">
      {intro && <IntroOverlay />}

      <Navbar
        currentPage={page}
        mobileOpen={mobileMenu}
        setMobileOpen={setMobileMenu}
        goTo={goTo}
      />

      {page === "home" && (
        <HomePage foods={foods} totalMeals={totalMeals} goTo={goTo} />
      )}

      {page === "explore" && (
        <ExplorePage
          filteredFoods={filteredFoods}
          search={search}
          category={category}
          setSearch={setSearch}
          setCategory={setCategory}
          showToast={showToast}
        />
      )}

      {page === "donate" && (
        <DonatePage
          form={form}
          setForm={setForm}
          submitDonation={submitDonation}
        />
      )}

      {page === "impact" && (
        <ImpactPage listingCount={foods.length} totalMeals={totalMeals} />
      )}

      <Footer />

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-3.5 text-center text-sm font-bold text-white shadow-2xl">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-400 text-xs text-slate-950">
              ✓
            </span>

            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
