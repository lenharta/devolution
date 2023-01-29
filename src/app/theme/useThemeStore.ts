import { useReducer } from "react";
import { THEMESTOREOBJECTTYPE } from "./theme.types";
import { themeStoreReducer } from "./themeStoreReducer";

export const THEMESTOREOBJECT: THEMESTOREOBJECTTYPE = {
  mode: "mode-dark",
  accent: "accent-blue",
  avatar: "avatar-robot",
};

export function useThemeStore() {
  const reducer = useReducer(themeStoreReducer, THEMESTOREOBJECT);
  return reducer;
}
