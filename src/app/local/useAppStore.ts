import { useReducer, useState } from "react";
import { APPSTOREOBJECTTYPE } from "./app.types";
import { appStoreReducer } from "./appStoreReducer";

export const APPSTOREOBJECT: APPSTOREOBJECTTYPE = {
  isStatus: "status-idle",
  isRegistered: false,
  isSession: false,
  isLoading: false,
  isHome: false,
};

export function useAppReducer() {
  const appReducer = useReducer(appStoreReducer, APPSTOREOBJECT);
  return appReducer;
}
