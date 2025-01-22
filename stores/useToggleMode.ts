import { Theme } from "@/types/interfaces";
import { create } from "zustand";


interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

let defaultMode: Theme = "light";

export const useToggleMode = create<ThemeState>((set) => ({
  theme: defaultMode,
  toggleTheme: () => {
    console.log("Toggle");
    
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
  }
}));
