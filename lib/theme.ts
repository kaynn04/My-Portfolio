export type PortfolioTheme = "light" | "spider";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_CHANGE_EVENT = "portfolio-theme-change";
export const THEME_TRANSITION_EVENT = "portfolio-theme-transition";

export function getStoredTheme(): PortfolioTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === "spider"
    ? "spider"
    : "light";
}

export function subscribeToThemeChanges(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function announceThemeTransition(isPlaying: boolean) {
  window.dispatchEvent(
    new CustomEvent(THEME_TRANSITION_EVENT, {
      detail: { isPlaying },
    }),
  );
}
