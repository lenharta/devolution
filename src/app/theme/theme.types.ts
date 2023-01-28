import { useThemeStore } from "./useThemeStore";

export type ThemeModeType = "mode-light" | "mode-dark" | "mode-dim";

export type ThemeAccentType =
  | "accent-red"
  | "accent-orange"
  | "accent-yellow"
  | "accent-green"
  | "accent-blue"
  | "accent-indigo"
  | "accent-violet"
  | "accent-magenta";

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

export type THEMEACTIONTYPE =
  | { type: "MODE-LIGHT"; payload: { mode: "mode-light" } }
  | { type: "MODE-DARK"; payload: { mode: "mode-dark" } }
  | { type: "MODE-DIM"; payload: { mode: "mode-dim" } }
  | { type: "ACCENT-RED"; payload: { accent: "accent-red" } }
  | { type: "ACCENT-ORANGE"; payload: { accent: "accent-orange" } }
  | { type: "ACCENT-YELLOW"; payload: { accent: "accent-yellow" } }
  | { type: "ACCENT-GREEN"; payload: { accent: "accent-green" } }
  | { type: "ACCENT-BLUE"; payload: { accent: "accent-blue" } }
  | { type: "ACCENT-INDIGO"; payload: { accent: "accent-indigo" } }
  | { type: "ACCENT-VIOLET"; payload: { accent: "accent-violet" } }
  | { type: "ACCENT-MAGENTA"; payload: { accent: "accent-magenta" } }
  | { type: "AVATAR-USER"; payload: { avatar: "avatar-user" } }
  | { type: "AVATAR-ROBOT"; payload: { avatar: "avatar-robot" } }
  | { type: "AVATAR-ROCKET"; payload: { avatar: "avatar-rocket" } }
  | { type: "AVATAR-BASKETBALL"; payload: { avatar: "avatar-basketball" } }
  | { type: "AVATAR-BASEBALL"; payload: { avatar: "avatar-baseball" } }
  | { type: "AVATAR-TENNIS"; payload: { avatar: "avatar-tennis" } }
  | { type: "AVATAR-BICYCLE"; payload: { avatar: "avatar-bicycle" } }
  | { type: "AVATAR-PLANE"; payload: { avatar: "avatar-plane" } }
  | { type: "AVATAR-CAR"; payload: { avatar: "avatar-car" } }
  | { type: "AVATAR-TRUCK"; payload: { avatar: "avatar-truck" } }
  | { type: "AVATAR-HELICOPTER"; payload: { avatar: "avatar-helicopter" } }
  | { type: "AVATAR-ANCHOR"; payload: { avatar: "avatar-anchor" } }
  | { type: "AVATAR-ZOMBIE"; payload: { avatar: "avatar-zombie" } }
  | { type: "AVATAR-MICROSCOPE"; payload: { avatar: "avatar-microscope" } }
  | { type: "AVATAR-APPLE"; payload: { avatar: "avatar-apple" } };

export interface ThemeStoreObjectInterface {
  mode: ThemeModeType;
  accent: ThemeAccentType;
  avatar: ThemeAvatarType;
}

export type UseThemeStoreReturnType = ReturnType<typeof useThemeStore>;
export type THEMESTORE_TYPE = UseThemeStoreReturnType[0];
export type THEMESTORE_SETTYPE = UseThemeStoreReturnType[1];
