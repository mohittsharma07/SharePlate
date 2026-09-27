export type FoodCategory =
  | "Meals"
  | "Indian Food"
  | "Packed Food"
  | "Bakery"
  | "Other";

export type FoodType = "Vegetarian" | "Non-Vegetarian" | "Mixed";

export type FoodStatus = "Available";

export type Food = {
  id: number;
  title: string;
  category: FoodCategory;
  meals: number;
  area: string;
  deadline: string;
  type: FoodType;
  status: FoodStatus;
};

export type Page = "home" | "explore" | "impact" | "donate";

export type DonationFormState = {
  title: string;
  category: FoodCategory;
  meals: string;
  area: string;
  deadline: string;
  type: FoodType;
};
