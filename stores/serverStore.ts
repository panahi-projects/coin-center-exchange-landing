import { Theme } from "@/types/interfaces";
import { useToggleMode } from "./useToggleMode";

export const getThemeFromStore = (): Theme => {
  // Create a temporary store instance to access the state
  const tempStore = useToggleMode.getState()
  return tempStore.theme;
};