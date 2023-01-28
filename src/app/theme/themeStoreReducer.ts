import { THEMEACTIONTYPE, THEMESTORE_TYPE } from "./theme.types";

export function themeStoreReducer(
  state: THEMESTORE_TYPE,
  action: THEMEACTIONTYPE
) {
  switch (action.type) {
    case "MODE-LIGHT":
      return { ...state, ...action.payload };
    case "MODE-DARK":
      return { ...state, ...action.payload };
    case "MODE-DIM":
      return { ...state, ...action.payload };
    case "ACCENT-RED":
      return { ...state, ...action.payload };
    case "ACCENT-ORANGE":
      return { ...state, ...action.payload };
    case "ACCENT-YELLOW":
      return { ...state, ...action.payload };
    case "ACCENT-GREEN":
      return { ...state, ...action.payload };
    case "ACCENT-BLUE":
      return { ...state, ...action.payload };
    case "ACCENT-INDIGO":
      return { ...state, ...action.payload };
    case "ACCENT-VIOLET":
      return { ...state, ...action.payload };
    case "ACCENT-MAGENTA":
      return { ...state, ...action.payload };
    case "AVATAR-USER":
      return { ...state, ...action.payload };
    case "AVATAR-ROBOT":
      return { ...state, ...action.payload };
    case "AVATAR-ROCKET":
      return { ...state, ...action.payload };
    case "AVATAR-BASKETBALL":
      return { ...state, ...action.payload };
    case "AVATAR-BASEBALL":
      return { ...state, ...action.payload };
    case "AVATAR-TENNIS":
      return { ...state, ...action.payload };
    case "AVATAR-BICYCLE":
      return { ...state, ...action.payload };
    case "AVATAR-PLANE":
      return { ...state, ...action.payload };
    case "AVATAR-CAR":
      return { ...state, ...action.payload };
    case "AVATAR-TRUCK":
      return { ...state, ...action.payload };
    case "AVATAR-HELICOPTER":
      return { ...state, ...action.payload };
    case "AVATAR-ANCHOR":
      return { ...state, ...action.payload };
    case "AVATAR-ZOMBIE":
      return { ...state, ...action.payload };
    case "AVATAR-MICROSCOPE":
      return { ...state, ...action.payload };
    case "AVATAR-APPLE":
      return { ...state, ...action.payload };
  }
}
