import { THEMEACTIONTYPE, THEMESTOREOBJECTTYPE } from "./theme.types";

export function themeStoreReducer(
  state: THEMESTOREOBJECTTYPE,
  action: THEMEACTIONTYPE
) {
  switch (action.type) {
    case "MODE-LIGHT":
      return { ...state, mode: action.payload };
    case "MODE-DARK":
      return { ...state, mode: action.payload };
    case "MODE-DIM":
      return { ...state, mode: action.payload };
    case "ACCENT-RED":
      return { ...state, accent: action.payload };
    case "ACCENT-ORANGE":
      return { ...state, accent: action.payload };
    case "ACCENT-YELLOW":
      return { ...state, accent: action.payload };
    case "ACCENT-GREEN":
      return { ...state, accent: action.payload };
    case "ACCENT-BLUE":
      return { ...state, accent: action.payload };
    case "ACCENT-INDIGO":
      return { ...state, accent: action.payload };
    case "ACCENT-VIOLET":
      return { ...state, accent: action.payload };
    case "ACCENT-MAGENTA":
      return { ...state, accent: action.payload };
    case "AVATAR-USER":
      return { ...state, avatar: action.payload };
    case "AVATAR-ROBOT":
      return { ...state, avatar: action.payload };
    case "AVATAR-ROCKET":
      return { ...state, avatar: action.payload };
    case "AVATAR-BASKETBALL":
      return { ...state, avatar: action.payload };
    case "AVATAR-BASEBALL":
      return { ...state, avatar: action.payload };
    case "AVATAR-TENNIS":
      return { ...state, avatar: action.payload };
    case "AVATAR-BICYCLE":
      return { ...state, avatar: action.payload };
    case "AVATAR-PLANE":
      return { ...state, avatar: action.payload };
    case "AVATAR-CAR":
      return { ...state, avatar: action.payload };
    case "AVATAR-TRUCK":
      return { ...state, avatar: action.payload };
    case "AVATAR-HELICOPTER":
      return { ...state, avatar: action.payload };
    case "AVATAR-ANCHOR":
      return { ...state, avatar: action.payload };
    case "AVATAR-ZOMBIE":
      return { ...state, avatar: action.payload };
    case "AVATAR-MICROSCOPE":
      return { ...state, avatar: action.payload };
    case "AVATAR-APPLE":
      return { ...state, avatar: action.payload };
    default:
      return state;
  }
}
