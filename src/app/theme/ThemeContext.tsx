import { createContext, useState } from "react";

export type ThemeModeType =
  | "theme-mode-light"
  | "theme-mode-dark"
  | "theme-mode-dim";

export type ThemeAccentType =
  | "theme-accent-red"
  | "theme-accent-orange"
  | "theme-accent-yellow"
  | "theme-accent-green"
  | "theme-accent-blue"
  | "theme-accent-indigo"
  | "theme-accent-violet"
  | "theme-accent-magenta";

export type ThemeAvatarType =
  | "avatar-user"
  | "avatar-robot"
  | "avatar-rocket"
  | "avatar-basketball"
  | "avatar-baseball"
  | "avatar-tennis"
  | "avatar-bicycle"
  | "avatar-plane"
  | "avatar-car"
  | "avatar-truck"
  | "avatar-helicopter"
  | "avatar-anchor"
  | "avatar-zombie"
  | "avatar-microscope"
  | "avatar-apple";

export interface ThemeObjectInterface {
  mode: ThemeModeType;
  accent: ThemeAccentType;
  avatar: ThemeAvatarType;
}

const INITTHEMEOBJECT: ThemeObjectInterface = {
  mode: "theme-mode-light",
  accent: "theme-accent-blue",
  avatar: "avatar-robot",
};

export function useThemeStore() {
  const localStore = useState(INITTHEMEOBJECT);
  return localStore;
}

export type UseThemeStoreReturnType = ReturnType<typeof useThemeStore>;
export type THEMEOBJECTTYPE = UseThemeStoreReturnType[0];
export type THEMEOBJECTSETTYPE = UseThemeStoreReturnType[1];

export const ThemeContext = createContext({} as UseThemeStoreReturnType);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useThemeStore()}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
