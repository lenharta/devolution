import { APPSTOREACTIONTYPE, APPSTOREOBJECTTYPE } from "./app.types";

export function appStoreReducer(
  state: APPSTOREOBJECTTYPE,
  action: APPSTOREACTIONTYPE
) {
  switch (action.type) {
    case "STATUS-ISHOME":
      return { ...state, ...action.payload };
    case "STATUS-ISLOADING":
      return { ...state, ...action.payload };
    case "STATUS-ISSESSION":
      return { ...state, ...action.payload };
    case "STATUS-ISREGISTERED":
      return { ...state, ...action.payload };
    case "STATUS-SUCCESS":
      return { ...state, ...action.payload };
    case "STATUS-WARNING":
      return { ...state, ...action.payload };
    case "STATUS-MISUSE":
      return { ...state, ...action.payload };
    case "STATUS-ERROR":
      return { ...state, ...action.payload };
    case "STATUS-HELP":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export type AppStoreReducerReturnType = ReturnType<typeof appStoreReducer>;
