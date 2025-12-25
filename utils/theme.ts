export type Theme =
  | "margritas"
  | "ElysiumFlowers"
  | "rainbow"
  | "blooms"
  | "whale";

const THEME_KEY = "app-theme";

export const setTheme = (theme: Theme): void => {
  document.body.className = theme;
  localStorage.setItem(THEME_KEY, theme);
};

export const loadTheme = (): void => {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null;
  document.body.className = saved ?? "margritas";
};
