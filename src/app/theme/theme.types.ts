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

export type THEMESTOREOBJECTTYPE = {
  mode: ThemeModeType;
  accent: ThemeAccentType;
  avatar: ThemeAvatarType;
};

export type THEMEACTIONTYPE =
  | { type: "MODE-LIGHT"; payload: "mode-light" }
  | { type: "MODE-DARK"; payload: "mode-dark" }
  | { type: "MODE-DIM"; payload: "mode-dim" }
  | { type: "ACCENT-RED"; payload: "accent-red" }
  | { type: "ACCENT-ORANGE"; payload: "accent-orange" }
  | { type: "ACCENT-YELLOW"; payload: "accent-yellow" }
  | { type: "ACCENT-GREEN"; payload: "accent-green" }
  | { type: "ACCENT-BLUE"; payload: "accent-blue" }
  | { type: "ACCENT-INDIGO"; payload: "accent-indigo" }
  | { type: "ACCENT-VIOLET"; payload: "accent-violet" }
  | { type: "ACCENT-MAGENTA"; payload: "accent-magenta" }
  | { type: "AVATAR-USER"; payload: "avatar-user" }
  | { type: "AVATAR-ROBOT"; payload: "avatar-robot" }
  | { type: "AVATAR-ROCKET"; payload: "avatar-rocket" }
  | { type: "AVATAR-BASKETBALL"; payload: "avatar-basketball" }
  | { type: "AVATAR-BASEBALL"; payload: "avatar-baseball" }
  | { type: "AVATAR-TENNIS"; payload: "avatar-tennis" }
  | { type: "AVATAR-BICYCLE"; payload: "avatar-bicycle" }
  | { type: "AVATAR-PLANE"; payload: "avatar-plane" }
  | { type: "AVATAR-CAR"; payload: "avatar-car" }
  | { type: "AVATAR-TRUCK"; payload: "avatar-truck" }
  | { type: "AVATAR-HELICOPTER"; payload: "avatar-helicopter" }
  | { type: "AVATAR-ANCHOR"; payload: "avatar-anchor" }
  | { type: "AVATAR-ZOMBIE"; payload: "avatar-zombie" }
  | { type: "AVATAR-MICROSCOPE"; payload: "avatar-microscope" }
  | { type: "AVATAR-APPLE"; payload: "avatar-apple" };
