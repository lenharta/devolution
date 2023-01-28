import { createContext } from "react";
import { UseThemeStoreReturnType } from "./theme.types";
import { useThemeStore } from "./useThemeStore";

export const ThemeContext = createContext({} as UseThemeStoreReturnType);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useThemeStore()}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
