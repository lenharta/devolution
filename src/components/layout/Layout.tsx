import { Outlet } from "react-router-dom";

export type ThemeModeType =
  | "theme-mode-light"
  | "theme-mode-dark"
  | "theme-mode-dim";

export enum THEMEMODE {
  light = "theme-mode-light",
  dark = "theme-mode-dark",
  dim = "theme-mode-dim",
}

export type ThemeAccentType =
  | "accent-red"
  | "accent-blue"
  | "accent-green"
  | "accent-yellow"
  | "accent-orange"
  | "accent-indigo"
  | "accent-violet"
  | "accent-magenta";

export enum THEMEACCENT {
  red = "accent-red",
  blue = "accent-blue",
  green = "accent-green",
  yellow = "accent-yellow",
  orange = "accent-orange",
  indigo = "accent-indigo",
  violet = "accent-violet",
  magenta = "accent-magenta",
}

export enum THEMESTATUS {
  warn = "status-warn",
  help = "status-help",
  error = "status-error",
  misuse = "status-misuse",
  success = "status-success",
  enabled = "status-enabled",
}

export type ThemeStatusType =
  | "status-warn"
  | "status-help"
  | "status-error"
  | "status-misuse"
  | "status-success"
  | "status-enabled";

export enum CONTAINERS {
  page = "container-page",
  tile = "container-tile",
  form = "container-form",
  layout = "container-layout",
  header = "container-header",
  footer = "container-footer",
}

export enum THEMEAVATAR {
  user = "avatar-user",
  robot = "avatar-robot",
  rocket = "avatar-rocket",
  basketball = "avatar-basketball",
  baseball = "avatar-baseball",
  tennis = "avatar-tennis",
  bicycle = "avatar-bicycle",
  plane = "avatar-plane",
  car = "avatar-car",
  truck = "avatar-truck",
  helicopter = "avatar-helicopter",
  anchor = "avatar-anchor",
  zombie = "avatar-zombie",
  microscope = "avatar-microscope",
  apple = "avatar-apple",
}

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

const Layout = () => {
  return (
    <div className="container-layout" data-theme-mode={THEMEMODE.dark}>
      <Outlet />
    </div>
  );
};
export default Layout;
