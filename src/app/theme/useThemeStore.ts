import { useState } from "react";
import { ThemeStoreObjectInterface } from "./theme.types";

export const THEMESTOREOBJECT: ThemeStoreObjectInterface = {
  mode: "mode-dark",
  accent: "accent-blue",
  avatar: "avatar-robot",
};

export function useThemeStore() {
  const themeStore = useState(THEMESTOREOBJECT);
  return themeStore;
}
