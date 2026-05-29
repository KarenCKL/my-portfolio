import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const img = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
