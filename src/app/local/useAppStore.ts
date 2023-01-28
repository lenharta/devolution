import { useReducer, useState } from "react";
import { APPSTOREOBJECTTYPE } from "./app.types";
import { appStoreReducer } from "./AppStoreReducer";

export const APPSTOREOBJECT: APPSTOREOBJECTTYPE = {
  isRegistered: false,
  isSession: false,
  isLoading: false,
  isHome: false,
  success: "",
  warning: "",
  misuse: "",
  error: "",
  help: "",
};

export function useAppReducer() {
  const appReducer = useReducer(appStoreReducer, APPSTOREOBJECT);
  return appReducer;
}
