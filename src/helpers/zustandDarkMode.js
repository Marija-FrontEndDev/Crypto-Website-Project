import { create } from "zustand";

export const darkModeConfig = create((set) => ({
    darkMode: JSON.parse(localStorage.getItem("DarkTheme")) ?? false,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  }));
  
  localStorage.clear();