import type { Food } from "../types/food";

export const STORAGE_KEY = "shareplate-foods";

export const demoFoods: Food[] = [
  {
    id: 1,
    title: "Fresh Vegetable Rice & Dal",
    category: "Meals",
    meals: 45,
    area: "Civil Lines",
    deadline: "Today, 9:00 PM",
    type: "Vegetarian",
    status: "Available",
  },
  {
    id: 2,
    title: "Fresh Rotis & Paneer Curry",
    category: "Indian Food",
    meals: 30,
    area: "Swaroop Nagar",
    deadline: "Today, 8:30 PM",
    type: "Vegetarian",
    status: "Available",
  },
  {
    id: 3,
    title: "Packed Rice & Curry Meals",
    category: "Packed Food",
    meals: 60,
    area: "Arya Nagar",
    deadline: "Today, 10:00 PM",
    type: "Vegetarian",
    status: "Available",
  },
];

export const categoryIcons: Record<string, string> = {
  Meals: "🍛",
  "Indian Food": "🥘",
  "Packed Food": "🥡",
  Bakery: "🥐",
  Other: "🍱",
};

function isValidFood(item: unknown): item is Food {
  if (!item || typeof item !== "object") {
    return false;
  }

  const food = item as Record<string, unknown>;

  return (
    typeof food.id === "number" &&
    typeof food.title === "string" &&
    typeof food.category === "string" &&
    typeof food.meals === "number" &&
    Number.isFinite(food.meals) &&
    typeof food.area === "string" &&
    typeof food.deadline === "string" &&
    typeof food.type === "string" &&
    typeof food.status === "string"
  );
}

export function getInitialFoods(): Food[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return demoFoods;
    }

    const parsed: unknown = JSON.parse(saved);

    if (Array.isArray(parsed)) {
      const validFoods = parsed.filter(isValidFood);

      if (validFoods.length > 0) {
        return validFoods;
      }
    }
  } catch {
    // Fall back to demo data if saved data cannot be loaded.
  }

  return demoFoods;
}
