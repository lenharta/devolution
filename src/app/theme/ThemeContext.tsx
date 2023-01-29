import { createContext } from "react";
import { useAppReducer } from "../local/useAppStore";
import { useThemeStore } from "./useThemeStore";

export const ThemeContext = createContext(
  {} as ReturnType<typeof useThemeStore>
);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useThemeStore()}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
