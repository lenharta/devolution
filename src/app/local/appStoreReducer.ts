import { APPSTOREACTIONTYPE, APPSTOREOBJECTTYPE } from "./app.types";

export function appStoreReducer(
  state: APPSTOREOBJECTTYPE,
  action: APPSTOREACTIONTYPE
) {
  switch (action.type) {
    case "ISHOME":
      return { ...state, isHome: action.payload };
    case "ISLOADING":
      return { ...state, isLoading: action.payload };
    case "ISSESSION":
      return { ...state, isSession: action.payload };
    case "ISREGISTERED":
      return { ...state, isRegistered: action.payload };
    case "STATUS-SUCCESS":
      return { ...state, isStatus: action.payload };
    case "STATUS-WARNING":
      return { ...state, isStatus: action.payload };
    case "STATUS-MISUSE":
      return { ...state, isStatus: action.payload };
    case "STATUS-ERROR":
      return { ...state, isStatus: action.payload };
    case "STATUS-HELP":
      return { ...state, isStatus: action.payload };
    case "STATUS-IDLE":
      return { ...state, isStatus: action.payload };
    default:
      return state;
  }
}

export type AppStoreReducerReturnType = ReturnType<typeof appStoreReducer>;
