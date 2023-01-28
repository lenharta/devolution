import { createContext } from "react";
import { useAppReducer } from "./useAppStore";

export const AppContext = createContext({} as ReturnType<typeof useAppReducer>);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContext.Provider value={useAppReducer()}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
