import { createContext, useState } from "react";

type LocalStateObjectType = {
  isHome: boolean;
  isSession: boolean;
  success: string | "status-success";
  warning: string | "status-warning";
  misuse: string | "status-misuse";
  error: string | "status-error";
  help: string | "status-help";
};

const INITLOCALSTATE: LocalStateObjectType = {
  isHome: false,
  isSession: false,
  success: "",
  warning: "",
  misuse: "",
  error: "",
  help: "",
};

export function useLocalState() {
  const localState = useState(INITLOCALSTATE);
  return localState;
}

export type UseLocalStateReturnType = ReturnType<typeof useLocalState>;
export type LOCALSTATETYPE = UseLocalStateReturnType[0];
export type LOCALSTATESETTYPE = UseLocalStateReturnType[1];

export const LocalStateContext = createContext({} as UseLocalStateReturnType);

const LocalStateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LocalStateContext.Provider value={useLocalState()}>
      {children}
    </LocalStateContext.Provider>
  );
};

export default LocalStateContextProvider;
